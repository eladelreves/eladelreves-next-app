import styles from './laelaSections.module.css'

export default function Symptoms() {
    return (
        <>
            <div className={styles.laela_sections}>
                <h2>¿Cuáles son los síntomas de la <span className='elaGreen'>ELA</span>?</h2>
                <p>
                    <b>Los síntomas incluye</b>n debilidad muscular, dificultad para hablar y tragar, problemas respiratorios, calambres musculares y espasmos en brazos, hombros y lengua, llanto, risa o bostezos inapropiados y cambios cognitivos y de comportamiento.
                </p>
                <div id={styles.video_container}>
                    <iframe className={styles.video_youtube} src="https://www.youtube.com/embed/6ZtAsGmbhqk?si=Z_VWPnw8j2aO1r_G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p style={{ marginTop: '50px', width: '80%' }}><b>Aníbal Martín</b>, un verdadero héroe en su batalla contra la ELA, comparte su viaje para iluminar y educar. <b>Desde el impacto devastador del diagnóstico hasta los desafíos diarios</b>, nos enseña sobre la importancia del <b>apoyo emocional y la adaptación a una vida diferente</b>. Su mensaje resuena, llamando a la acción: más investigación, más comprensión y más empatía hacia aquellos que enfrentan esta dura realidad, nos recuerda que, <b>en la lucha contra la ELA, cada muestra de apoyo y comprensión marca la diferencia.</b></p>
                </div>
            </div>
        </>
    )
}