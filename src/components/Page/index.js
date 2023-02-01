import React from 'react'
import TopNav from '../TopNav'
import { Container } from './styled'


const Page = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Page
