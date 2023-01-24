import { createSelector } from "@reduxjs/toolkit";

const selectHome = state => state.countries;
const selectHomeInfo = createSelector(selectHome, state => state.data)

const selectHomeContinent = state => state.region;
const selectHomeContinentFilter = createSelector(selectHomeContinent, state => state.region)

const selectHomeSearch = state => state.country;
const selectHomeSearchInfo = createSelector(selectHomeSearch, state => state)

export { selectHome, selectHomeInfo, selectHomeContinentFilter, selectHomeSearchInfo };