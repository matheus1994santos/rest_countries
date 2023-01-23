import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
}

export const countriesSlice = createSlice({
  name: 'dataHome',
  initialState,
  reducers:{

  }
})



export default countriesSlice.reducer;