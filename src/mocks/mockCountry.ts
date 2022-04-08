import { Country } from "../models/Country";

export const argentina: Country = {
  name: {
    common: "Argentina"
  },
  ccn3: '032',
  region: 'Americas',
  subregion: 'South America',
  population: 45376763,
  capital: ['Buenos Aires'],
  flags: {
    png: 'https://flagcdn.com/w320/ar.png',
    svg: 'https://flagcdn.com/ar.svg',
  },
  currencies: [
    { name: 'Argentine peso',
      symbol: '$',
    }
  ],
  languages: [
    'Guaraní',
    'Spanish',
  ],
  borders: [
    'BOL',
    'BRA',
    'CHL',
    'PRY',
    'URY'
  ],
}