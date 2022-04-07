import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { CountriesProvider } from './context'
import { ThemeModeProvider } from './context'

const root = createRoot(document.getElementById('root')!)
root.render(
  <ThemeModeProvider>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </ThemeModeProvider>
)
