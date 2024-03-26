'use client'

import styles from './navbar.module.css'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useUser } from 'src/contexts/userContext';

export function Navbar() {
    const { user } = useUser();
    console.log(user);


    const pathname = usePathname()

    const pages = [
        { name: 'Home', href: '/', icon: 'home.svg' },
        { name: 'La Ela', href: '/laela', icon: 'laela.svg' },
        { name: 'Blog', href: '/blog', icon: 'blog.svg' },
        { name: 'Únete', href: '/unete', icon: 'unete.svg' },
        { name: 'Del Revés', href: '/delreves', icon: 'delreves.svg' },
        user
            ? { name: 'Perfil', href: '/perfil', icon: user?.photoURL || '/icons/default.png' }
            : { name: 'Login', href: '/login', icon: 'login.svg' }
    ];

    return (
        <>
            <header id={styles.header_container}>
                <nav id={styles.nav_bar}>
                    {pages.map((page) => {
                        return (
                            <Link key={page.name}
                                href={page.href}
                                className={pathname === page.href ? 'actual_page' : ''}
                            >

                                <img src={page.name === 'Perfil'
                                    ? page.icon
                                    : `/icons/${page.icon}`}
                                    alt="" />
                                {page.name}
                            </Link>
                        )
                    })}
                </nav>
            </header>
        </>
    )
    //<li><img src={config.imagePath + 'logo_main.png'} alt="Logo Principal Ela del Revés" /></li>
}