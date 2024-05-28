'use client';

import { getNewById } from "@services/News";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './detalle.module.css'; // Importa tus estilos CSS

export default function Detalle() {
    const [newsItem, setNewsItem] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const fetchNewsItem = async () => {
            if (id) {
                const result = await getNewById(id);
                setNewsItem(result);
            }
        };

        fetchNewsItem();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % (newsItem?.images.length || 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [newsItem]);

    return (
        <>
            {newsItem ? (
                <>
                    <div id={styles.breadcrumbs}><Link href='/noticias'>Noticias</Link> <span className="elaGreen">&gt; </span><span>{newsItem.title}</span></div>

                    <div id={styles.news_detail}>
                        <h2 className="elaGreen">{newsItem.title}</h2>
                        <span id={styles.news_date}>{newsItem.createdAt.toDate().toDateString()}</span>

                        <div id={styles.news_body} dangerouslySetInnerHTML={{ __html: newsItem.body }}></div>

                        <div id={styles.news_images}>
                            <img
                                src={newsItem.images[currentImageIndex]}
                                alt={`News image ${newsItem.images[currentImageIndex]}`}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div>Cargando...</div>
            )}
        </>
    );
}