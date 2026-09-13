import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ThemeDisplay from './exercises/React_hooks/ThemeDisplay'
import ThemeContext, { ThemeProvider } from './exercises/React_hooks/ThemeContext'


function App() {
  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  )
}

export default App