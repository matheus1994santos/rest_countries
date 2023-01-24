import React from 'react'
import SelectRegion from '../SelectRegion'
import { Container, StyledInputSearch } from './styles'

const SearhBar = () => {

  return (
    <Container>
      <StyledInputSearch placeholder='Search for a country...'/>
      <SelectRegion/>
    </Container>
  )
}

export default SearhBar
