import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    // user: localStorage.getItem("userInfo")
    //   ? JSON.parse(localStorage.getItem("userInfo"))
    //   : null,
    user: userInfoFromLocalStorage,
    // token: null,
  },
  reducers: {
    // setCredentials: (state, { payload: { user, token } }) => {
    setCredentials: (state, { payload }) => {
      state.user = payload;
      // state.token = token;
      localStorage.setItem("userInfo", JSON.stringify(payload));
    },
    removeCredentials: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
