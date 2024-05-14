'use client'
import { useState, useEffect } from 'react';
import styles from './delreves.module.css';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'; // Importa las funciones necesarias de Firebase Storage
import { uploadVideo } from '@services/Auth'
import { useUser } from "src/contexts/userContext";
import { Video } from './video/Video';

export default function Delreves() {
    const [videos, setVideos] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        uploadVideo(selectedFile, user);
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    
    const fetchVideos = async () => {
        try {
            const storage = getStorage();
            const videosRef = ref(storage, 'videos'); // Referencia a la carpeta donde se almacenan los videos
            const videoList = await listAll(videosRef); // Obtiene una lista de todos los archivos en la carpeta

            const urls = await Promise.all(videoList.items.map(async (item) => {
                const url = await getDownloadURL(item);
                return url;
            }));

            setVideos(urls);
            console.log('Videos imported successfully');
            
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className="custom-file-upload">
                    Seleccionar video
                </label>
                <input id="file-upload" type="file" accept="video/*" onChange={handleFileChange}/>
                <input type="submit" value="Enviar" />
            </form>

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
