import styles from './homeSections.module.css'

export default function IntroSection() {
    return (
        <>
            <section id='introSection' className={styles.home_sections}>
                <br />
                <h2 className="animate-on-scroll">
                    ¡Cambiemos la historia juntos: <span className='elaGreen'>ELA</span> Del Revés!
                </h2>

                <p className="animate-on-scroll">
                    El proyecto en el que hemos estado trabajando es una colaboración con la Asociación de Esclerosis Lateral Amiotrófica (<span className='elaGreen'>ELA</span>) para desarrollar una <b>plataforma en línea </b> que brinde recursos, información y apoyo a pacientes y familias afectados por esta enfermedad.
                </p>

                <p className="animate-on-scroll">
                    Nuestra iniciativa surge de la necesidad de mejorar la calidad de vida de las personas que viven con <span className='elaGreen'>ELA</span>. Queremos ofrecer una plataforma en línea donde puedan acceder fácilmente a <b>recursos confiables, información actualizada y un sólido sistema de apoyo.</b>
                </p>

                <p className="animate-on-scroll">
                    El objetivo de esta plataforma es proporcionar a la comunidad de la <span className='elaGreen'>ELA</span> <b>un espacio donde</b> puedan <b>encontrar información médica</b>, recursos para el cuidado diario, <b>asesoramiento</b> sobre opciones de tratamiento y, sobre todo, un lugar donde puedan <b>conectarse</b> con otras personas que entienden sus desafíos y preocupaciones.
                </p>

                <p className="animate-on-scroll">
                    Creemos firmemente que al proporcionar acceso a recursos y apoyo de calidad, <b>podemos mejorar significativamente la calidad de vida y el bienestar de las personas afectadas</b> por la <span className='elaGreen'>ELA</span> en todo el mundo. Esta plataforma no solo será una fuente de información y apoyo, sino también un lugar donde la comunidad de la <span className='elaGreen'>ELA</span> pueda encontrar esperanza, solidaridad y fuerza en su lucha contra esta enfermedad.
                </p>
            </section>
        </>
    )
}