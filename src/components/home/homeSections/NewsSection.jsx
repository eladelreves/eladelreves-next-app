import styles from './homeSections.module.css'
import NewsSlider from './newsSlider/NewsSlider'

export default function LaElaSection() {
    return (
        <>
            <section className={styles.home_sections}>
                <h2 className="animate-on-scroll">Últimas <span className='elaGreen'>noticias</span></h2>
                <NewsSlider />
            </section>
        </>
    )
}