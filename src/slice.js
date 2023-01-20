import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers:{
    loadCountries: (state, action) =>{
      state.data = action.payload.data
    }
  }
})

export const { loadCountries } = countriesSlice.actions

export default countriesSlice.reducer;