import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar'
import { ThemeModeContext } from './context'
import CountryDetailsPage from './pages/DetailsPage/CountryDetailsPage'

const App = () => {
  const { theme } = useContext(ThemeModeContext)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:code" element={<CountryDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
