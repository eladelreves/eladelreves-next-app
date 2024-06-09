'use client'
import { useState } from 'react';
import styles from './laelaSections.module.css'
import Medication from './medication/Medication'

export default function Treatment() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={styles.laela_sections}>
                <h2 className="animate-on-scroll">Tratamiento de la <span className='elaGreen'>ELA</span></h2>
                <p className="animate-on-scroll">Los tratamientos <b>no pueden revertir el daño provocado</b> por la esclerosis lateral amiotrófica (<span className='elaGreen'>ELA</span>), pero <b>pueden retrasar la progresión de los síntomas</b>. También pueden evitar complicaciones y hacerte sentir más cómodo e independiente.</p>
                <p className='animate-on-scroll'>
                    Es posible que necesites un equipo de proveedores de atención de la salud y médicos capacitados en muchas áreas para atenderte. El equipo trabaja en conjunto para <b>prolongar la supervivencia y mejorar la calidad de vida</b>.
                </p>
                <p className="animate-on-scroll">
                    Tu equipo trabaja para seleccionar los tratamientos adecuados para ti. <b>Tienes derecho a elegir o rechazar cualquiera</b> de los tratamientos sugeridos.
                </p>
                <div id={styles.medication_container}>
                    <Medication
                        title="Riluzol"
                        imgSrc="/media/png/riluzol.png"
                        description="Aumenta la expectativa de vida en un 25 %. Puede causar efectos secundarios como mareos, afecciones gastrointestinales y problemas de hígado."
                    />
                    <Medication
                        title="Edaravona"
                        imgSrc="/media/png/edaravone.png"
                        description="Ayuda a hacer más lento el deterioro de las funciones diarias. Se administra a través de una vena en el brazo o por vía oral en forma de líquido."
                    />
                    <Medication
                        title="Relyvrio"
                        imgSrc="/media/png/relyvrio.png"
                        description="Reduce el ritmo de deterioro de las personas con ELA en un 25 %. Ayuda a que las personas con ELA vivan alrededor de seis meses más."
                    />
                </div>

            </div>
        </>
    )
}