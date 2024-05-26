import { Skeleton } from "@mui/material";
import styles from './gridContainer.module.css';

export default function GridContainerSkeleton() {
    return (
        <div id={styles.grid_container_skeleton}>
            {Array.from({ length: 30 }).map((_, index) => (
                <div key={index}>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton />
                    <Skeleton width="60%" />
                </div>
            ))}
        </div>
    );
}