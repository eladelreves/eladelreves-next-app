'use client'

import styles from '../login/login.module.css'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PasswordInput from "@components/passwordInput/PasswordInput";
import { registerUser } from '@services/Auth';

export default function Register() {
    const [formData, setFormData] = useState({
        registerUsername: '',
        registerEmail: '',
        registerPassword: '',
        registerPasswordConfirmation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.registerPassword === formData.registerPasswordConfirmation) {
            registerUser(formData);
        } else {
            console.log('Ambas password deben ser correctas');
        }
    };

    return (
        <>
            <div className={styles.sign_body}>
                <Link id={styles.back_home} href="/" className='icon-home1'>
                    <img src="/icons/home.svg" alt="" />
                </Link>

                <div className={styles.sign_container} style={{ height: '600px' }}>
                    <div className={styles.sign_logo} style={{ height: '600px' }}>
                        <Image
                            src='/media/png/logo_all_white.png'
                            alt=""
                            width={400}
                            height={200}
                        />
                        <span id={styles.change_sign}>¿Ya tienes cuenta? <br /><br /> <Link href='/login'>Iniciar sesión</Link></span>
                    </div>

                    <form className={styles.sign_form} style={{ height: '600px' }} onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <label htmlFor="registerUsername">Nombre de Usuario</label>
                        <input
                            id={styles.registerUsername}
                            name='registerUsername'
                            type="text"
                            onChange={handleChange}
                        />

                        <label htmlFor="registerEmail">Email</label>
                        <input
                            id={styles.registerEmail}
                            name='registerEmail'
                            type="text"
                            onChange={handleChange}
                        />

                        <label htmlFor="registerPassword">Contraseña</label>
                        <PasswordInput handleChange={handleChange} name='registerPassword'></PasswordInput>

                        <label htmlFor="registerPasswordConfirmation">Repetir Contraseña</label>
                        <PasswordInput handleChange={handleChange} name='registerPasswordConfirmation'></PasswordInput>

                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}