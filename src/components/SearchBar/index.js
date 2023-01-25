import React from 'react'
import { useDispatch } from 'react-redux'
import SelectRegion from '../SelectRegion'
import { onCountry } from './slice'
import { Container, StyledInputSearch } from './styles'

const SearhBar = () => {
  const [inputValue, setInputValue ] = React.useState('')
  const dispatch = useDispatch()

  function onInputValue({target}){
    setInputValue(target.value)
  }

  React.useEffect(() => {
    dispatch(onCountry({value: inputValue}))
  })
  

  return (
    <Container>
      <StyledInputSearch 
        value={inputValue} 
        onChange={onInputValue} 
        placeholder='Search for a country...'
      />
      <SelectRegion/>
    </Container>
  )
}

export default SearhBar
