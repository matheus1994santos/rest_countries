import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import TopNav from "./components/TopNav";
import CountryPage from "./containers/CountryPage";

import HomePage from "./containers/homePage";

import { requestCountries } from "./slice";
import { lightMode, darkMode } from './utils/theme';

function App() {
  const dispatch = useDispatch();
  const [Theme, setTheme] = React.useState('')

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then( json => json.json() )
    .then( resp => {
      dispatch(requestCountries({data: resp}))
    } )
  })

  return (
    <ThemeProvider theme={Theme === 'Light Mode' ? lightMode : darkMode}>
      <TopNav  setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:name" element={<CountryPage />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
