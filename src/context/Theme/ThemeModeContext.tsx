import { createContext } from 'react'
import { PaletteMode, Theme } from '@mui/material'

interface ThemeModeContextState {
  mode: PaletteMode
  modeToggle: () => void
  theme: Theme
}

export const ThemeModeContext = createContext<ThemeModeContextState>(
  {} as ThemeModeContextState
)
