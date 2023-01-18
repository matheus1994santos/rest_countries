import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'

import { Container } from './styles'
import SearhBar from '../../components/SearchBar'

const HomePage = () => {
  return (
    <Page>
      <Content>
        <SearhBar/>
        Teste
      </Content>
    </Page>
  )
}

export default HomePage
