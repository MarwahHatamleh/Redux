import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    inc: (state, action) => {
      state.counter = state.counter + 1;
    },

    dec: (state, action) => {
      state.counter = state.counter - 1;
    },

    reset: (state, action) => {
      state.counter = 0;
    },
  },
});


export const { inc, dec, reset } = counterSlice.actions;
export default counterSlice.reducer;