import React from 'react'
import { Container, Content, StyledImage } from './styles'

const Card = (img, country, region, capital) => {
  const [ countryInfo, setCountryInfo ] = React.useState([])

  React.useEffect(()=>{
    fetch(`https://restcountries.com/v2/all`)
    .then(json => json.json())
    .then(resp => setCountryInfo(resp))
  })

  return (
    <Container>
      <StyledImage>
        <img src={''} />
      </StyledImage>
      
      <Content>
        <h1>Germany</h1>
        <nav>
          <p><span>Population: </span> <a></a></p>
          <p><span>Region: </span><a></a></p>
          <p><span>Capital: </span><a></a></p>
        </nav>
      </Content>
    </Container>
  )
}

export default Card
