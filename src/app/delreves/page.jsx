'use client'
import { useState, useEffect } from 'react';
import styles from './delreves.module.css';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
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


    return (
        <>
            <h2 id={styles.delreves_title}>Últimos <span className='elaGreen'>Videos</span></h2>
            <div id={styles.videos_container}>
                {videos.map((videoUrl, index) => (
                    <Video key={index} video={videoUrl} controls>
                    </Video>
                ))}
            </div>
            <h3 id={styles.delreves_title}>Descárgate la <span className='elaGreen'>app</span> para ver los vídeos de los retos y para contribuir con la causa!</h3>
            <br /><br />
        </>
    );
}
