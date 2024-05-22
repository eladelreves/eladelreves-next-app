import Link from 'next/link'
import styles from './downloadApp.module.css'

export default function DelrevesSection() {
    return (
        <>
            <div id={styles.downloadApp}>
                <img className='animate-on-scroll' src="/media/png/eladelreves_app.png" alt="" />

                <div>
                    <h2 className='animate-on-scroll'>Da la vuelta por la <span className='elaGreen'>ELA</span></h2>

                    <p className='animate-on-scroll'>Ela del Réves es una innovadora plataforma de video diseñada para apoyar la causa contra la ELA. Los usuarios pueden subir videos creativos donde realizan actividades cotidianas de manera invertida, como ponerse la camiseta al revés, con el objetivo de generar conciencia y recaudar fondos para la investigación de esta enfermedad. Chatea, disfruta, conoce, pero lo más importante, ayuda.</p>

                    <div className='animate-on-scroll'>
                        <Link href=''><img src="/media/png/appstore.png" alt="" /></Link>
                        <Link href=''><img src="/media/png/googleplay.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}