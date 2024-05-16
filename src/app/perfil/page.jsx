'use client'

import { useEffect, useState } from 'react';
import styles from './perfil.module.css'

import { useUser } from "src/contexts/userContext";
import { uploadProfilePhoto } from '@services/Auth';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'; // Importa las funciones necesarias de Firebase Storage
import Modal from 'react-modal';
import { RotatingLines } from 'react-loader-spinner';

export default function Perfil() {
    const [image, setImage] = useState('/icons/default.png');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const [videos, setVideos] = useState([]);

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

    const fetchVideosByUser = async () => {
        try {
            const storage = getStorage();
            const videosRef = ref(storage, `videos/${user.uid}`);
            const videoList = await listAll(videosRef);
            console.log(user);
            const urls = await Promise.all(videoList.items.map(async (item) => {
                const url = await getDownloadURL(item);
                return url;
            }));

            setVideos(urls);
        } catch (error) {
            console.error('Error al obtener los videos:', error);
        }
    };
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        fetchVideosByUser();
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

            <br /><br /><br />
            {videos.length > 0 ? (
                <>
                <h2 className={styles.videos_title}>Tus <span className='elaGreen'>videos!</span></h2>
                <br /><br /><br /><br />
                    <div id={styles.user_videos}>
                        {videos.map((videoUrl, index) => (
                            <video src={videoUrl} controls autoPlay loop>
                                Tu navegador no admite el elemento de video.
                            </video>
                        ))}
                        {isLoading && <div ref={loaderRef}></div>}
                    </div>
                </>
            ) : (
                <h2 className={styles.videos_title}>Sube tus <span className='elaGreen'>videos</span>!</h2>
            )}
        </>
    );
}
