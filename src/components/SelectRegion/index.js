import React from 'react'
import { useDispatch, use } from 'react-redux'
import { onRegion } from './slice'

import { Container, StyledSelectRegion } from './styles'

const SelectRegion = () => {
  const [selectOpen, setSelectOpen] = React.useState(false)
  const [value, setValue] = React.useState(null)
  const dispatch = useDispatch();

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
      <a onClick={onOpenSelect}>{!value ? 'Filter by Region' : value}</a>
      <StyledSelectRegion onClick={onSelectRegion} open={selectOpen}>
        <a>Africa</a>
        <a>Americas</a>
        <a>Asia</a>
        <a>Europe</a>
        <a>Oceania</a>
      </StyledSelectRegion>
    </Container>
  )
}

export default SelectRegion
