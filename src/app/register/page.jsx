'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './register.module.css';

import PasswordInput from "@components/passwordInput/PasswordInput";
import { isDisplayNameUnique, registerUser } from '@services/Auth';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const usernameRegex = /^[a-zA-Z0-9]{3,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{}<>;:,.~`])[A-Za-z\d!@#$%^&*()[\]{}<>;:,.~`]{8,}$/;

const validateField = (name, value, formData) => {
    switch (name) {
        case 'registerUsername':
            return usernameRegex.test(value);
        case 'registerEmail':
            return emailRegex.test(value);
        case 'registerPassword':
            return passwordRegex.test(value);
        case 'registerPasswordConfirmation':
            return value === formData.registerPassword;
        default:
            return true;
    }
};

export default function Register() {
    const [formData, setFormData] = useState({
        registerUsername: '',
        registerEmail: '',
        registerPassword: '',
        registerPasswordConfirmation: ''
    });

    const [errors, setErrors] = useState({
        registerUsername: false,
        registerEmail: false,
        registerPassword: false,
        registerPasswordConfirmation: false
    });

    const hasErrors = () => {
        return Object.values(errors).some(error => error === true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        const isValid = validateField(name, value, formData);

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: !isValid
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.registerPassword === formData.registerPasswordConfirmation) {
            if (hasErrors()) {
                Swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: "Revisa los datos introducidos.",
                });
            } else {
                if (await isDisplayNameUnique(formData.registerUsername)) {
                    registerUser(formData);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: "Error",
                        text: "Nombre de usuario cogido.",
                    });
                }
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: "Error",
                text: "Ambas contraseñas deben coincidir.",
            });
        }
    };

    return (
        <>
            <div className={styles.sign_body}>
                <Link id={styles.back_home} href="/" className='icon-home1'>
                    <img src="/icons/home.svg" alt="" />
                </Link>

                <div className={styles.sign_container}>
                    <div className={styles.sign_logo}>
                        <Image
                            src='/media/png/logo_all_white.png'
                            alt=""
                            width={400}
                            height={200}
                        />
                        <span id={styles.change_sign}>¿Ya tienes cuenta? <br /><br /> <Link href='/login'>Iniciar sesión</Link></span>
                    </div>

                    <form className={styles.sign_form} onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <label htmlFor="registerUsername">Nombre de Usuario</label>
                        <input
                            id={styles.registerUsername}
                            name='registerUsername'
                            type="text"
                            value={formData.registerUsername}
                            onChange={handleChange}
                        />
                        {errors.registerUsername ? (
                            <span className={styles.error} id='username'>
                                Nombre de usuario inválido ⓘ.
                                <Tooltip
                                    className={styles.tooltip}
                                    anchorSelect="#username"
                                    clickable
                                    style={{ backgroundColor: 'red' }}
                                    place='right'
                                >
                                    <p>Debe de tener 3 caracteres mínimo, no debe tener espacios</p>
                                </Tooltip>
                            </span>
                        ) : (
                            <span className={styles.error}></span>
                        )}

                        <label htmlFor="registerEmail">Email</label>
                        <input
                            id={styles.registerEmail}
                            name='registerEmail'
                            type="text"
                            value={formData.registerEmail}
                            onChange={handleChange}
                        />
                        {errors.registerEmail ? <span className={styles.error}>Email inválido. Ejemplo: a@a.com</span> : <span className={styles.error}></span>}

                        <label htmlFor="registerPassword">Contraseña</label>
                        <PasswordInput
                            id={styles.registerPassword}
                            handleChange={handleChange}
                            name='registerPassword'
                            value={formData.registerPassword}
                        />
                        {errors.registerPassword ? (
                            <span className={styles.error} id='password'>
                                Contraseña inválida ⓘ.
                                <Tooltip
                                    className={styles.tooltip}
                                    anchorSelect="#password"
                                    clickable
                                    style={{ backgroundColor: 'red' }}
                                    place='right'
                                >
                                    <p>La contraseña debe de tener 8 caracteres, al menos 1 símbolo, 1 número y una mayúscula, no debe tener espacios.</p>
                                </Tooltip>
                            </span>
                        ) : (
                            <span className={styles.error}></span>
                        )}


                        <label htmlFor="registerPasswordConfirmation">Repetir Contraseña</label>
                        <PasswordInput
                            handleChange={handleChange}
                            name='registerPasswordConfirmation'
                            value={formData.registerPasswordConfirmation}
                        />
                        {errors.registerPasswordConfirmation ? <span className={styles.error}>Las contraseñas no coinciden</span> : <span className={styles.error}></span>}

                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
}
