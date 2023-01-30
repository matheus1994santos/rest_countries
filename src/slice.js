import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
  card: ''
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers:{
    loadCountries: (state, action) =>{
      state.data = action.payload.data
    },
    loadCard: (state, action) =>{
      state.card = action.payload.card
    }
  }
})

export const { loadCountries, loadCard } = countriesSlice.actions

export default countriesSlice.reducer;