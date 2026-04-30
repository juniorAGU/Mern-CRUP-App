import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='new-nav w-full h-full px-3 py-3 bg-transparent'>
            <ul className='w-full h-full flex justify-around items-center'>
                <NavLink to={'/'}
                className={({isActive}) => `font-bold text-md :hover transition-all ${isActive ? "bg-white/40 py-1 px-1 rounded md" : ""}`}
                >
                    Home
                </NavLink>
                <NavLink to={'/products'}
                className={({isActive}) => `font-bold text-md :hover transition-all ${isActive ? "bg-white/40 py-1 px-1 rounded md" : ""}`}
                >
                    Products
                </NavLink>

            </ul>
        </nav>
    )
}

export default Navbar