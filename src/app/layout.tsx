'use client'
import { usePathname } from 'next/navigation'
import { Inter } from "next/font/google";
import { Toolbar } from '../components/_common/toolbar/Toolbar'
import "./globals.css";
import "../assets/media/icomoon/style.css";
import { metadata } from './metadata';
import { useEffect, useState } from 'react';

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
                {pathname !== '/login' && pathname !== '/register' && <Toolbar />}
                {children}
            </body>
        </html>
    );
}
