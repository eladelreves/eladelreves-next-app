'use client'
import { useState } from 'react';
import styles from 'src/app/unete/unete.module.css'

export function Ayuda(){
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    return(
        <>
        <div className={styles.div}>
            <h2 className={styles.h2}>Ayúdanos</h2>
            <p className={styles.p}>
                Tu ayuda es vital, y tienes dos formas muy sencillas de hacerlo. La primera es registrándote con nosotros, tanto desde esta web como desde la app que puedes descargar en esta misma página, donde podrás subir tus videos realizando el reto de "<span className='elaGreen'>ELA</span> del revés"
            </p>

            <div id={styles.donate_buttons_container}>
                <div className={styles.donateButtons} style={{backgroundImage: `url('/media/png/fundela.jpg')`}} onMouseEnter={() => setHovered(true)}onMouseLeave={() => setHovered(false)}>
                    <span style={{opacity: hovered ? 1 : 0,}}>Donar</span>
                </div>

                <div className={styles.donateButtons} style={{backgroundImage: `url('/media/png/adEla.jpg')`}} onMouseEnter={() => setHovered2(true)}onMouseLeave={() => setHovered2(false)}>
                    <span style={{opacity: hovered2 ? 1 : 0,}}>Donar</span>
                </div>
            </div>

            <p className={styles.p}>
                La segunda forma es donando una pequeña cantidad a alguna de las dos asociaciones contra el ELA con las que colaboramos, y que se encargan de que tu ayuda llegue a las personas que más lo necesitan para llevar un poco mejor las dificultades de su día a día.
            </p>
        </div>
        </>
    )
}