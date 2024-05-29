
import NewCard2 from '@components/_templates/newCard/NewCard2';
import styles from './gridContainer.module.css';
import { getLatestNews } from '@services/News';
import { format } from 'path';
import { es } from 'date-fns/locale';

export default async function GridContainer() {
    let newsData = await getLatestNews();

    const formatDate = (timestamp) => {
        const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1e6);
        const date = new Date(milliseconds);
        const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", { locale: es });
        return formattedDate;
    };

    return (
        <div id={styles.grid_container}>
            {newsData.map((newsItem, index) => (
                <NewCard2
                    key={index}
                    gridClassName={index === 0 ? styles.large : styles.small}
                    title={newsItem.title}
                    createdAt={formatDate(newsItem.createdAt)}
                    images={newsItem.images}
                    id={newsItem.id}
                />
            ))}
        </div>
    );
}