import styles from './video.module.css'
import PropTypes from 'prop-types';

Video.propTypes = {
    user: PropTypes.string,
    video: PropTypes.string
};

export function Video({ user, video }){
    return(
        <div className={styles.div_con_video}>
            <span>@eladelrevés</span>

            <video autoPlay loop controls>
                <source src={video} type="video/mp4"/>
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    )
}