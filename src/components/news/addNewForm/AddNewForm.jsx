'use client'

import styles from './addNewForm.module.css'
import Modal from 'react-modal';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { insertNew } from '@services/News'
import ReactQuill from 'react-quill'

export default function AddNewForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        insertNew(title, content, images);
    };

    const modules = {
        toolbar: [
            ['bold', 'italic'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link']
        ],
    }

    return (
        <>
            <div id={styles.add_new_button_container}>
                <button id={styles.add_new_button} onClick={() => { setModalIsOpen(true); document.querySelector('body').style.overflow = modalIsOpen ? 'visible' : 'hidden' }} src="/icons/edit.svg" alt="">
                    Añadir Noticia
                </button>
            </div>

            <Modal ariaHideApp={false} id={styles.add_new_form} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{ content: { overflow: 'hidden' } }}>
                <form onSubmit={handleSubmit}>
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
                    <button id={styles.add_new_button} styles={{ position: 'static' }} type="submit">Agregar Noticia</button>
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