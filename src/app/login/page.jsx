'use client'

import styles from './login.module.css'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PasswordInput from '@components/passwordInput/PasswordInput';
import { login, resetPassword } from '@services/Auth';
import Swal from 'sweetalert2';

export default function Login() {
    const [formData, setFormData] = useState({
        loginEmail: '',
        loginPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        login(formData)
    };

    return (
        <>
            <div className={styles.sign_body}>
                <Link id={styles.back_home} href="/" className='icon-home1'>
                    <img src="/icons/home.svg" alt="" />
                </Link>

                <div className={styles.sign_container}>
                    <form className={styles.sign_form} onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <label htmlFor="loginEmail">Email</label>
                        <input
                            id={styles.loginEmail}
                            name='loginEmail'
                            type="text"
                            onChange={handleChange}
                        />

                        <label htmlFor="loginPassword">Contraseña</label>
                        <PasswordInput handleChange={handleChange} name='loginPassword' />

                        <Link id={styles.forgotten_password} href='' onClick={async () => {
                            const { value: email } = await Swal.fire({
                                title: "Correo de recuperación",
                                input: "email",
                                inputPlaceholder: "Enter your email address"
                            });
                            if (email) {
                                resetPassword(email)
                                Swal.fire(`Correo enviado a: ${email}`);
                            }
                        }}
                        >
                            ¿Has olvidado la contraseña?
                        </Link>

                        <button type='submit'>Enviar</button>
                    </form>

                    <div className={styles.sign_logo}>
                        <Image
                            src='/media/png/logo_all_white.png'
                            alt=""
                            width={400}
                            height={200}
                        />
                        <span id={styles.change_sign}>¿No tienes cuenta? <br /><br /> <Link href='/register'>Crear cuenta</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}