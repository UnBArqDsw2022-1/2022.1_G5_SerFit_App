import React, { useState, useEffect } from 'react'
import { createContext } from 'react';
import * as authServices from "../services/auth";
import AsyncStorage from  '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const loadStorageData = async () => {
          const storagedAuth = await AsyncStorage.getItem('@SerFit:auth');
          const storagedToken = await AsyncStorage.getItem('@SerFit:token');
    
          if (storagedAuth && storagedToken) {
            setAuth(JSON.parse(storagedAuth) === true);
          }
        }
    
        loadStorageData();
    },[]);

    const signIn = async (email) => {
        const response = await authServices.signIn(email);
        console.log(response)
        setAuth(response.auth)

        await AsyncStorage.setItem('@SerFit:auth', JSON.stringify(response.auth));
        await AsyncStorage.setItem('@SerFit:token', response.token);
    }

    const signOut = () => {
        setAuth(false); 
    }

    return(
        <AuthContext.Provider value={{auth, user: {}, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

