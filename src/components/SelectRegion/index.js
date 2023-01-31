import React from 'react'
import { useDispatch } from 'react-redux'

import Up from '../../icons/chevron-up-outline.svg'
import Down from '../../icons/chevron-down-outline.svg'

import { onRegion } from './slice'
import { Container, StyledSelectRegion } from './styles'

const SelectRegion = () => {
  const [selectOpen, setSelectOpen] = React.useState(false)
  const [value, setValue] = React.useState(null)
  const dispatch = useDispatch();

  const UpDown = <img src={selectOpen ? Up : Down}/>


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
        <p>Africa</p>
        <p>Americas</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Oceania</p>
      </StyledSelectRegion>
    </Container>
  )
}

export default SelectRegion
