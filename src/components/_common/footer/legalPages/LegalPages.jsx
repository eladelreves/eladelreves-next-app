import styles from './legalPages.module.css'

export default function LegalPages() {
    return (
        <div id={styles.info}>
            <h4 className='elaGreen'>Información</h4>
            <a href="">Avisos legales</a>
            <a href="">Protección de datos</a>
            <a href="">Política de privacidad</a>
            <a href="">Cookies</a>
        </div>
    )
}