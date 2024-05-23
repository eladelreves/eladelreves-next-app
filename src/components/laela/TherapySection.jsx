import styles from 'src/app/laela/laela.module.css'

export default function Therapy(){
    return(
        <>
        <div id={styles.ela_therapy}>
            <h2 className="animate-on-scroll">Terapias de la <span className='elaGreen'>ELA</span></h2>
            <div id={styles.card_container}>
                <div className={styles.cards}>
                    <img src="/icons/lungs.svg" alt="" />
                    <p>El proveedor de atención médica puede examinar la respiración regularmente y proporcionar dispositivos, conocidos como ventilación mecánica.</p>
                </div>

                <div className={styles.cards}>
                    <img src="/icons/therapy.svg" alt="" />
                    <p>Un fisioterapeuta puede abordar el dolor, la marcha, el movimiento, los dispositivos ortopédicos y las necesidades de equipos que te ayuden a mantener tu independencia</p>
                </div>
                
                <div className={styles.cards}>
                    <img src="/icons/help.svg" alt="" />
                    <p>Un terapeuta ocupacional puede ayudarte a encontrar maneras de mantener tu independencia a pesar de la debilidad en las manos y los brazos.</p>
                </div>
            </div>
        </div>
            
        </>
    )
}