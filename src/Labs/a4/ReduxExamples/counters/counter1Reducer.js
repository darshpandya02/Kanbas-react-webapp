import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = counter1Slice.actions;
export default counter1Slice.reducer;
