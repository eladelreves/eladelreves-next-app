'use client'
import styles from './newCard2.module.css'
import Link from 'next/link';

export default function NewCard2({ gridClassName, id, title, createdAt, images }) {
    return (
        <>
            {id &&
                <Link href={'/noticias/detalle?id=' + id} className={`${styles.news_card} ${gridClassName}`} style={{ backgroundImage: `url(${images[0]})` }}>
                    <div className={styles.news_info}>
                        <span>{createdAt}</span>
                        <h3>{title}</h3>
                    </div>
                </Link>
            }
        </>
    )
}