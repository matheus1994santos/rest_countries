import { configureStore } from "@reduxjs/toolkit";

import regionSlice from "./components/SelectRegion/slice";
import countrySlice from "./components/SearchBar/slice";
import themeSlice from "./components/ButtomTheme/slice";

import countriesSlice  from "./slice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    region: regionSlice,
    country: countrySlice,
    theme: themeSlice,
  }
})