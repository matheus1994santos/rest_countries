import React from 'react'

import Page from '../../components/Page'
import Content from '../../components/Content'
import SearhBar from '../../components/SearchBar'
import Card from '../../components/Card'

import { StyledPatchCard } from './styles'
import { useSelector } from 'react-redux'
import { selectHomeContinentFilter, selectHomeInfo, selectHomeSearchInfo } from './selector'
import { NavLink } from 'react-router-dom'

const HomePage = ({setName}) => {
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
         
          <NavLink 
            to={'/Country'} 
            key={index}
          >
              <Card 
                props={props}
                setName={setName} 
              />
          </NavLink>
            
            : null

          )).map( (props, index) => (

            region === null && index < 8 ? 
         
          <NavLink 
            to={'/Country'} 
            key={index}
          >
            <Card 
              props={props}
              setName={setName}  
            />
          </NavLink>
           
           : region === props.region ? 

          <NavLink 
            to={'/Country'} 
            key={index}
          >
            <Card 
              props={props}
              setName={setName} 
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

