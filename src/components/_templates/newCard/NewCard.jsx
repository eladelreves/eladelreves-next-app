import React from 'react';
import styles from './newCard.module.css';

export default function NewCard({ item }) {
    const extractImageId = (url) => {
        const match = url.match(/%2F([^%]+)%2F/);
        return match ? match[1] : null;
    };

    const imageId = extractImageId(item.images[0]);
    const link = `/noticias/detalle?id=${imageId}`;

    return (
        <a href={link} className={styles.news_card} style={{ backgroundImage: `url(${item.images[0]})` }}>
            <div className={styles.news_info}>
                <span>{new Date(item.createdAt.seconds * 1000).toLocaleDateString()}</span>
                <h3>{item.title}</h3>
            </div>
        </a>
    );
}