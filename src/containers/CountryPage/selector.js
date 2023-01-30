import { createSelector } from "@reduxjs/toolkit";

const selectCountry = state => state.countries;

const selectCountryCurrent = createSelector(selectCountry, state => state.card)

const selectCountryInfo = createSelector(selectCountry, state => state.data);
const selectCountryLanguages = createSelector(selectCountryInfo, state => state)

export {
  selectCountry,
  selectCountryCurrent,
  selectCountryInfo,
  selectCountryLanguages
}