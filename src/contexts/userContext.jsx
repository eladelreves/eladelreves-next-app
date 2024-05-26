'use client'
import { getCurrentUser, logout } from '@services/Auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error(error);
                setUser(null);
            }
        }

        fetchUser();
    }, []);

    const handleLogout = () => {
        logout()
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}
