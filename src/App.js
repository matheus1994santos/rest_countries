import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import HomePage from "./containers/homePage";
import { selectThemeCurrent } from "./selector";

import { loadCountries } from "./slice";
import { lightMode, darkMode } from './utils/theme';

function App() {
  const dispatch = useDispatch()
  const Theme = useSelector(selectThemeCurrent);
  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then( json => json.json() )
    .then( resp => {
      dispatch(loadCountries({data: resp}))
    } )
  })

  return (
    <ThemeProvider theme={Theme === 'Light Mode' ? lightMode : darkMode}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
