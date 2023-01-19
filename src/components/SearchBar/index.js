import React from 'react'
import SelectRegion from '../SelectRegion'
import { Container, InputSearch } from './styles'

const SearhBar = () => {

  return (
    <Container>
      <InputSearch placeholder='Search for a country...'/>
      <SelectRegion/>
    </Container>
  )
}

export default SearhBar
