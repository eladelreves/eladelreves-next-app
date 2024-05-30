'use client'

import { useState } from "react";

import styles from './passwordInput.module.css'

export default function PasswordInput({ handleChange, name }) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className={styles.password_input_div}>
                <input
                    id={name}
                    name={name}
                    type={isVisible ? 'password' : 'text'}
                    onChange={handleChange}
                />
                <img
                    src={isVisible ? '/icons/visibility.svg': '/icons/visibility-off.svg'}
                    onClick={toggleVisibility}
                />
            </div>
        </>
    )
}