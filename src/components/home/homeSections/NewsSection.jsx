import styles from './homeSections.module.css'
import NewCard from '@components/_templates/newCard/NewCard'

export default function LaElaSection() {
    return (
        <>
            <section className={styles.home_sections}>
                <h2 className="animate-on-scroll">Últimas noticias</h2>
                <NewCard></NewCard>
            </section>
        </>
    )
}