import styles from './laelaSections.module.css'

export default function ElaIntroSection() {
    return (
        <>
            <div className={styles.laela_sections}>
                <h2>La Enfermedad de la <span className='elaGreen'>ELA</span></h2>
                <p>
                    <b>La esclerosis lateral amiotrófica</b> (<span className='elaGreen'>ELA</span>) es una <b>enfermedad degenerativa</b> que afecta a las células nerviosas encargadas del control muscular. A medida que estas células se van dañando y muriendo, <b>los músculos del cuerpo se debilitan y atrofian</b>, lo que puede llevar a problemas de movilidad, habla, respiración y alimentación.
                </p>
                <p>
                    No se sabe con certeza qué causa la <span className='elaGreen'>ELA</span>, pero se cree que una <b>combinación de factores genéticos y ambientales</b> puede estar involucrada. A menudo, la enfermedad <b>comienza con debilidad en las manos, los brazos, los pies</b> o las piernas, y puede avanzar lentamente o rápidamente.
                </p>
            </div>

        </>
    )
}