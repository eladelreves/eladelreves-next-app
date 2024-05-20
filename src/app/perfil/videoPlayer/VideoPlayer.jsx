import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ index ,videoUrl, deleteVideo }){
    return (
        <div className={styles.videoContainer}>
            <video src={videoUrl} autoPlay muted loop>
                Tu navegador no admite el elemento de video.
            </video>
            <img 
                src="/icons/threedots.svg" 
                id={styles.three_dots} 
                onClick={()=> deleteVideo(index)}
            />
        </div>
    );
};

