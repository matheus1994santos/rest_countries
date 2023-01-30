import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtomTheme from '../ButtomTheme'
import { Bar, Container, Title } from './styles'

const TopNav = () => {
  return (
    <Container>
      <Bar>
        <NavLink to={'/'}><Title>Where in the world?</Title></NavLink>
        <ButtomTheme/>
      </Bar>
    </Container>
  )
}

export default TopNav
