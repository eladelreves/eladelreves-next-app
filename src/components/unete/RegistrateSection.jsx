import styles from 'src/app/unete/unete.module.css'
import RegisterButton from './registerButton/RegisterButton'

export function Register() {
    return (
        <>
            <div id={styles.register} className={styles.div}>
                <h2 className={styles.h2}>¿Cómo ayudas al <span className='elaGreen'>registrarte</span>?</h2>
                <p className='animate-on-scroll'>Al registrarte en nuestra página web o app móvil, estás apoyando activamente la lucha contra la <span className='elaGreen'>ELA</span>. A través de nuestra plataforma, puedes ser participe en este desafío que no solo pondrá a prueba tu colaboración y creatividad, sino que también nos permitirá recaudar fondos cruciales para la investigación y apoyo a los afectados por la <span className='elaGreen'>ELA</span>. Participar es fácil y divertido, y cada objetivo completado representa un paso más en la lucha contra esta devastadora enfermedad. Descarga nuestra app, visita nuestro sitio web y forma parte de esta comunidad comprometida con hacer la diferencia. ¡Acepta el desafío y ayuda a cambiar vidas hoy!</p>
                <br /><br />
                <p className='animate-on-scroll'>No subestimes el <b>poder de la difusión y la educación.</b> Utiliza tus redes sociales para compartir información sobre la <span className='elaGreen'>ELA</span> y las formas en que otros pueden ayudar. Al educar a tu comunidad sobre esta enfermedad, <b>puedes inspirar a más personas a involucrarse</b>. Comparte historias de pacientes y avances en la investigación, y participa en campañas de sensibilización en línea.</p>

                <RegisterButton></RegisterButton>
            </div>
        </>
    )
}