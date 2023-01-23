import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectData = state => state;

const selectDataInfo = createSelector(selectData, state => state.countries.data)

export { selectData, selectDataInfo };