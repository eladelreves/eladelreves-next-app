import styles from './contactData.module.css'

export default function LegalPages() {
    const copyInClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Texto copiado al portapapeles: ' + text)
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err)
            })
    }

    return (
        <div id={styles.contact_data}>
            <h4 className='elaGreen'>Datos de Contacto</h4>
            <div>
                <img src="/icons/mail.svg" alt="" />
                <a href="mailto:eladelreves@gmail.com">eladelreves@gmail.com</a>
            </div>

            <div>
                <img src="/icons/insta.svg" alt="" />
                <a href='https://www.instagram.com/eladelreves/'>@eladelreves</a>
            </div>

            <div>
                <img src="/icons/linkedin.svg" alt="" />
                <a href=''>/eladelreves/</a>
            </div>

            <div>
                <img src="/icons/phone.svg" alt="" />
                <a onClick={() => copyInClipboard(91603858590)}>91 603 85 85 90</a>
            </div>
        </div>
    )
}