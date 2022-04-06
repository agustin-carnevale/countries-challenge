import { useContext } from 'react'
import CountryCard from './components/CountryCard'
import { makeStyles } from '@mui/styles'

import { Box, CircularProgress, Typography } from '@mui/material'
import { CountriesContext } from '../../context/CountriesContext'

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
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}))

const HomePage = () => {
  const classes = useStyles()
  const { countries, loading, errorMessage } = useContext(CountriesContext)

  return (
    <Box className={classes.pageContainer}>
      <div className={classes.cardsContainer}>
        {loading ? (
          <CircularProgress />
        ) : errorMessage ? (
          <Typography>{errorMessage}</Typography>
        ) : (
          countries.map((country, index) => (
            <CountryCard
              name={country.name?.common}
              flagImg={country.flags?.png}
              population={country.population}
              region={country.region}
              capital={country.capital ? country.capital[0] : ''}
            />
          ))
        )}
      </div>
    </Box>
  )
}

export default HomePage
