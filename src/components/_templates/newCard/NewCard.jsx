import styles from './newCard.module.css'

export default function NewCard({ imgUrl, title, gridClassName }) {
    return (
        <>
            <div className={`${styles.news_card} ${gridClassName}`} style={{ backgroundImage: `url(/media/news/matchDay.png)` }}>
                <div className={styles.news_info}>
                    <span>2 de febrero 2024</span>
                    <h3>Hola a todes señores jejejejejejejejejjejejejejjejej</h3>
                </div>
            </div>
        </>
    )
}