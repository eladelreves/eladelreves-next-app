import styles from './newCard.module.css';

export default function NewCard({ gridClassName, item }) {

    return (
        <>
            <div className={`${styles.news_card} ${gridClassName}`} style={{ backgroundImage: `url(${item.images[0]})` }}>
                <div className={styles.news_info}>
                    <span>{new Date(item.createdAt.seconds * 1000).toLocaleDateString()}</span>
                    <h3>{item.title}</h3>
                </div>
            </div>
        </>
    );
}