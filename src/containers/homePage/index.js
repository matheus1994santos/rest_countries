import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'
import SearhBar from '../../components/SearchBar'
import Card from '../../components/Card'

import { StyledPatchCard } from './styles'
import { useSelector } from 'react-redux'
import { selectHomeContinentFilter, selectHomeInfo, selectHomeSearchInfo } from './selector'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  const countries = useSelector(selectHomeInfo);
  const region = useSelector(selectHomeContinentFilter);
  const infoSearch = useSelector(selectHomeSearchInfo);

  

  
  return (
    <Page>
      <Content>
        <SearhBar/>
        <StyledPatchCard>
          
          {countries && countries.filter((currCountry, index) => (
           currCountry.name.common.toLowerCase().trim().includes(infoSearch.toLowerCase().trim()) ? 
         
          <NavLink 
            to={`/${currCountry.name.common}`} 
            key={index}
          >
              <Card 
                country={currCountry}
              />
          </NavLink>
            
            : null

          )).map( (currCountry, index) => (

            region === null ? 
         
          <NavLink 
            to={`/${currCountry.name.common}`} 
            key={index}
          >
            <Card 
              country={currCountry}
            />
          </NavLink>
           
           : region === currCountry.region ? 

          <NavLink 
            to={`/${currCountry.name.common}`} 
            key={index}
          >
            <Card 
              country={currCountry}
            />
          </NavLink>

           : null          
           ))
          }
          
        </StyledPatchCard>
      </Content>
    </Page>
  )
}

export default HomePage

