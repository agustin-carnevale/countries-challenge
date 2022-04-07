import { useState, useEffect } from 'react'
import axios from 'axios'

import { CountriesContext } from './CountriesContext'
import { Country } from '../../models/Country'
import { COUNTRIES_API } from '../../config/constants'

interface CountriesProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      setErrorMessage('')
      setLoading(true)
      try {
        const { data } = await axios.get(COUNTRIES_API)
        setCountries(data)
        setFilteredCountries(data)
      } catch (error) {
        setErrorMessage(`Something went wrong. Try again. "${error}"`)
      } finally {
        setLoading(false)
      }
    }
    fetchCountries()
  }, [])

  return (
    <CountriesContext.Provider
      value={{
        countries,
        loading,
        errorMessage,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
