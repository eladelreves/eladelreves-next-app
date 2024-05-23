import styles from './homeSections.module.css'
import DownloadApp from './downloadApp/DownloadApp'

export default function DelrevesSection() {
    return (
        <>
            <section className={styles.home_sections} style={{ paddingBottom: '0px', marginBottom: '0px', borderBottom: '0px' }}>
                <DownloadApp></DownloadApp>
            </section>
        </>
    )
}