import Link from 'next/link';
import styles from './modalNavbar.module.css';
import { useUser } from 'src/contexts/userContext';
import { usePathname } from 'next/navigation';
import DarkModeToggleButton from '../darkmodeButton/DarkModeButton';

export default function ModalNavbar() {
    const pathname = usePathname();
    const { user, handleLogout } = useUser();
    const pages = [
        { name: 'Home', href: '/', icon: 'home.svg' },
        { name: 'La ELA', href: '/laela', icon: 'laela.svg' },
        { name: 'Noticias', href: '/noticias', icon: 'blog.svg' },
        { name: 'Únete', href: '/unete', icon: 'unete.svg' },
        { name: 'Del Revés', href: '/delreves', icon: 'delreves.svg' },
        user
            ? { name: 'Perfil', href: '/perfil', icon: user?.photoURL || '/icons/default.png' }
            : { name: 'Login', href: '/login', icon: 'login.svg' }
    ];

    return (
        <>
            <div id={styles.modalNavbar}>
                {pages.map((page) => (
                    <Link
                        key={page.name}
                        href={page.href}
                        className={pathname === page.href ? styles.actual_page : ''}
                    >
                        <img
                            src={page.name === 'Perfil' ? page.icon : `/icons/white/${page.icon}`}
                            alt=""
                        />
                        {page.name}
                    </Link>
                ))}
                <DarkModeToggleButton />
                {user && (
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                )}
            </div>
        </>
    );
}
