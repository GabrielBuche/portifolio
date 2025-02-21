import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './screens/App'
import './index.css'
import './locales/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <App />
  </StrictMode>,
)
