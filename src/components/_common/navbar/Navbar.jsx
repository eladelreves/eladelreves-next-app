'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavbarScroll } from './useNavbarScroll';
import { useUser } from 'src/contexts/userContext';
import { Hamburger } from './hamburguer/Hamburger';
import styles from './navbar.module.css';
import { ThreeDots } from 'react-loader-spinner';
import { Tooltip } from 'react-tooltip'

export function Navbar() {
    const { user, handleLogout } = useUser();
    const pathname = usePathname();
    const { visible, showShadow } = useNavbarScroll();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300);

    }, [])
    const pages = [
        { name: 'Home', href: '/', icon: 'home.svg' },
        { name: 'La ELA', href: '/laela', icon: 'laela.svg' },
        { name: 'Noticias', href: '/noticias', icon: 'blog.svg' },
        { name: 'Únete', href: '/unete', icon: 'unete.svg' },
        { name: 'Del Revés', href: '/delreves', icon: 'delreves.svg' },
        isLoading
            ? { name: 'Loading...' }
            : user
                ? { name: 'Perfil', href: '/perfil', icon: user?.photoURL || '/icons/default.png' }
                : { name: 'Login', href: '/login', icon: 'login.svg' }
    ];

    return (
        <>
            <header id={styles.header_container} style={{
                top: visible ? '0' : '-100px',
                transition: 'top 0.3s ease-in-out',
                boxShadow: showShadow ? '0px 4px 8px 0px rgba(0, 0, 0, 0.2)' : 'none'
            }}>
                <img src="/media/png/logo_horizontal.png" alt="" />
                <nav id={styles.nav_bar}>
                    {pages.map((page) => {
                        if (page.name === 'Loading...') {
                            return (
                                <ThreeDots
                                    key={page.name}
                                    visible={true}
                                    height="35"
                                    width="35"
                                    color="#4fa94d"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            )
                        }

                        return (
                            <Link id={page.name === 'Perfil' ? 'clickable' : ''}
                                key={page.name}
                                href={page.href}
                                className={pathname === page.href ? styles.actual_page : ''}
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
                <Tooltip anchorSelect="#clickable" clickable>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </Tooltip>
                <Hamburger />
            </header>
        </>
    )
}
