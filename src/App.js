import React from "react";
import { useDispatch } from "react-redux";

import HomePage from "./containers/homePage";
import { loadCountries } from "./slice";

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then( json => json.json() )
    .then( resp => {
      dispatch(loadCountries({data: resp}))
    } )
  })

  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
