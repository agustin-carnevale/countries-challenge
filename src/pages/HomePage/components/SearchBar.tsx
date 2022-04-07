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
import { Theme } from '@mui/system'
import { makeStyles } from '@mui/styles'

import { REGIONS } from '../../../config/constants'
import { CountriesContext } from '../../../context'
import useDebouncer from '../../../hooks/useDebouncer'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '30px',

    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px 0px',
    },
  },
  input: {
    [theme.breakpoints.down('mobile')]: {
      width: '100%',
    },
  },
  select: {
    [theme.breakpoints.down('mobile')]: {
      width: '100%',
    },
  },
}))

const SearchBar = () => {
  const classes = useStyles()

  const [region, setRegion] = useState('')
  const [input, setInput] = useState('')
  const debouncedInput = useDebouncer<string>(input, 600)
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
          country.name.common
            .toLowerCase()
            .includes(debouncedInput.toLowerCase())
      )
      setFilteredCountries(filtered)
    }
    filterCountries()
  }, [debouncedInput, region, countries, setFilteredCountries])

  return (
    <Box className={classes.container}>
      <TextField
        sx={{ minWidth: '260px' }}
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
        className={classes.input}
      />
      <FormControl
        sx={{ minWidth: '260px', margin: '30px' }}
        className={classes.select}
      >
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
