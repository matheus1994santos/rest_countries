import React from 'react'
import SelectRegion from '../SelectRegion'
import { Container, InputSearch } from './styles'

const SearhBar = () => {
  // fetch(`https://restcountries.com/v2/all`)
  // .then(json => json.json())
  // .then(resp => console.log(resp))

  return (
    <Container>
      <InputSearch placeholder='Search for a country...'/>
      <SelectRegion/>
    </Container>
  )
}

export default SearhBar
