import styles from 'src/app/laela/laela.module.css'
export default function ElaIntroSection(){
    return(
        <>
        <div id={styles.intro_container}>
            <h1>La Enfermedad del <span className='elaGreen'>ELA</span></h1>
            <p>
                La esclerosis lateral amiotrófica (<span className='elaGreen'>ELA</span>) es una enfermedad degenerativa que afecta a las células nerviosas encargadas del control muscular. A medida que estas células se van dañando y muriendo, los músculos del cuerpo se debilitan y atrofian, lo que puede llevar a problemas de movilidad, habla, respiración y alimentación.
            </p>
            <p>
                No se sabe con certeza qué causa la <span className='elaGreen'>ELA</span>, pero se cree que una combinación de factores genéticos y ambientales puede estar involucrada. A menudo, la enfermedad comienza con debilidad en las manos, los brazos, los pies o las piernas, y puede avanzar lentamente o rápidamente.
            </p>
        </div>
            
        </>
    )
}