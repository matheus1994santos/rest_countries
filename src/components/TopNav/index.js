import React from 'react'
import ButtomTheme from '../ButtomTheme'
import { Bar, Container, Title } from './styles'

const TopNav = () => {
  return (
    <Container>
      <Bar>
        <a href='./'><Title>Where in the world?</Title></a>
        <ButtomTheme/>
      </Bar>
    </Container>
  )
}

export default TopNav
