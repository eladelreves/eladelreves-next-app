'use client'

import { useState } from 'react';
import './perfil.css'

import { useUser } from "src/contexts/userContext";
import { uploadProfilePhoto } from '@services/Auth';

export default function Perfil() {
    const { user, handleLogout } = useUser();

    const handleLogoutClick = () => {
        handleLogout();
    };

    const [selectedFile, setSelectedFile] = useState(null);

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        uploadProfilePhoto(selectedFile, user)
    };

    // Función para manejar el cambio en la selección del archivo
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className="custom-file-upload">
                    Seleccionar foto
                </label>
                <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
                <input type="submit" value="Send" />
            </form>

            {user &&
                <>
                    <button onClick={handleLogoutClick}>Cerrar sesión</button> <br />
                    <span>{user.email}</span>
                </>
            }
        </>
    );
}
