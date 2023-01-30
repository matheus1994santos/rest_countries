import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, StyledButtonBack } from './styles'

const ReturnBar = () => {
  return (
    <Container>
      <NavLink to={'/'}>    
        <StyledButtonBack>
          ← Back
        </StyledButtonBack>
      </NavLink>
    </Container>
  )
}

export default ReturnBar
