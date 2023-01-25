import React from 'react'
import { Container, StyledContent, StyledImage } from './styles'

const Card = ({img, country, region, capital, population}) => {

  return (
    <Container>
      <StyledImage>
        <img src={img} />
      </StyledImage>
      
      <StyledContent>
        <h1>{country}</h1>
        <nav>
          <p><span>Population: </span> <a>{population}</a></p>
          <p><span>Region: </span><a>{region}</a></p>
          <p><span>Capital: </span><a>{capital}</a></p>
        </nav>
      </StyledContent>
    </Container>
  )
}

export default Card
