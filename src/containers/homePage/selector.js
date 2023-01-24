import { createSelector } from "@reduxjs/toolkit";

const selectHome = state => state.countries.data;

const selectHomeContinent = state => state.region;

const selectHomeContinentFilter = createSelector(selectHomeContinent, state => state.region)

const selectHomeInfo = createSelector(selectHome, state => state)

export { selectHome, selectHomeInfo, selectHomeContinentFilter };