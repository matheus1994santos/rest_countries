import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'
import SearhBar from '../../components/SearchBar'
import Card from '../../components/Card'

import { StyledPatchCard } from './styles'
import { useSelector } from 'react-redux'
import { selectHomeInfo } from './selector'

const HomePage = () => {
  const countries = useSelector(selectHomeInfo);
  console.log(countries)
  return (
    <Page>
      <Content>
        <SearhBar/>
        <StyledPatchCard>
          {countries && countries.map( (props, index) =>  index < 8 ? <Card key={index}
            img={props.flags.png}
            country={props.name.common}
            region={props.region}
            capital={props.capital}
            population={props.population}          
          /> : null)}
        </StyledPatchCard>
      </Content>
    </Page>
  )
}

export default HomePage
