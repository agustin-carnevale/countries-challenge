export interface Country {
  name: {
    common: string
  }
  ccn3: string // unique country code?
  region: string
  subregion: string
  population: number
  capital: string[]
  flags: {
    png: string
    svg: string
  }
  currencies: { name: string; symbol: string }[]
  languages: string[]
  borders: string[]
}
