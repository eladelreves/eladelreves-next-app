import styles from './newCard.module.css'

export default function NewCard({ imgUrl, title }) {
    return (
        <>
            <div className={styles.newsCard} style={{ backgroundImage: `url(/media/news/matchDay.png)` }}>
                <h3>Hola</h3>
            </div>
        </>
    )
}