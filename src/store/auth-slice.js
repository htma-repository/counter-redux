import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
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

export const authAction = authSlice.actions;
export default authSlice.reducer;
