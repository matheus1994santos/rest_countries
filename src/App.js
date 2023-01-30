import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CountryPage from "./containers/CountryPage";

import HomePage from "./containers/homePage";
import { selectThemeCurrent } from "./selector";

import { loadCard, loadCountries } from "./slice";
import { lightMode, darkMode } from './utils/theme';

function App() {
  const dispatch = useDispatch();
  const [nameCountry, setNameCountry] = React.useState('')
  const Theme = useSelector(selectThemeCurrent);
  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then( json => json.json() )
    .then( resp => {
      dispatch(loadCountries({data: resp}))
    } )
  })

  React.useEffect(()=>{
    dispatch(loadCard({card: nameCountry}))
  })

  return (
    <ThemeProvider theme={Theme === 'Light Mode' ? lightMode : darkMode}>
      <Routes>
        <Route path="/" element={<HomePage setName={setNameCountry}/>}/>
        <Route path="/Country" element={<CountryPage name={nameCountry}/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
