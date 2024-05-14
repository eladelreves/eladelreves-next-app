'use client'

import { useEffect, useState } from 'react';
import styles from './perfil.module.css'

import { useUser } from "src/contexts/userContext";
import { uploadProfilePhoto } from '@services/Auth';
import Modal from 'react-modal';
import { RotatingLines } from 'react-loader-spinner';

export default function Perfil() {
    const [image, setImage] = useState('/icons/default.png');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        setSelectedFile(file);

        reader.onloadend = () => {
            setImage(reader.result);
        };

        file && reader.readAsDataURL(file);
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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [user]);

    return (
        <>
            <div id={styles.profile_info}>
                {user &&
                    <>
                        <div id={styles.profile_image}>
                            <img src={user?.photoURL} alt="" />
                            <img onClick={() => setModalIsOpen(true)} src="/icons/edit.svg" alt="" />
                        </div>
                        <span>{user?.email}</span>
                    </>
                }

                {isLoading &&
                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                }
            </div>

            <div>
                <Modal id={styles.edit_modal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={styles.file_upload} id={styles.custom_file_upload}>
                            Seleccionar foto
                        </label>

                        <input id={styles.file_upload} type="file" accept="image/*" onChange={handleFileChange} /><br />

                        {image && (
                            <img
                                src={image}
                                alt="Preview"
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                            />
                        )}<br />

                        <input type="submit" value="Guardar cambios" className={styles.custom_file_upload} />
                    </form>
                    <img src='/icons/close.svg' onClick={() => setModalIsOpen(false)} />
                </Modal>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}
