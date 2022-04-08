import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

import { CountriesContext } from '../../context'
import CountryDetails from './components/CountryDetails'

const useStyles = makeStyles((theme: Theme) => ({
  pageContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '40px 20px',

    [theme.breakpoints.down('mobile')]: {
      padding: '30px 5px',
    },
  },
  countryContainer: {
    display: 'flex',
    width: '100%',
    paddingTop: '40px',

    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'column',
    },
  },
  flagContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',

    [theme.breakpoints.down('tablet')]: {
      width: '100%',
      marginBottom: '30px',
    },
    [theme.breakpoints.down('mobile')]: {
      paddingTop: '15px',
    },
  },
  emptyContainer: {
    width: '100%',
    minHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const CountryDetailsPage = () => {
  const classes = useStyles()
  const { code } = useParams()
  const { countryByCode, loading, errorMessage } = useContext(CountriesContext)

  const country = countryByCode(code || '')

  return (
    <Box className={classes.pageContainer}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ minWidth: '100px' }}>
          <ArrowBack style={{ marginRight: '10px' }} />
          Back
        </Button>
      </Link>

      {loading ? (
        <Box className={classes.emptyContainer}>
          <CircularProgress />
        </Box>
      ) : errorMessage ? (
        <Box className={classes.emptyContainer}>
          <Typography>{errorMessage}</Typography>
        </Box>
      ) : country ? (
        <Box className={classes.countryContainer}>
          <Box className={classes.flagContainer}>
            <img src={country.flags?.png} alt="flag" />
          </Box>
          <CountryDetails country={country} />
        </Box>
      ) : (
        <Box className={classes.emptyContainer}>- COUNTRY NOT FOUND -</Box>
      )}
    </Box>
  )
}

export default CountryDetailsPage
