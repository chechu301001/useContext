import React, { useContext, useState } from 'react'

//Creating a context of 2 values which are to be accessed by all
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

//Custom Hooks 
export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

//Provider with children param

const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true) //Dark theme or not

    //OnClick function to toggle
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
