import { configureStore } from "@reduxjs/toolkit";
import countriesSlice  from "./slice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
  }
})