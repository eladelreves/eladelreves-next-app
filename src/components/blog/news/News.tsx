import styles from './news.module.css'
import PropTypes from 'prop-types';

News.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string
};

export function News({ imgUrl, title }) {
    return(
        <>
            <div className={styles.newsTemplate} style={{backgroundImage: `url(${imgUrl})`}}>
                <h3>{title}</h3>
            </div>
        </>
    )
}