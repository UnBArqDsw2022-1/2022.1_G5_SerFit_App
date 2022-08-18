import React, { useState } from 'react'
import { createContext } from 'react';
import * as authServices from "../services/auth";

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    const signIn = async (email) => {
        const response = await authServices.signIn(email);
        console.log(response)
        setAuth(response.auth)
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

