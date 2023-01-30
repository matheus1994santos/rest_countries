/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, StyledContent, StyledImage } from './styles'

const Card = ({props, setName}) => {

  function handleClick(){
    setName(props.name.common)
  }

  return (
    <Container onClick={handleClick}>
      <StyledImage>
        <img src={props.flags.png}/>
      </StyledImage>
      
      <StyledContent>
        <h1>{props.name.common}</h1>
        <nav>
          <p><span>Population: </span> <label>{props.population}</label></p>
          <p><span>Region: </span><label>{props.region}</label></p>
          <p><span>Capital: </span><label>{props.capital}</label></p>
        </nav>
      </StyledContent>
    </Container>
  )
}

export default Card
