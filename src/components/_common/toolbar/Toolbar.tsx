'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './toolbar.css'

export function Toolbar(){
    const pathname = usePathname()
	const links = [
		{name: 'Home', href:'/', icon: 'home1'},
		{name: 'La Ela', href:'/laela', icon: 'info'},
		{name: 'Blog', href:'/blog', icon: 'newspaper'},
		{name: 'Únete', href:'/unete', icon: 'heart1'},
		{name: 'Del Revés', href:'/delreves', icon: 'phone_iphone'},
		{name: 'Login', href:'/login', icon: 'person'},
	]
	
	return (
		<>
			<header>
                <nav>
                    {links.map((link) => {
                        return (
                            <Link 
                                key = {link.name}
                                href = {link.href}
                                className={ `${pathname === link.href ? '' : ''}` }
                            >
                                <span className={'icon-' + link.icon}></span>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </header>
		</>
	)
    //<li><img src={config.imagePath + 'logo_main.png'} alt="Logo Principal Ela del Revés" /></li>
}