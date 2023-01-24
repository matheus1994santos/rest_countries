import { createSelector } from "@reduxjs/toolkit";

const selectTheme = state => state.theme;

const selectThemeCurrent = createSelector(selectTheme, state => state.theme)

export {
  selectTheme,
  selectThemeCurrent
}