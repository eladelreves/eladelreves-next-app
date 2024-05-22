import styles from './homeSections.module.css'
import JoinButton from './joinButton/JoinButton'

export default function JoinSection() {
    return (
        <>
            <section className={styles.home_sections}>
                <h2 className="animate-on-scroll">Toda <span className="elaGreen">ayuda</span> es <span className='elaGreen'>bienvenida</span></h2>

                <p className="animate-on-scroll">
                    A pesar de su gravedad, la investigación sobre esta enfermedad aún <b>necesita nuestro apoyo urgente.</b> Al unirte a nuestra campaña contra la <span className="elaGreen">ELA</span>, no solo contribuyes a la <b>concienciación sobre esta enfermedad</b>, sino que también ayudas a financiar investigaciones cruciales que podrían conducir a tratamientos y, algún día, a una cura. Tu participación puede <b>marcar una diferencia</b> significativa en la vida de quienes padecen esta enfermedad y sus familias.
                </p>
                <p className="animate-on-scroll">
                    Participar en nuestra campaña es una <b>oportunidad para mostrar solidaridad y compasión</b> hacia aquellos que luchan contra la ELA. Ya sea mediante una donación, organizando eventos para recaudar fondos, o simplemente compartiendo información en tus redes sociales, cada acción cuenta. <b>Nuestro objetivo</b> es crear una comunidad fuerte y unida que se alce en apoyo de los afectados, brindándoles esperanza y recursos. <b>Juntos, podemos aumentar la visibilidad de esta enfermedad</b> y presionar para obtener más recursos y atención por parte de las instituciones de salud y gobiernos.
                </p>
                <p className="animate-on-scroll">
                    La lucha contra la ELA es un desafío que requiere el esfuerzo conjunto de todos nosotros. <b>Imagina un futuro donde nadie tenga que sufrir</b> los efectos debilitantes de esta enfermedad. <b>Con tu ayuda, podemos acercarnos a ese futuro.</b> Forma parte de nuestra campaña hoy y sé parte de un movimiento que busca dar la vuelta a esta situación. La fuerza de nuestra comunidad puede impulsar avances científicos y ofrecer un rayo de esperanza a aquellos que más lo necesitan. <b>¡Contamos contigo!</b>
                </p>

                <JoinButton></JoinButton>
            </section>
        </>
    )
}