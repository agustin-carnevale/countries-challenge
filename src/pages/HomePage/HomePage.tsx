import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box, CircularProgress, Typography } from '@mui/material'

import { CountriesContext } from '../../context'
import CountryCard from './components/CountryCard'
import SearchBar from './components/SearchBar'

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  cardsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
}))

const HomePage = () => {
  const classes = useStyles()
  const { filteredCountries, loading, errorMessage } =
    useContext(CountriesContext)

  return (
    <Box className={classes.pageContainer}>
      <SearchBar />
      <div className={classes.cardsContainer}>
        {loading ? (
          <CircularProgress />
        ) : errorMessage ? (
          <Typography>{errorMessage}</Typography>
        ) : (
          filteredCountries.map((country, index) => (
            <Link
              to={`country/${country.ccn3}`}
              style={{ textDecoration: 'none' }}
              key={`${country.name?.common}-${index}`}
            >
              <CountryCard
                name={country.name?.common}
                flagImg={country.flags?.png}
                population={country.population}
                region={country.region}
                capital={country.capital ? country.capital[0] : ''}
              />
            </Link>
          ))
        )}
      </div>
    </Box>
  )
}

export default HomePage
