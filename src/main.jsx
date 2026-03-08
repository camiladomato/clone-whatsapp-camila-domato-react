import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context/appContext'

import './main.css'
import { RouterApp } from './router/RouterApp'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <AppProvider>
      <RouterApp></RouterApp>
   </AppProvider>
  </StrictMode>,
)

