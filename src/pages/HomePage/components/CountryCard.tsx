import { Card, CardContent, CardMedia, Typography } from '@mui/material'

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
  return (
    <Card sx={{ maxWidth: 340, margin: '20px' }}>
      <CardMedia component="img" height="250" image={flagImg} alt="flag" />
      <CardContent>
        <Typography style={{fontWeight: 'bold'}}>{name}</Typography>

        <Typography>Population: {population}</Typography>
        <Typography>Region: {region}</Typography>
        <Typography>Capital: {capital}</Typography>
      </CardContent>
    </Card>
  )
}

export default CountryCard