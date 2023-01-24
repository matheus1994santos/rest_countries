import React from 'react'
import { useDispatch } from 'react-redux';
import { currentTopic } from './slice';
import { StyledButtomTheme } from './styles'

const ButtomTheme = () => {
  const [isAtive, setIsAtive] = React.useState(false)
  const [themeMode, setThemeMode] = React.useState("");
  const dispatch = useDispatch();
  

  React.useEffect(()=>{
    setThemeMode(isAtive ? 'Light Mode' : 'Dark Mode')
  }, [isAtive])

  function handleClick(){
    setIsAtive(!isAtive)
  }

  React.useEffect(()=>{
    dispatch(currentTopic({theme: themeMode}))
  })


  return (
    <StyledButtomTheme onClick={handleClick} >
      {themeMode}
    </StyledButtomTheme>
  )
}

export default ButtomTheme
