'use client'
import { format } from 'date-fns';
import styles from './newCard2.module.css'
import { es } from 'date-fns/locale';
import Link from 'next/link';

export default function NewCard2({ gridClassName, data }) {
    const formatDate = (timestamp) => {
        const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1e6);
        const date = new Date(milliseconds);
        const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", { locale: es });
        return formattedDate;
    };
    
    return (
        <>
            {data &&
            <Link href={'/noticias/detalle?id=' + data.id} className={`${styles.news_card} ${gridClassName}`} style={{ backgroundImage: `url(${data.images[0]})` }}>
                <div className={styles.news_info}>
                    <span>{formatDate(data.createdAt)}</span>
                    <h3>{data.title}</h3>
                </div>
            </Link>
            }
        </>
    )
}