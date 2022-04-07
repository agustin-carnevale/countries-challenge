import { useState, useEffect, useMemo } from 'react'
import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import { ThemeModeContext } from './ThemeModeContext'
import { getDesign } from '../../theme/theme'

interface ThemeModeProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const theme = useMemo(() => createTheme(getDesign(mode)), [mode])

  useEffect(() => {
    const savedMode = localStorage.getItem('theme_mode') as PaletteMode
    if (savedMode) {
      setMode(savedMode)
    }
  }, [])

  const modeToggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('theme_mode', newMode)
  }

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        modeToggle,
        theme,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  )
}
