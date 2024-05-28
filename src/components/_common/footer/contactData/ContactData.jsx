import styles from './contactData.module.css'
import Swal from 'sweetalert2';

export default function LegalPages() {
    const copyInClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Texto copiado al portapapeles:',
                    text: text,
                });
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un error al copiar al portapapeles.',
                });
            });
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