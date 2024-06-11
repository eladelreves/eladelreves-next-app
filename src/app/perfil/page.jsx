'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './perfil.module.css';

import VideoForm from '@components/_common/videoForm/VideoForm';
import { deleteVideo, fetchVideosByUser, isDisplayNameUnique, updateUserDisplayName, uploadProfilePhoto } from '@services/Auth';
import { RotatingLines } from 'react-loader-spinner';
import Modal from 'react-modal';
import { useUser } from "src/contexts/userContext";
import Swal from 'sweetalert2';
import VideoPlayer from './videoPlayer/VideoPlayer';

export default function Perfil() {
    const { user } = useUser();
    const [image, setImage] = useState('/icons/default.png');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalUsernameIsOpen, setModalUsernameIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [videos, setVideos] = useState([]);
    const [newDisplayName, setNewDisplayName] = useState(user?.displayName || '');
    const [isLoading, setIsLoading] = useState(true);
    const loaderRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        setSelectedFile(file);

        reader.onloadend = () => {
            setImage(reader.result);
        };

        file && reader.readAsDataURL(file);
    };

    const handleDisplayNameChange = (event) => {
        setNewDisplayName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setModalIsOpen(false);
        const result = await uploadProfilePhoto(selectedFile, user)
        if (result) {
            Swal.fire({
                icon: 'success',
                title: 'Imagen actualizada!',
            }).then(() => {
                window.location.reload();
            });
        }
    };

    const handleDisplayNameUpdate = async (e) => {
        e.preventDefault();
        const usernameRegex = /^[a-zA-Z0-9]{3,30}$/;
        if (
            usernameRegex.test(newDisplayName) &&
            user.displayName !== newDisplayName &&
            await isDisplayNameUnique(newDisplayName)
        ) {
            setIsLoading(true);
            const success = await updateUserDisplayName(user, newDisplayName);
            if (success) {
                user.displayName = newDisplayName;
            }
            setIsLoading(false);
            setModalUsernameIsOpen(false);
        } else {
            Swal.fire({
                icon: 'error',
                title: "Error",
                text: "Revisa los datos introducidos.",
            });
        }
    };

    useEffect(() => {
        async function fetchVideos() {
            try {
                const videos = await fetchVideosByUser(user);
                setVideos(videos);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener los videos:', error);
            }
        }
        fetchVideos();
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
                        <div id={styles.display_name}>
                            <span>Nombre de usuario: {user?.displayName}</span>
                            <img src="/icons/edit.svg" alt="" onClick={() => setModalUsernameIsOpen(true)} />
                        </div>
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

            <Modal id={styles.name_modal} isOpen={modalUsernameIsOpen} onRequestClose={() => setModalUsernameIsOpen(false)}>
                <form onSubmit={handleDisplayNameUpdate}>
                    <img src="/media/png/logo_main_amarillo.png" alt="" />
                    <label htmlFor="newDisplayName">
                        Nombre de usuario:
                    </label>

                    <input
                        type="text"
                        id={styles.newDisplayName}
                        value={newDisplayName}
                        onChange={handleDisplayNameChange}
                    /><br />

                    <input type="submit" value="Editar usuario" />
                </form>
                <img src='/icons/close.svg' onClick={() => setModalUsernameIsOpen(false)} />
            </Modal>

            <br />
            {videos?.length > 0 ? (
                <>
                    <h2 className={styles.videos_title}>Tus <span className='elaGreen'>videos!</span></h2>
                    <br /><br /><br /><br />
                    <div id={styles.user_videos}>
                        {videos.map((videoUrl, index) => (
                            <VideoPlayer
                                key={index}
                                index={index}
                                videoUrl={videoUrl}
                                deleteVideo={() => deleteVideo(videoUrl)}
                            />
                        ))}
                        {isLoading && <div ref={loaderRef}></div>}
                    </div>
                    <h3 id={styles.delreves_title}>Descárgate la <span className='elaGreen'>app</span> para subir más vídeos de los retos y para contribuir con la causa!</h3>
                    <br /><br /><br />
                </>
            ) : (
                <>
                    <h2 className={styles.videos_title}>¡Sube tu <span className='elaGreen'>primer video</span>!</h2>
                    <br /><br />
                    <VideoForm></VideoForm>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </>
            )}
        </>
    );
}
