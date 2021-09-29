import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

//Child component
const FunctionContextComponent = () => {

    //Can access darktheme and toggle without prop drilling
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: darkTheme ? '#444' : '#ccc',
        color: darkTheme? '#ccc' : '#444',
        padding: '2rem',
        margin: '2rem'
    }
    
    return (
        <>
           <button onClick={toggleTheme}>Toggle Theme</button> 
           <div style={themeStyles}>Functional Theme</div>
        </>
    )
}

export default FunctionContextComponent
