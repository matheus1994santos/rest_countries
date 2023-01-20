import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectData = state => state || initialState;

export { selectData };