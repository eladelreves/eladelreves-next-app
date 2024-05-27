import styles from './footer.module.css'
import LegalPages from './legalPages/LegalPages'
import GoToTopLink from './goToTopLink/GoToTopLink'
import ContactData from './contactData/ContactData'

export function Footer() {
    return (
        <footer id={styles.footer}>
            <div id={styles.footer_data}>
                <LegalPages></LegalPages>
                <GoToTopLink></GoToTopLink>
                <ContactData></ContactData>
            </div>

            <span id={styles.copyright}>Copyright 2024 © eladelreves</span>
        </footer>
    )
}