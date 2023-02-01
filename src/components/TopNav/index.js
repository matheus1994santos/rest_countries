import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtomTheme from '../ButtomTheme'
import { Bar, Container, Title } from './styles'

const TopNav = ({setTheme}) => {
  return (
    <Container>
      <Bar>
        <NavLink to={'/'}><Title>Where in the world?</Title></NavLink>
        <ButtomTheme setTheme={setTheme}/>
      </Bar>
    </Container>
  )
}

export default TopNav
