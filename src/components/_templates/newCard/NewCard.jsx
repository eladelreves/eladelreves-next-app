import { useEffect, useState } from 'react';
import styles from './newCard.module.css';
import { getAllNews } from '@services/News';

export default function NewCard({ gridClassName }) {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllNews();
                setNewsData(data);
            } catch (error) {
                console.error('Error al obtener las noticias:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {newsData.map((item, index) => (
                <div key={index} className={`${styles.news_card} ${gridClassName}`} style={{ backgroundImage: `url(${item.images[0]})` }}>
                    <div className={styles.news_info}>
                        <span>{new Date(item.createdAt.seconds * 1000).toLocaleDateString()}</span>
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </>
    );
}