import styles from './video.module.css'

export function Video({ video }) {
    return (
        <div className={styles.div_con_video}>
            <span>@eladelrevés</span>

            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    )
}