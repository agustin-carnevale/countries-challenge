import React, { useState, useEffect, useContext } from 'react'
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import { REGIONS } from '../../../config/constants'
import { CountriesContext } from '../../../context/CountriesContext'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '30px',
  },
}))

const SearchBar = () => {
  const classes = useStyles()

  const [region, setRegion] = useState('')
  const [input, setInput] = useState('')
  const { countries, setFilteredCountries } = useContext(CountriesContext)

  const handleRegionChange = (event: SelectChangeEvent<string>) => {
    const selectedRegion = event.target.value
    if (selectedRegion !== region) {
      setRegion(selectedRegion)
    }
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    const filterCountries = () => {
      const filtered = countries.filter(
        (country) =>
          (region === '' || country.region === region) &&
          country.name.common.toLowerCase().includes(input.toLowerCase())
      )
      setFilteredCountries(filtered)
    }
    filterCountries()
  }, [input, region, countries, setFilteredCountries])

  return (
    <Box className={classes.container}>
      <TextField
        placeholder="Search for a country"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        value={input}
        onChange={handleInputChange}
      />
      <FormControl sx={{ minWidth: '200px' }}>
        <InputLabel id="region-select-label">Select Region</InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          value={region}
          label="Select Region"
          onChange={handleRegionChange}
        >
          {REGIONS.map((region) => (
            <MenuItem key={region.value} value={region.value}>
              {region.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SearchBar
