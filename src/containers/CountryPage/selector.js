import { createSelector } from "@reduxjs/toolkit";

const selectCountry = state => state.countries;

const selectCountryCurrent = createSelector(selectCountry, state => state.card)

const selectCountryInfo = createSelector(selectCountry, state => state.data);
const selectCountryCurrencies = createSelector(selectCountry, state => (
  state.data.map( ({currencies}) => currencies)
));

export {
  selectCountry,
  selectCountryCurrent,
  selectCountryInfo,
  selectCountryCurrencies
}