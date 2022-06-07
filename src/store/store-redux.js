import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;

// make redux reducer with reducer function

/* export const INCR = "INCR",
  DECR = "DECR";

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case INCR:
      return {
        ...state,
        value: state.value + action.newValue,
      };

    case DECR:
      return {
        ...state,
        value: state.value - action.newValue,
      };

    case "INCREASERS":
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
}; */
