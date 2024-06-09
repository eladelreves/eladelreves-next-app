'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from 'src/app/unete/unete.module.css'

export function Ayuda() {
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);

    return (
        <>
            <div id={styles.help_us} className={styles.div}>
                <h2 className={styles.h2}>Conóc<span className='elaGreen'>ela</span>, difúnd<span className='elaGreen'>ela</span>, ayúdanos</h2>
                <p className='animate-on-scroll'>
                    Considera hacer una <b>donación económica</b> a organizaciones dedicadas a la investigación de la <span className='elaGreen'>ELA</span>. Estas instituciones <b>necesitan fondos para financiar estudios</b> científicos que buscan encontrar una cura y <b>desarrollar tratamientos más efectivo</b>s. Incluso las donaciones pequeñas pueden sumar y tener un gran impacto. Puedes establecer donaciones recurrentes para proporcionar un <b>apoyo continuo o participar en campañas específicas</b> de recaudación de fondos.
                </p>

                <div id={styles.donate_buttons_container}>
                    <Link href='https://www.fundela.es/colabora/donar/' className={styles.donateButtons} style={{ backgroundImage: `url('/media/png/fundela.jpg')` }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <span style={{ opacity: hovered ? 1 : 0, }}>Donar</span>
                    </Link>

                    <Link href='https://adelaweb.org/tienda/colabora/' className={styles.donateButtons} style={{ backgroundImage: `url('/media/png/adEla.jpg')` }} onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
                        <span style={{ opacity: hovered2 ? 1 : 0, }}>Donar</span>
                    </Link>
                </div>

                <p className='animate-on-scroll'>
                    Otra forma valiosa de colaborar es <b>ofreciendo tu tiempo como voluntario</b>. Muchas organizaciones que apoyan a personas con <span className='elaGreen'>ELA</span> requieren voluntarios para ayudar en diversas actividades,<b> desde la organización de eventos hasta la asistencia directa a pacientes</b>. Ser voluntario no solo brinda ayuda práctica, sino que también ofrece un <b>apoyo emocional inestimable</b> a las personas afectadas y sus familias.
                </p>
            </div>
        </>
    )
}