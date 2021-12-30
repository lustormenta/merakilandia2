import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({chidren}) => {
    const [theme, setTheme] = useState(false)
    const changeTheme = () => {
        console.log('cambio de tema desde contexto')
    }

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