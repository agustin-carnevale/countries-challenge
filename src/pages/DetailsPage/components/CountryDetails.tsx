import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import { Box, Typography, List, ListItem, Card } from '@mui/material'

import { Country } from '../../../models/Country'

const useStyles = makeStyles((theme: Theme) => ({
  detailsContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: '20px',

    [theme.breakpoints.down('tablet')]: {
      width: '100%',
    },
    [theme.breakpoints.down('mobile')]: {
      paddingLeft: '10px',
    },
  },
  bordersContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  borderItem: {
    margin: '10px',
  },
}))

const CountryDetails = ({ country }: { country: Country }) => {
  const classes = useStyles()
  const {
    name,
    capital,
    population,
    region,
    subregion,
    languages,
    currencies,
    borders,
  } = country

  return (
    <Box className={classes.detailsContainer}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        {name.common}
      </Typography>
      <Typography variant="body1">
        <b>Capital:</b> {capital}
      </Typography>
      <Typography variant="body1">
        <b>Population:</b> {population.toLocaleString('en-EN')}
      </Typography>
      <Typography variant="body1">
        <b>Region:</b> {region}
      </Typography>
      <Typography variant="body1">
        <b>Subregion:</b> {subregion}
      </Typography>
      <Typography variant="body1">
        <b>Languages:</b>
      </Typography>
      <List>
        {languages.map((language) => (
          <ListItem key={language}>{language}</ListItem>
        ))}
      </List>
      <Typography variant="body1">
        <b>Currencies:</b>
      </Typography>
      <List>
        {currencies.map((currency) => (
          <ListItem key={currency.name}>
            {currency.name} ({currency.symbol})
          </ListItem>
        ))}
      </List>
      {borders.length > 0 && (
        <>
          <Typography variant="body1">
            <b>Borders:</b>
          </Typography>
          <Box className={classes.bordersContainer}>
            {borders.map((border) => (
              <Box key={border} className={classes.borderItem}>
                <Card style={{ padding: '7px' }}>{border}</Card>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

export default CountryDetails
