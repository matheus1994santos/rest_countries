import React from 'react'
import { Container, Content, StyledImage } from './styles'

const Card = ({img, country, region, capital, population}) => {

  return (
    <Container>
      <StyledImage>
        <img src={img} />
      </StyledImage>
      
      <Content>
        <h1>{country}</h1>
        <nav>
          <p><span>Population: </span> <a>{population}</a></p>
          <p><span>Region: </span><a>{region}</a></p>
          <p><span>Capital: </span><a>{capital}</a></p>
        </nav>
      </Content>
    </Container>
  )
}

export default Card
