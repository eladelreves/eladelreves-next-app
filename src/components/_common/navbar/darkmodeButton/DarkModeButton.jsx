import React from 'react';
import { useDarkMode } from 'src/contexts/darkModeContext';
import styles from './darkModeButton.module.css'
export function DarkModeToggleButton (){
    const { darkMode, toggleDarkMode } = useDarkMode();
    const handleClick = (event) => {
        event.stopPropagation(); 
        toggleDarkMode();
    };
    
    return (
        <input 
            type='checkbox' 
            className={styles.theme_checkbox} 
            defaultChecked={darkMode} 
            onClick={handleClick}
        />
    );
}

export default DarkModeToggleButton;

