import React from 'react'
import Header from '../Componenets/Header';
import Footer from '../Componenets/Footer';
import { Outlet } from 'react-router-dom';
import { themeContext } from '../Context/ThemeProvider';
import { useContext } from 'react';


function MainLayout() {
    const {theme} = useContext(themeContext)
    return (
        <main className= {theme }  >
            <Header />
            <Outlet />
            <Footer />

        </main>
    )
}

export default MainLayout