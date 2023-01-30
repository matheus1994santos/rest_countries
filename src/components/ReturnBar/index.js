import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, StyledButtonBack } from './styles'

const ReturnBar = () => {
  return (
    <Container>
      <StyledButtonBack>
        <NavLink to={'/'}>← Back</NavLink>
      </StyledButtonBack>
    </Container>
  )
}

export default ReturnBar
