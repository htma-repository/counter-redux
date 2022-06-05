import { configureStore, createSlice } from "@reduxjs/toolkit";

export const INCRE = "INCRE",
  DECRE = "DECRE";

const initState = {
  value: 0,
  isShowToggle: false,
};

createSlice({});

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case INCRE:
      return {
        ...state,
        value: state.value + action.newValue,
      };

    case DECRE:
      return {
        ...state,
        value: state.value - action.newValue,
      };

    case "INCREASEBY":
      return {
        ...state,
        value: state.value + action.newValueBy,
      };

    case "TOGGLE":
      return {
        ...state,
        isShowToggle: action.isShown,
      };

    case "RESET":
      return state;

    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
