import React, { useState } from 'react';
import styles from './hamburger.module.css';

export function Hamburger() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <button className={`${styles.hamburger} ${styles.hamburger__squeeze} ${isActive ? styles.is_active : ''}`} type="button" onClick={handleClick}>
                <span className={styles.hamburger_box}>
                    <span className={styles.hamburger_inner}></span>
                </span>
            </button>
            {isActive && (
                <div className={styles.overlay} onClick={handleClick}></div>
            )}
            {isActive && (
                <div className={styles.modal}>
                    <p>Contenido del modal...</p>
                </div>
            )}
        </>
    );
}
