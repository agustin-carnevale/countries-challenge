export interface Country {
  name: {
    common: string
  }
  ccn3: string // country code
  region: string
  population: number
  capital: string[]
  flags: {
    png: string
    svg: string
  }
}
