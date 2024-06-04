'use client'

import { useEffect, useState } from 'react';
import styles from './perfil.module.css'

import { useUser } from "src/contexts/userContext";
import { uploadProfilePhoto, fetchVideosByUser, deleteVideo } from '@services/Auth';
import Modal from 'react-modal';
import VideoPlayer from './videoPlayer/VideoPlayer'
import { RotatingLines } from 'react-loader-spinner';
import VideoForm from '@components/_common/videoForm/VideoForm';

export default function Perfil() {
    const { user } = useUser();
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setModalIsOpen(false);
        const result = await uploadProfilePhoto(selectedFile, user)
        if (result) window.location.reload();
    };


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        async function fetchVideos() {
            try {
                const videos = await fetchVideosByUser(user);
                setVideos(videos);
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
            <br /><br /><br />
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
                </>
            ) : (
                <>
                    <h2 className={styles.videos_title}>¡Sube tu <span className='elaGreen'>primer video</span>!</h2>
                    <VideoForm></VideoForm>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </>
            )}
        </>
    );
}
