import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dataHome: [],
}

export const countriesSlice = createSlice({
  name: 'dataHome',
  initialState,
  reducers:{
    
  }
})



export default countriesSlice.reducer;