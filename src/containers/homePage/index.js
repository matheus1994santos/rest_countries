import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'
import SearhBar from '../../components/SearchBar'

import {StyledPatchCard} from './styles'
import Card from '../../components/Card'

const HomePage = () => {
  return (
    <Page>
      <Content>
        <SearhBar/>
        <StyledPatchCard>
          <Card/>
        </StyledPatchCard>
      </Content>
    </Page>
  )
}

export default HomePage
