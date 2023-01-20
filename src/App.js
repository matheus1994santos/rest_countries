import React from "react";
import { useDispatch } from "react-redux";

import HomePage from "./containers/homePage";
import { loadCountries } from "./slice";

function App() {
  const dispatch = useDispatch()
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    if(info) return ;
    fetch(`https://restcountries.com/v3.1/all`)
    .then( json => json.json() )
    .then( resp => {
      dispatch(loadCountries({data: resp}))
      setInfo(resp)
    } )
  })

  

  console.log(info)
  return (
    <div>
      <HomePage info={info}/>
    </div>
  );
}

export default App;
