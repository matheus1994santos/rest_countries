import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  country: '',
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers:{
    onCountry: (state, action) => {
      state.country = action.payload.value
    }
  }
})

export const { onCountry } = countrySlice.actions

export default countrySlice.reducer;