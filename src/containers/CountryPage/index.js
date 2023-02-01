/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Content from '../../components/Content'
import Page from '../../components/Page'
import ReturnBar from '../../components/ReturnBar'

import { 
  Container,
  StyledBorderCountries, 
  StyledButtonCountries, 
  StyledContent, 
  StyledCountryData, 
  StyledCountryInfo 
} from './styles'

const CountryPage = () => {
  const [country, setCountry] = useState({})
  const {name} = useParams();
  const { population } = country;

  const currencies = Object.values((country.currencies || {})).map(curr => curr.name).join(', ')
  const languages = Object.values((country.languages || {})).map(curr => curr).join(', ');
  const formattedPopulation = population ? population.toLocaleString('pt-BR') : 0;

  React.useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then( json => json.json() )
    .then( resp => setCountry(resp[0]) )
  },[name])
  
  return (
    <Page>
      <Content>
        <Container>
          <ReturnBar/>
            {!country.name && null}
            {country.name && (<StyledCountryInfo>
                <img src={(country.flags || {}).png}/>
              <StyledCountryData>  
                <h1>{(country.name || {}).common}</h1>
                <StyledContent>
                  <ul>
                    <li> Native Name: <span>{country.name.official}</span></li>
                    <li> Population: <span>{formattedPopulation}</span></li>
                    <li> Region: <span>{country.region}</span></li>
                    <li> Sub Region: <span>{country.subregion}</span></li>
                    <li> Capital: <span>{(country.capital || []).join(', ')}</span></li>
                  </ul>

                  <ul>
                    <li> Top Level Domain: <span>{country.tld}</span></li>
                    <li> Currencies: <span>{currencies}</span></li>
                    <li> Languages: <span>{languages}</span></li>
                  </ul>
                </StyledContent>
                <StyledBorderCountries>
                  Border Countries: 
                  { country.borders && country.borders.map( (prop, index) => (
                    <StyledButtonCountries key={index} >{prop}</StyledButtonCountries>
                  )) }
                </StyledBorderCountries>
              </StyledCountryData>
            </StyledCountryInfo>)}
        </Container>
      </Content>
    </Page>
  )
}

export default CountryPage
