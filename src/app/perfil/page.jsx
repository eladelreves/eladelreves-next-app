'use client'

import { useState } from 'react';
import styles from './perfil.module.css'

import { useUser } from "src/contexts/userContext";
import { uploadProfilePhoto } from '@services/Auth';
import Modal from 'react-modal';

export default function Perfil() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        uploadProfilePhoto(selectedFile, user)
        setModalIsOpen(false);
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    const { user } = useUser();


    return (
        <>
            <div id={styles.profile_info}>
                <div id={styles.profile_image}>
                    <img src={user?.photoURL} alt="" />
                    <img onClick={() => setModalIsOpen(true)} src="/icons/edit.svg" alt="" />
                </div>
                <span>{user?.email}</span>
            </div>

            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h2>Seleccionar foto</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="file-upload" className="custom-file-upload">
                            Seleccionar foto
                        </label>
                        <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
                        <input type="submit" value="Enviar" />
                    </form>
                    <button onClick={() => setModalIsOpen(false)}>Cerrar Modal</button>
                </Modal>
            </div>
        </>
    );
}
