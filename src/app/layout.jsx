'use client'
import { usePathname } from 'next/navigation'
import { Inter } from "next/font/google";
import { Navbar } from '@components/_common/navbar/Navbar.jsx'
import "./globals.css";
import { metadata } from './metadata';
import { UserProvider } from 'src/contexts/userContext';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathname = usePathname()

    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/eladelreves.ico" />
            </head>
            <body className={inter.className}>
                <UserProvider>
                    {pathname !== '/login' && pathname !== '/register' && <Navbar />}
                    {children}
                </UserProvider>
            </body>
        </html>
    );
}
