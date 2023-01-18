import React from 'react'
import TopNav from '../TopNav'
import { Container } from './styled'


const Page = ({children}) => {
  return (
    <Container>
      <TopNav/>
      {children}
    </Container>
  )
}

export default Page
