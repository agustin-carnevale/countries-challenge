import { makeStyles } from '@mui/styles'
import { Box, Typography, List, ListItem, Stack, Card } from '@mui/material'

import { Country } from '../../../models/Country'

const useStyles = makeStyles(() => ({
  detailsContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
      <List component={Stack} direction="row">
        {languages.map((language) => (
          <ListItem key={language}>{language}</ListItem>
        ))}
      </List>
      <Typography variant="body1">
        <b>Currencies:</b>
      </Typography>
      <List component={Stack} direction="row">
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
          <List component={Stack} direction="row">
            {borders.map((border) => (
              <ListItem key={border}>
                <Card style={{ padding: '7px' }}>{border}</Card>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  )
}

export default CountryDetails
