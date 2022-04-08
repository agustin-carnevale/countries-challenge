import { render, screen } from '@testing-library/react'
import CountryCard from '../../../../pages/HomePage/components/CountryCard'
import { argentina } from '../../../../mocks/mockCountry'

describe('CountryCard component', () => {

  test('relevant elements are rendered with correct details', () => {
    render(
      <CountryCard 
        name={argentina.name.common}
        region={argentina.region}
        population={argentina.population}
        capital={argentina.capital[0]}
        flagImg={argentina.flags.png}
      />
    )
    const flagElement = screen.getByAltText('flag')
    const nameElement = screen.getByText(argentina.name.common)
    const populationElement = screen.getByText(`Population: ${argentina.population}`) 
    const capitalElement = screen.getByText(`Capital: ${argentina.capital}`) 
    const regionElement = screen.getByText(`Region: ${argentina.region}`) 

    expect(flagElement).toBeInTheDocument()
    expect(nameElement).toBeInTheDocument()
    expect(populationElement).toBeInTheDocument()
    expect(capitalElement).toBeInTheDocument()
    expect(regionElement).toBeInTheDocument()
  })
})
