import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
  card: ''
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers:{
    requestCountries: (state, action) =>{
      state.data = action.payload.data
    },
  }
})

export const { requestCountries } = countriesSlice.actions

export default countriesSlice.reducer;