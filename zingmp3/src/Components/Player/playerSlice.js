import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlay: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    doPlay: (state, action) => {
      state.isPlay = action.payload;
    },
  },
});

export const playerReducer = playerSlice.reducer;
