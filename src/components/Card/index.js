/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, StyledContent, StyledImage } from './styles'

const Card = ({country }) => {
  const { population } = country;
  const formattedPopulation = population ? population.toLocaleString('pt-BR') : 0;
  return (
    <Container>
      <StyledImage>
        <img src={country.flags.png}/>
      </StyledImage>
      
      <StyledContent>
        <h1>{country.name.common}</h1>
        <nav>
          <p><span>Population: </span> <label>{formattedPopulation}</label></p>
          <p><span>Region: </span><label>{country.region}</label></p>
          <p><span>Capital: </span><label>{(country.capital || []).join(', ')}</label></p>
        </nav>
      </StyledContent>
    </Container>
  )
}

export default Card
