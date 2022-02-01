import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
// El estado se pasaría desde aca
// const themeFromLocal = localStorage.getItem('theme')
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    const changeTheme = () => {
        console.log('cambio de tema desde contexto')
        setTheme(!theme)
    }

    // Cada vez que hay un cambio en el theme, lo seteo en el localStorage
    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    // }, [theme]);
    
    const data = {
        theme,
        changeTheme
    }
    return(
        <ThemeContext.Provider value={data} >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext