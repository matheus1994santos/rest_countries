/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSelector } from 'react-redux'

import Content from '../../components/Content'
import Page from '../../components/Page'
import ReturnBar from '../../components/ReturnBar'

import { selectCountryInfo, selectCountryLanguages } from './selector'
import { 
  StyledBorderCountries, 
  StyledButtonCountries, 
  StyledContent, 
  StyledCountryData, 
  StyledCountryInfo 
} from './styles'

const CountryPage = ({name}) => {
  const Country = useSelector(selectCountryInfo);
  const currencies = useSelector(selectCountryLanguages);
  const moeda = currencies.map((props) => props)
  console.log(Country.currencies)
  
  return (
    <Page>
      <Content>
        <ReturnBar/>
        { Country && Country.map((props, index) => (
          name === props.name.common ?

          <StyledCountryInfo key={index}>
            <article>
              <img src={props.flags.png}/>
            </article>
            <StyledCountryData>  
              <h1>{props.name.common}</h1>
              <StyledContent>
                <ul>
                  <li> Native Name: <span>{props.name.official}</span></li>
                  <li> Population: <span>{props.population}</span></li>
                  <li> Region: <span>{props.region}</span></li>
                  <li> Sub Region: <span>{props.subregion}</span></li>
                  <li> Capital: <span>{props.capital}</span></li>
                </ul>

                <ul>
                  <li> Top Level Domain: <span>{props.tld}</span></li>
                  <li> Currencies: <span></span></li>
                  <li> Languages: </li>
                </ul>
              </StyledContent>
              <StyledBorderCountries>
                Border Countries: 
                { props.borders && props.borders.map( (prop, index) => (
                  <StyledButtonCountries key={index} >{prop}</StyledButtonCountries>
                )) }
              </StyledBorderCountries>
            </StyledCountryData>
          </StyledCountryInfo>
          : null
        )) }
      </Content>
    </Page>
  )
}

export default CountryPage
