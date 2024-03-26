import React, { createContext, useEffect, useState } from "react";

import {
    checkSession,
    logOutRequest,
    loginRequest,
    registerRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        checkSession(setUser, setIsLoading);
    }, []);

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

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }

        registerRequest(email, password)
            .then((user) => {
                setUser(user);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString().split("Firebase:")[1].split(" (")[0]);
            });
    };

    const onLogout = () => {
        setUser(null);
        logOutRequest();
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin: onLogin,
                onRegister: onRegister,
                onLogout: onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
