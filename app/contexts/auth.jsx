import React from 'react'
import { createContext } from 'react';

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = ({ children }) => (
    <AuthContext.Provider value={{ signed: true }}>
        {children}
    </AuthContext.Provider>
);

