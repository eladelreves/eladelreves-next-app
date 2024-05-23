// userContext.js
import { getCurrentUser, logout } from '@services/Auth';
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    async function fetchUser() {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
    }
    fetchUser();

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
