import React from 'react'
import { useDispatch } from 'react-redux'
import SelectRegion from '../SelectRegion'
import { onCountry } from './slice'
import { Container, StyledBoxInputSearh, StyledInputSearch } from './styles'

const SearhBar = () => {
  const [inputValue, setInputValue ] = React.useState('')
  const dispatch = useDispatch();

  function onInputValue({target}){
    setInputValue(target.value)
  }

  React.useEffect(() => {
    dispatch(onCountry({value: inputValue}))
  })
  

  return (
    <Container>
      <StyledBoxInputSearh>
      <i className="fa-solid fa-magnifying-glass"></i>
        <StyledInputSearch 
          value={inputValue} 
          onChange={onInputValue} 
          placeholder={`Search for a country...`}
        />
      </StyledBoxInputSearh>
      <SelectRegion/>
    </Container>
  )
}

export default SearhBar
