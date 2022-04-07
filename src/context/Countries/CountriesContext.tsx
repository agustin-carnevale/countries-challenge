import React, { createContext } from 'react'
import { Country } from '../../models/Country'

interface CountriesContextState {
  countries: Country[]
  loading: boolean
  errorMessage: string
  filteredCountries: Country[]
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>
  countryByCode: (code: string) => Country | undefined
}

export const CountriesContext = createContext<CountriesContextState>(
  {} as CountriesContextState
)
