
import { useState, createContext } from 'react'


export const themeContext = createContext()
function ThemeProvider( {children} ) {
    const [theme, setThems] = useState("light")
    const toggleTheme = () => {
        setThems(prev => prev === "light" ? "dark" : "light")
    }
    

    return (
        <themeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider