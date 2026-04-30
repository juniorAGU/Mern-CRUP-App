import React from 'react'
import { useState,useContext } from 'react'
import { themeContext } from '../Context/ThemeProvider';
import Navbar from './Navbar';
import { Link,useNavigate } from 'react-router-dom';
import { authContext } from '../Context/Authcontext';
import { Icon} from '@iconify/react'





function Header() {
    const navigate = useNavigate()
    const { users1,isAuthenticated,logout } = useContext(authContext);
    const { theme, toggleTheme } = useContext(themeContext) 
    const [isopen , setIsopen ] = useState(false)
    console.log("theme is",theme)
    const handleLogou = () => {
        logout()
        setIsopen(false)
        navigate("/login")

    }
    return (
        <header className={` main-header   
    w-full md:w-4/6 h-[110px] rounded-xl px-8 mx-auto 
    flex justify-between items-center gap-4 transition duration-700 ease-in-out
    fixed top-0 left-0 right-0 `}>

        {/* Left — Logo / Navbar */}
        <article className='flex items-center flex-1'>
            <Navbar />
        </article>

        
        <article className='flex flex-col gap-0 md:flex-row items-center md:gap-6 flex-1 justify-end'>
            {
                isAuthenticated 
                ? (
                    <article className=' flex flex-col gap-0 md:flex-row items-center md:gap-3 '>
                        <h1>
                            <i className='font-bold'>hi !! {users1.name}</i>
                        </h1>
                        <article className='relative'>
                            <article onClick={() => setIsopen(true)} className=' cursor-pointer'>
                                <Icon icon="gg:profile" width="34" height="34" color={theme === 'light' ? 'black' : 'white'} />
                            </article>
                        </article>
                        

                    </article>
                ) 
                : (
                    <article className='flex items-center gap-3'>
                        <Link to={'/login'}
                        className='px-5 py-2 rounded-full text-sm font-semibold bg-white/20 hover:bg-white/30 transition-all'
                        >
                            Login
                        </Link>
                        <Link to={'/register'}
                        className='px-5 py-2 rounded-full text-sm font-semibold bg-white/40 hover:bg-white/50 transition-all'
                        >
                            Register
                        </Link>
                    </article>
                )
            }
            

            
            <article 
            onClick={toggleTheme} 
            className=' w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 
                flex items-center justify-center cursor-pointer transition-all text-lg'>
            {theme === 'light' ? '🌙' : '☀️'}
            </article>
        </article>
        {
            isopen &&  (<article className='absolute bg-gray-100 top-20 left-[60%] w-52 rounded-md px-3 py-2 shadow-lg border border-gray-100'>
                <p className='px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200'>
                    Profile
                </p>
                <p onClick={handleLogou}
                className="className='px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg cursor-pointer transition-all duration-200'">
                    LogOut
                </p>
            </article>)
        }

        </header>
    )
}

export default Header