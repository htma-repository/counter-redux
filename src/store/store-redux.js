import { configureStore, createSlice } from "@reduxjs/toolkit";

// export const INCR = "INCR",
//   DECR = "DECR";

const initCounterState = {
  value: 0,
  isShowToggle: false,
};

const initAuthState = {
  isAuth: false,
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

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      state.isAuth = action.payload;
    },
    logout(state, action) {
      state.isAuth = action.payload;
    },
  },
});

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case INCR:
//       return {
//         ...state,
//         value: state.value + action.newValue,
//       };

//     case DECR:
//       return {
//         ...state,
//         value: state.value - action.newValue,
//       };

//     case "INCREASERS":
//       return {
//         ...state,
//         value: state.value + action.newValueBy,
//       };

//     case "TOGGLE":
//       return {
//         ...state,
//         isShowToggle: action.isShown,
//       };

//     case "RESET":
//       return state;

//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const authAction = AuthSlice.actions;
export default store;
