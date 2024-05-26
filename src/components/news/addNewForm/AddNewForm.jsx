'use client'

import styles from './addNewForm.module.css'
import Modal from 'react-modal';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { insertNew } from '@services/News'

export default function AddNewForm() {
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        insertNew(title, content, images);
    };

    return (
        <>
            <button id={styles.add_new_button} onClick={() => { setModalIsOpen(true); document.querySelector('body').style.overflow = modalIsOpen ? 'visible' : 'hidden' }} src="/icons/edit.svg" alt="">
                Añadir Noticia
            </button>

            <Modal ariaHideApp={false} id={styles.add_new_form} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Título:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Contenido:</label>
                        <ReactQuill value={content} onChange={setContent} />
                    </div>
                    <div>
                        <label htmlFor="images">Imágenes:</label>
                        <input
                            type="file"
                            id="images"
                            multiple
                            onChange={(e) => setImages(Array.from(e.target.files))}
                        />
                    </div>
                    <button type="submit">Agregar Noticia</button>
                </form>

                <img src='/icons/close.svg' onClick={() => {
                    setModalIsOpen(false);
                    document.querySelector('body').style.overflow = 'visible'
                }}
                />
            </Modal>
        </>
    )
}