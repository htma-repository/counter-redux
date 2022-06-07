import { createSlice } from "@reduxjs/toolkit";

const initCounterState = {
  value: 0,
  isShowToggle: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initCounterState,
  reducers: {
    increment(state, action) {
      state.value += action.payload.value;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
    increase(state, action) {
      state.value += action.payload;
    },
    isShowToggle(state, action) {
      state.isShowToggle = action.payload;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
