import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  region: '',
}

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers:{
    onRegion: (state, action) => {
      state.region = action.payload.data
    }
  }
})

export const { onRegion } = regionSlice.actions

export default regionSlice.reducer;