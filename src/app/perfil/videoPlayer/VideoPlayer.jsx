import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ videoUrl }){
    return (
        <div className={styles.videoContainer}>
            <video src={videoUrl} autoPlay muted loop>
                Tu navegador no admite el elemento de video.
            </video>
            <img src="/icons/threedots.svg" id={styles.three_dots} />
        </div>
    );
};

