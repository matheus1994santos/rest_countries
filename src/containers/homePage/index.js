import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'
import SearhBar from '../../components/SearchBar'
import Card from '../../components/Card'

import { StyledPatchCard } from './styles'

const HomePage = ({info}) => {

  return (
    <Page>
      <Content>
        <SearhBar/>
        <StyledPatchCard>
          {info &&  info.map( props => <Card 
            img={props.flags.png}
            country={props.name.common}
            region={props.region}
            capital={props.capital}
            population={props.population}          
          />)}
        </StyledPatchCard>
      </Content>
    </Page>
  )
}

export default HomePage
