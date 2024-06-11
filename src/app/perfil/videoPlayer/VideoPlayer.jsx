import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ index, videoUrl, deleteVideo }) {
    return (
        <div className={styles.videoContainer}>
            <video src={videoUrl} allowFullScreen={false} controls muted loop>
                Tu navegador no admite el elemento de video.
            </video>
            <img
                src="/icons/bin.svg"
                id={styles.bin}
                onClick={() => deleteVideo(index, videoUrl)}
            />
        </div>
    );
};

