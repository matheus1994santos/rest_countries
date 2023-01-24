import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  theme: [],
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers:{
    currentTopic: (state, action) =>{
      state.theme = action.payload.theme
    }
  }
})

export const { currentTopic } = themeSlice.actions

export default themeSlice.reducer;