'use client'
import styles from './delreves.module.css';
import { Video } from './video/Video';

export default function Delreves() {
    const videos = [
        '/videos/matchDay_video.mp4',
        '/videos/app-publicity.mp4'
    ];

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
