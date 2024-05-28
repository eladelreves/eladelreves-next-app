'use client'

import { usePathname } from 'next/navigation'
import { Inter } from "next/font/google";
import { Navbar } from '@components/_common/navbar/Navbar.jsx'
import { Footer } from '@components/_common/footer/Footer.jsx'
import "./globals.css";
import { metadata } from './metadata';
import { UserProvider } from 'src/contexts/userContext';
import { DarkModeProvider, useDarkMode } from 'src/contexts/darkModeContext';
import { animateOnScroll } from '@services/animate-on-scroll'
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

function RootLayoutContent({ pathname, children }) {
    const { darkMode } = useDarkMode();

    return (
        <html lang="en" className={darkMode ? 'dark' : ''}>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/eladelreves.ico" />
            </head>
            <body className={inter.className}>
                {pathname !== '/login' && pathname !== '/register' && <Navbar />}
                {children}
                {pathname !== '/login' && pathname !== '/register' && <Footer />}
            </body>
        </html>
    );
}

export default function RootLayout({ children }) {
    const pathname = usePathname()

    useEffect(() => {
        animateOnScroll();
    }, [pathname]);

    return (
        <UserProvider>
            <DarkModeProvider>
                <RootLayoutContent pathname={pathname}>
                    {children}
                </RootLayoutContent>
            </DarkModeProvider>
        </UserProvider>
    );
}
