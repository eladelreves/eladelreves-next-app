'use client'
import { useState, useEffect } from 'react';
import styles from './delreves.module.css';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'; // Importa las funciones necesarias de Firebase Storage
import { uploadVideo } from '@services/Auth'
import { useUser } from "src/contexts/userContext";
import { Video } from './video/Video';
import VideoForm from '@components/_common/videoForm/VideoForm'

export default function Delreves() {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            const storage = getStorage();
            const videosRef = ref(storage, 'videos');
            const videoList = await listAll(videosRef);

            const urls = await Promise.all(videoList.items.map(async (item) => {
                const url = await getDownloadURL(item);
                return url;
            }));

            setVideos(urls);
        } catch (error) {
            console.error('Error al obtener los videos:', error);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const { user } = useUser();

    return (
        <>
            <VideoForm></VideoForm>

            <h2 id={styles.delreves_title}>Últimos <span className='elaGreen'>Videos</span></h2>
            <div id={styles.videos_container}>
                {videos.map((videoUrl, index) => (
                    <Video user={user.email} key={index} video={videoUrl} controls>
                    </Video>
                ))}
            </div>
        </>
    );
}
