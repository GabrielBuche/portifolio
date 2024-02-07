import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home.tsx'
import { ThemeProvider } from './context/theme/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
