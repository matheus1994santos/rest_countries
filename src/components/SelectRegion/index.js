import React from 'react'
import { useSelector } from 'react-redux'

import { Container, StyledSelectRegion } from './styles'

const SelectRegion = () => {

  return (
    <Container>
      <a>Filter by Region</a>
      {/* <StyledSelectRegion>
        <a>Africa</a>
        <a>North America</a>
        <a>South America</a>
        <a>Asia</a>
        <a>Antarctica</a>
        <a>Europe</a>
        <a>Oceania</a>
      </StyledSelectRegion> */}
    </Container>
  )
}

export default SelectRegion
