import { createSelector } from "@reduxjs/toolkit"

const selectFilter = state => state.countries.data;

const selectFilterRegions = createSelector(selectFilter, state => state.map(( region => region.region)));

export{
  selectFilter,
  selectFilterRegions
}