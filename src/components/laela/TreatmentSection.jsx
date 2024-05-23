import styles from 'src/app/laela/laela.module.css'

export default function Treatment(){
    return(
        <>
        <div id={styles.ela_treatment}>
            <h2 className="animate_on_scroll">Tratamiento de la <span className='elaGreen'>ELA</span></h2>
            <p className="animate_on_scroll">Los tratamientos no pueden revertir el daño provocado por la esclerosis lateral amiotrófica (<span className='elaGreen'>ELA</span>), pero pueden retrasar la progresión de los síntomas. También pueden evitar complicaciones y hacerte sentir más cómodo e independiente.</p>
            <p>
                Es posible que necesites un equipo de proveedores de atención de la salud y médicos capacitados en muchas áreas para atenderte. El equipo trabaja en conjunto para prolongar la supervivencia y mejorar la calidad de vida.
            </p>
            <p className="animate_on_scroll">
                Tu equipo trabaja para seleccionar los tratamientos adecuados para ti. Tienes derecho a elegir o rechazar cualquiera de los tratamientos sugeridos.
            </p>
            <ul className={styles.ela_list}>
                <li>
                    <p className="animate_on_scroll">
                        <b>Riluzol</b> (Rilutek, Exservan, Tiglutik). Este medicamento se toma por vía oral y puede <b>aumentar la expectativa de vida en un 25 %</b>. Puede causar <b>efectos secundarios</b> como mareos, afecciones gastrointestinales y problemas de hígado.
                    </p>
                </li>
                <li>
                    <p className="animate_on_scroll">
                        <b>Edaravona</b> (Radicava). Este medicamento puede ayudar a hacer <b>más lento el deterioro de las funciones diarias</b>. Se administra a través de una vena en el brazo o por vía oral en forma de líquido. Todavía <b>no se conoce su efecto en cuanto a la duración de la vida</b>. Los <b>efectos secundarios</b> pueden incluir moretones, dolores de cabeza y dificultades para caminar. 
                    </p>
                </li>
                <li>
                    <p className="animate_on_scroll">
                        <b>Fenilbutirato de sodio y taurursodiol</b> (Relyvrio). Este medicamento puede <b>reducir el ritmo de deterioro de las personas con <span className='elaGreen'>ELA</span> en un 25 %</b>. También puede ayudar a que las personas con ELA <b>vivan</b> alrededor de <b>seis meses más</b>. Los posibles <b>efectos secundarios</b> incluyen diarrea, dolor abdominal, náuseas e infección de las vías respiratorias superiores.
                    </p>
                </li>
            </ul>
        </div>
        </>
    )
}