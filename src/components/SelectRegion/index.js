import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilterRegions } from './selector'

import { onRegion } from './slice'
import { Container, StyledSelectRegion } from './styles'

const SelectRegion = () => {
  const [selectOpen, setSelectOpen] = React.useState(false)
  const [value, setValue] = React.useState(null)

  const dispatch = useDispatch();
  const UpDown = selectOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>
  const regions = useSelector(selectFilterRegions);
  const region = (regions || []).filter((region, index) => regions.indexOf(region) === index);

  function onOpenSelect(){
    setSelectOpen(!selectOpen)
  }

  function onSelectRegion({target}){
    setSelectOpen(!selectOpen)
    return setValue(target.innerText)
  }

  React.useEffect(()=>{
    dispatch(onRegion({data: value}))
  })
  
  return (
    <Container >
      <nav onClick={onOpenSelect}><p>{!value ? 'Filter by Region' : value} </p>{UpDown}</nav>
      <StyledSelectRegion onClick={onSelectRegion} open={selectOpen}>
        { region && region.map( (region, index) => <p key={index}>{region}</p> ) }
      </StyledSelectRegion>
    </Container>
  )
}

export default SelectRegion
