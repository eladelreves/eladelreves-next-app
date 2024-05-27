import styles from 'src/app/unete/unete.module.css'


export function Register(){
    return(
        <>
            <div className={styles.div}>
                <h2 className={styles.h2}>¿Cómo ayudas al <span className='elaGreen'>registrarte</span>?</h2>
                <p className={styles.p}>Al registrarte en nuestra página web o app móvil, estás apoyando activamente la lucha contra la ELA. Cada registro activará una donación de las empresas colaboradoras a las asociaciones que trabajan en la lucha contra la enfermedad, lo que permitirá financiar proyectos y servicios para mejorar la calidad de vida de las personas afectadas.</p>
            </div>
        </>
    )
}