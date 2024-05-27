import styles from 'src/app/unete/unete.module.css'

export function UneteIntroSection() {
    return (
        <>
            <div id={styles.join_intro_container} className={styles.div}>
                <h2 className={styles.h2}>¡Démosle la <span className='elaGreen'><span className={styles.turn_around}>vuelta</span></span>!</h2>

                <p>La <span className='elaGreen'>ELA</span> puede ser <span className='elaGreen'>implacable</span>, pero nuestra <span className='elaGreen'>determinación</span> es <span className='elaGreen'>inquebrantable</span>. <br /> Únete a nuestra causa y enfrentemos juntos este desafío con <span className='elaGreen'>fuerza</span>, <span className='elaGreen'>coraje</span> y <span className='elaGreen'>esperanza</span>.</p><br />

                <img src="/media/png/grupoEla.png" alt="" />
            </div>
        </>
    )
}