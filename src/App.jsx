import React from 'react'

import FunctionContextComponent from './FunctionContextComponent'
//Using Functional Components and React Hooks

import ThemeProvider from './ThemeContext'
//Provider

const App = () => {

  //FunctionContextComponent is the child component which is sent as a param
  //Provider comes from ThemeContext file

  return (
    <ThemeProvider>
      <FunctionContextComponent /> 
    </ThemeProvider>
  )
}

export default App
