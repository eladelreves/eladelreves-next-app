import React, { useState } from 'react';
import styles from './hamburger.module.css';
import ModalNavbar from '../modalNavbar/ModalNavbar';

export function Hamburger() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        document.querySelector('body').style.overflow = isActive ? 'visible' : 'hidden';
    };

    return (
        <>
            <button className={`${styles.hamburger} ${styles.hamburger__squeeze} ${isActive ? styles.is_active : ''}`} type="button" onClick={handleClick}>
                <span className={styles.hamburger_box}>
                    <span className={styles.hamburger_inner}></span>
                </span>
            </button>
            {isActive && (
                <div className={styles.overlay} onClick={handleClick}><ModalNavbar></ModalNavbar></div>
            )}
        </>
    );
}
