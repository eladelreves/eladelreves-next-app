import Link from 'next/link'
import styles from './knowMoreButton.module.css'

export default function KnowMoreButton({ children }) {
    return (
        <>
            <button className="animate-on-scroll" id={styles.know_more}>
                <Link href='/laela'>{children}</Link>
            </button>
        </>
    )
}