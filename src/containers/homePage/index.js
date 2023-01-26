import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'
import SearhBar from '../../components/SearchBar'
import Card from '../../components/Card'

import { StyledPatchCard } from './styles'
import { useSelector } from 'react-redux'
import { selectHomeContinentFilter, selectHomeInfo, selectHomeSearchInfo } from './selector'

const HomePage = () => {
  const countries = useSelector(selectHomeInfo);
  const region = useSelector(selectHomeContinentFilter);
  const infoSearch = useSelector(selectHomeSearchInfo);
  
  return (
    <Page>
      <Content>
        <SearhBar/>
        <StyledPatchCard>
          
          {countries && countries.filter((props, index) => (
            infoSearch === props.name.common || infoSearch === '' ? 
         
            <Card key={index}
              img={props.flags.png}
              country={props.name.common}
              region={props.region}
              capital={props.capital}
              population={props.population}    
 
            /> : null
          )).map( (props, index) => (
            region === null && index < 8 ? 
         
           <Card key={index}
             img={props.flags.png}
             country={props.name.common}
             region={props.region}
             capital={props.capital}
             population={props.population}    

           /> : region === props.region ? 

           <Card key={index}
             img={props.flags.png}
             country={props.name.common}
             region={props.region}
             capital={props.capital}
             population={props.population}          
           /> 
           : null          
           ))
          }
          
        </StyledPatchCard>
      </Content>
    </Page>
  )
}

export default HomePage


// .filter((props,index) => (
//   infoSearch === props.name.common ? 
//   <Card key={index}
//     img={props.flags.png}
//     country={props.name.common}
//     region={props.region}
//     capital={props.capital}
//     population={props.population}    

//   /> : null

// ))