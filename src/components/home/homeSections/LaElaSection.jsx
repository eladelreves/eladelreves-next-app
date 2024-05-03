import Link from 'next/link'
import styles from './homeSections.module.css'
import KnowMoreButton from './knowMoreButton/KnowMoreButton'

export default function LaElaSection() {
    return (
        <>
            <section className={styles.home_sections}>
                <h2 className="animate-on-scroll">La <span className='elaGreen'>ELA</span></h2>

                <span className="animate-on-scroll">"una realidad ignorada"</span>

                <img className="animate-on-scroll" src={'media/png/elaDay.png'} alt="Imagen de concienciacion de la enfermedad de la ELA en España" />

                <p className="animate-on-scroll" style={{ marginBottom: '25px' }}><b>Cada día, en España,</b> se diagnostican en promedio tres personas con <span className='elaGreen'>ELA</span>, una enfermedad que afecta a individuos y a sus familias en todo el país. Con el Día Mundial de la <span className='elaGreen'>ELA</span> el 21 de junio, es crucial recordar la importancia de la concienciación y el apoyo. <b>A través de la educación y la solidaridad, podemos trabajar juntos</b> para mejorar la calidad de vida de quienes viven con <span className='elaGreen'>ELA</span> y avanzar en la investigación hacia tratamientos y, eventualmente, una cura.</p>

                <KnowMoreButton>Conoce más</KnowMoreButton>
            </section>
        </>
    )
}