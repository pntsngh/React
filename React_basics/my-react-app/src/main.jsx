import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './exercises/greeting.jsx'
import ToggleButton from './exercises/toggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message name="Puneet" />
    <ToggleButton />
  </StrictMode>,
)
