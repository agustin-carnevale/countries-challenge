import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { CountriesProvider } from './context'
import { ThemeModeProvider } from './context'

const root = createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <ThemeModeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ThemeModeProvider>
  </BrowserRouter>
)
