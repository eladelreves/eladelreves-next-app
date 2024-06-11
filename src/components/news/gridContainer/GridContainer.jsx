'use client'
import NewCard2 from '@components/_templates/newCard/NewCard2';
import { getLatestNews } from '@services/News';
import { useEffect, useState } from 'react';
import styles from './gridContainer.module.css';

const ITEMS_PER_PAGE = 4;

export default function GridContainer() {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLatestNews();
                setNewsData(data);
                setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
            } catch (error) {
                console.error('Error al obtener las noticias:', error);
            }
        };

        fetchData();
    }, []);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div>
            <div id={styles.grid_container}>
                {selectedNews.map((newsItem, index) => (
                    <NewCard2
                        key={index}
                        gridClassName={index === 0 ? styles.large : styles.small}
                        data={newsItem}
                    />
                ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
            </div>
            <br /><br />
        </div>
    );
}
