import React from 'react'
import { themeContext } from '../Context/ThemeProvider';
import { useContext } from 'react';

function Footer() {
    const { theme } = useContext(themeContext)
    return (
        <footer className={`main-footer  w-full h-[100px] flex justify-center items-center transition duration-700 ease-in-out`}>
            <p>@ 2026</p>
        </footer>
    )
}

export default Footer