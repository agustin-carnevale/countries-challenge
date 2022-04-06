import { createContext } from 'react'
import { Country } from '../models/Country'

interface CountriesContextState {
  countries: Country[]
  loading: boolean
  errorMessage: string
}

export const CountriesContext = createContext<CountriesContextState>(
  {} as CountriesContextState
)
