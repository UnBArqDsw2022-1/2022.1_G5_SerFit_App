import React, { useState, useEffect } from 'react'
import { createContext } from 'react';
import * as authServices from "../services/auth";
import AsyncStorage from  '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import api from '../services/api';

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();


    useEffect(() => {
        const loadStorageData = async () => {
            const storagedAuth = await AsyncStorage.getItem('@SerFit:auth');
            const storagedToken = await AsyncStorage.getItem('@SerFit:token');
            const storagedId = await AsyncStorage.getItem('@SerFit:id');


            if (storagedAuth && storagedToken && storagedId) {
                setAuth(JSON.parse(storagedAuth) === true);
                api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
                setId(parseInt(storagedId));
            }

            setLoading(false);
        }
    
        loadStorageData();
    },[]);

    const signIn = async (email, password) => {
        // const response = await authServices.signIn(email, password);
        // console.log(response);
        // setAuth(response.auth);

        // api.defaults.headers.Authorization = `Baerer ${response.token}`;

        // await AsyncStorage.setItem('@SerFit:auth', JSON.stringify(response.auth));
        // await AsyncStorage.setItem('@SerFit:token', response.token);

        const user = {
            email: email.toLowerCase(),
            password
        }
        try{
            const { data } = await api.post("/api/login", user);

            response = data

            console.log(response)
            
            setAuth(response.auth);
            setId(response.id);

            api.defaults.headers.Authorization = `Baerer ${response.token}`;

            await AsyncStorage.setItem('@SerFit:auth', JSON.stringify(response.auth));
            await AsyncStorage.setItem('@SerFit:token', response.token);
            await AsyncStorage.setItem('@SerFit:id', JSON.stringify(response.id));

        }
        catch {
            Alert.alert(
                "Erro!",
                "Tente Novamente:",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
    }

    const createAccount = async (name, email, password, accountType, mainInterest) => {

        const user = {
            name,
            email: email.toLowerCase(),
            password,
            accountType,
            mainInterest
        }
        try{
            const { data } = await api.post("/api/user/create", user);

            response = data

            console.log(response)
            
            setAuth(response.auth);
            // setId(storagedId);


            api.defaults.headers.Authorization = `Baerer ${response.token}`;

            await AsyncStorage.setItem('@SerFit:auth', JSON.stringify(response.auth));
            await AsyncStorage.setItem('@SerFit:token', response.token);
            // await AsyncStorage.setItem('@SerFit:id', response.id);

            console.log(response.id)

        }
        catch {
            Alert.alert(
                "Erro!",
                "Tente Novamente:",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
    }


    const signOut = async () => {
        await AsyncStorage.clear();
        setAuth(false); 
    }

    return(
        <AuthContext.Provider value={{auth, loading, id, signIn, signOut, createAccount}}>
            {children}
        </AuthContext.Provider>
    );
};

