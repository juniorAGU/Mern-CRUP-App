
import { useState, createContext } from 'react'


export const themeContext = createContext()
function ThemeProvider( {children} ) {
    const [theme, setThems] = useState("light")
    setThems(
        localStorage.getItem("theme") || "light"
    )


    const toggleTheme = () => {
        setThems(prev => {
            const newTheme = prev === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme);
            return newTheme
        })
    }
    

    return (
        <themeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider