'use client';
import { useState } from 'react';
import styles from '../laelaSections.module.css'

export default function Medication({ title, imgSrc, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.medication}>
            <h3>{title}</h3>
            <div style={{ height: '250px', alignItems: 'center', display: 'flex' }}>
                <img src={imgSrc} alt={title} />
            </div>
            <img
                src="/icons/arrow_downward.svg"
                alt="Arrow Down"
                className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}
                onClick={toggleAccordion}
            />
            <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};
