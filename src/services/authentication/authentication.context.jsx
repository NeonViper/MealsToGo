import React, { createContext, useEffect, useState } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((user) => {
                setUser(user);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString().split("Firebase:")[1]);
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin: onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
