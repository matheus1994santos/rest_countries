import { createSelector } from "@reduxjs/toolkit";

const selectHome = state => state.countries.data ;

const selectHomeInfo = createSelector(selectHome, state => state)

export { selectHome, selectHomeInfo };