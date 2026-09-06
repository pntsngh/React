import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './exercises/React_basics/greeting.jsx'
import ToggleButton from './exercises/React_basics/toggle.jsx'
import NameForm from './exercises/React_basics/showInput.jsx'
import TitleUpdater from './exercises/React_basics/titleUpdater.jsx'
import Counter from './exercises/React_hooks/counter.jsx'
import Focus from './exercises/React_hooks/focus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Focus />
  </StrictMode>,
)
