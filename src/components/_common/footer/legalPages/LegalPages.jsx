import styles from './legalPages.module.css'
import Link from 'next/link'
export default function LegalPages() {
    return (
        <div id={styles.info}>
            <h4 className='elaGreen'>Información</h4>
            <Link href="/informacion/avisoslegales">Avisos legales</Link>
            <Link href="/informacion/protecciondedatos">Protección de datos</Link>
            <Link href="/informacion/politicadeprivacidad">Política de privacidad</Link>
            <Link href="/informacion/cookies">Cookies</Link>
        </div>
    )
}