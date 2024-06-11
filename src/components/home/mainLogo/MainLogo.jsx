'use client'
import { useEffect, useRef } from 'react';
import { useDarkMode } from 'src/contexts/darkModeContext';
import styles from './mainLogo.module.css';

export default function MainLogo() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const srcImage = darkMode ? '/media/png/logo_main_dark_mode.png' : '/media/png/logo_main.png';
    const headerClass = `${styles.main_logo_light}`;

    const logoRef = useRef(null);
    const h2Ref = useRef(null);
    const arrowRef = useRef(null);

    const handleArrowClick = () => {
        const introContainer = document.getElementById('introSection');
        introContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleScroll = () => {
        const logo = logoRef.current;
        const h2 = h2Ref.current;
        const arrow = arrowRef.current;

        if (logo) {
            const logoRect = logo.getBoundingClientRect();
            const containerHeight = document.getElementById('mainLogo_main_logo__D6RDO')?.clientHeight;

            // Calcular la posición vertical absoluta del logo en el contenedor
            const logoYPosition = logoRect.top + window.scrollY - document.getElementById('mainLogo_main_logo__D6RDO')?.getBoundingClientRect().top;

            // Calcular la rotación basada en la posición vertical absoluta del logo en el contenedor
            const rotation = (logoYPosition / containerHeight) * 250;

            // Aplicar la rotación al logo
            if (rotation !== 13.513513513513514) logo.style.transform = `rotateX(${rotation}deg)`;

            // Calcular la opacidad del h2 basada en la rotación del logo
            const opacity = 1 - (rotation / 360); // 360 grados es una vuelta completa
            h2.style.opacity = opacity < 0 ? 0 : opacity; // Asegurar que la opacidad no sea negativa
            arrow.style.opacity = opacity < 0 ? 0 : opacity;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <main id={styles.main_logo} className={headerClass}>
                <div>
                    <img ref={logoRef} src={srcImage} alt="Logo de ELA" />
                    <h2 ref={h2Ref}>Sigue bajando para ayudarnos!</h2>
                    <div ref={arrowRef} id={styles.arrow} onClick={handleArrowClick}></div>
                </div>
            </main>
        </>
    )
}