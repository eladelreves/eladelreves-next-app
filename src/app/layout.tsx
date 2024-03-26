'use client'
import { usePathname } from 'next/navigation'
import { Inter } from "next/font/google";
import { Navbar } from '@components/_common/navbar/Navbar'
import "./globals.css";
import { metadata } from './metadata';
import { UserProvider } from 'src/contexts/userContext';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()

    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
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
