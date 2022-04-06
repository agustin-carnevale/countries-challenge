import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { CountriesProvider } from './context/CountriesProvider'

const root = createRoot(document.getElementById('root')!)
root.render(
  <CountriesProvider>
    <App />
  </CountriesProvider>
)
