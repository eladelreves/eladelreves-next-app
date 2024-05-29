import AddNewForm from '@components/news/addNewForm/AddNewForm';
import GridContainer from '@components/news/gridContainer/GridContainer';
import styles from './noticias.module.css';
import { Suspense } from 'react';
import GridContainerSkeleton from '../../components/news/gridContainer/GridContainerSkeleton';

export default function Noticias() {
    return (
        <>
            <h2 id={styles.h2}>¿Qué está <span className="elaGreen">pasando</span>?</h2>

            <AddNewForm></AddNewForm>

            <Suspense fallback={<GridContainerSkeleton />}>
                <GridContainer></GridContainer>
            </Suspense>
        </>
    );
}