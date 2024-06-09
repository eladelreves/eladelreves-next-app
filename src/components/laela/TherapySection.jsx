import styles from './laelaSections.module.css'

export default function Therapy() {
    return (
        <>
            <div className={styles.laela_sections}>
                <h2 className="animate-on-scroll">Terapias de la <span className='elaGreen'>ELA</span></h2>
                <div id={styles.card_container}>
                    <div className={styles.cards}>
                        <img className='animate-on-scroll' src="/icons/lungs.svg" alt="" />
                        <p className='animate-on-scroll'>El <b>proveedor</b> de atención médica puede examinar la respiración regularmente y proporcionar dispositivos, conocidos como ventilación mecánica.</p>
                    </div>

                    <div className={styles.cards}>
                        <img className='animate-on-scroll' src="/icons/therapy.svg" alt="" />
                        <p className='animate-on-scroll'>Un <b>fisioterapeuta</b> puede abordar el dolor, la marcha, el movimiento, los dispositivos ortopédicos y las necesidades de equipos que te ayuden a mantener tu independencia</p>
                    </div>

                    <div className={styles.cards}>
                        <img className='animate-on-scroll' src="/icons/help.svg" alt="" / >
                        <p className='animate-on-scroll'>Un <b>terapeuta</b> ocupacional puede ayudarte a encontrar maneras de mantener tu independencia a pesar de la debilidad en las manos y los brazos.</p>
                    </div>
                </div>
            </div>

        </>
    )
}