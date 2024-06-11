'use client';

import { insertNew } from '@services/News';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Modal from 'react-modal';
import 'react-quill/dist/quill.snow.css';
import { useUser } from 'src/contexts/userContext';
import styles from './addNewForm.module.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function AddNewForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { user } = useUser();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errorMessages = [];

        if (title.length > 70) {
            errorMessages.push('El título no debe exceder los 50 caracteres.');
        }
        if (content.length > 4000) {
            errorMessages.push('El contenido no debe exceder los 3000 caracteres.');
        }

        if (errorMessages.length > 0) {
            setErrors(errorMessages);
            return;
        }

        setErrors([]);
        await insertNew(title, content, images);

        setTitle('');
        setContent('');
        setImages([]);
        setModalIsOpen(false);
    };

    const modules = {
        toolbar: [
            ['bold', 'italic'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link']
        ],
    };

    const handleClick = () => {
        setModalIsOpen(!modalIsOpen);
        document.querySelector('body').style.overflow = modalIsOpen ? 'visible' : 'hidden';
    };

    return (
        <>
            {user && (
                <div id={styles.add_new_button_container}>
                    <button id={styles.add_new_button} onClick={handleClick} src="/icons/edit.svg" alt="">
                        Añadir Noticia
                    </button>
                </div>
            )}

            <Modal ariaHideApp={false} id={styles.add_new_form} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{ content: { overflow: 'hidden' } }}>
                <form onSubmit={handleSubmit} style={{ color: 'black' }}>
                    <input
                        type="text"
                        id="title"
                        placeholder='Título...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div>
                        <ReactQuill
                            placeholder='Contenido...'
                            value={content}
                            onChange={setContent}
                            modules={modules}
                        />
                    </div>
                    <div>
                        <label htmlFor="images">Imágenes: </label>
                        <input
                            type="file"
                            id="images"
                            multiple
                            onChange={(e) => setImages(Array.from(e.target.files))}
                        />
                    </div>
                    {errors.length > 0 && (
                        <div className={styles.error}>
                            {errors.map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    )}
                    <button id={styles.add_new_button} styles={{ position: 'static' }} type="submit">Agregar Noticia</button>
                </form>

                <img
                    src="/icons/close.svg"
                    onClick={handleClick}
                />
            </Modal>
        </>
    );
}
