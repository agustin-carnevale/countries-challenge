import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  media: {
    width: '100%',
    margin: 'auto',
  },
}))

interface CountryCardProps {
  name: string
  population: number
  region: string
  capital: string
  flagImg: string
}

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flagImg,
}: CountryCardProps) => {
  const classes = useStyles()

  return (
    <Card sx={{ maxWidth: '320px', margin: '20px' }}>
      <CardMedia
        component="img"
        image={flagImg}
        alt="flag"
        className={classes.media}
      />
      <CardContent>
        <Typography style={{ fontWeight: 'bold' }}>{name}</Typography>

        <Typography>Population: {population}</Typography>
        <Typography>Region: {region}</Typography>
        <Typography>Capital: {capital}</Typography>
      </CardContent>
    </Card>
  )
}

export default CountryCard
