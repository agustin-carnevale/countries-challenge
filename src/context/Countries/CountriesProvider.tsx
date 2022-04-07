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
        const processedData: Country[] = data.map((item: any) => {
          const country: Country = {
            ...item,
            currencies: Object.values(item.currencies),
            languages: Object.values(item.languages),
          }
          return country
        })
        setCountries(processedData)
        setFilteredCountries(processedData)
      } catch (error) {
        setErrorMessage(`Something went wrong. Try again. "${error}"`)
      } finally {
        setLoading(false)
      }
    }
    fetchCountries()
  }, [])

  const countryByCode = (code: string) => {
    return countries.find((country) => country.ccn3 === code)
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        loading,
        errorMessage,
        filteredCountries,
        setFilteredCountries,
        countryByCode,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
