
import NewCard2 from '@components/_templates/newCard/NewCard2';
import styles from './gridContainer.module.css';
import { getAllNews } from '@services/News';

export default async function GridContainer() {
    let newsData = await getAllNews();

    return (
        <div id={styles.grid_container}>
            {newsData.map((newsItem, index) => (
                <NewCard2
                    key={index}
                    gridClassName={index === 0 ? styles.large : styles.small}
                    data={newsItem}
                />
            ))}
        </div>
    );
}