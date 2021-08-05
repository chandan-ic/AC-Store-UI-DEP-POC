import { createSlice } from "@reduxjs/toolkit";
import { loginState } from "./login-state";

export const initialState = {
  ...loginState,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setOtpSent: (state, action) => {
      state.isOtpSent = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      localStorage.setItem("status", state.status);
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setPasswordChanged: (state, action) => {
      state.isPasswordChanged = action.payload;
    },
    setInvalidUser: (state, action) => {
      state.isInvalidUser = action.payload;
    },
    resetValues: (state) => {
      state.isOtpSent = false;
      state.isOtpVerified = false;
      state.isPasswordChanged = false;
      state.isPasswordChanged = false;
      state.isLoggedIn = false;
      state.user = null;
      state.mobile = "";
      state.isInvalidUser = false;
    },
  },
});
export const loginActions = loginSlice.actions;
export default loginSlice;
