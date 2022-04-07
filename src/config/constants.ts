const filterFields =
  'name,ccn3,region,population,capital,flags,subregion,currencies,languages,borders'
  
export const COUNTRIES_API = `https://restcountries.com/v3.1/all?fields=${filterFields}`

export const REGIONS = [
  {
    label: 'Africa',
    value: 'Africa',
  },
  {
    label: 'Americas',
    value: 'Americas',
  },
  {
    label: 'Asia',
    value: 'Asia',
  },
  {
    label: 'Europe',
    value: 'Europe',
  },
  {
    label: 'Oceania',
    value: 'Oceania',
  },
]
