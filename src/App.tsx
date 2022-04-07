import { useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar'
import { ThemeModeContext } from './context'

const App = () => {
  const { theme } = useContext(ThemeModeContext)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
