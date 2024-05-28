import React from 'react';
import { useDarkMode } from 'src/contexts/darkModeContext';
import styles from './darkModeButton.module.css'
export function DarkModeToggleButton (){
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <input 
            type='checkbox' 
            className={styles.theme_checkbox} 
            defaultChecked={darkMode} 
            onClick={toggleDarkMode}
        />
    );
}

export default DarkModeToggleButton;

