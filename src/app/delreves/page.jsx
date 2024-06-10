'use client'
import { useState, useEffect } from 'react';
import styles from './delreves.module.css';
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import { Video } from './video/Video';

export default function Delreves() {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            const storage = getStorage();
            const videosRef = ref(storage, 'videos');
            const videoList = await listAll(videosRef);

            const videosWithMetadata = await Promise.all(videoList.items.map(async (item) => {
                const metadata = await getMetadata(item);
                const url = await getDownloadURL(item);
                return { url, timeCreated: metadata.timeCreated };
            }));

            videosWithMetadata.sort((a, b) => new Date(a.timeCreated) - new Date(b.timeCreated));

            const urls = videosWithMetadata.map(video => video.url);

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
            <br /><br />
        </>
    );
}
