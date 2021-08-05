import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./userState";

export const initialState = {
  ...userState,
};

const user_slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.Firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.Lastname = action.payload;
    },
    setCustomerPhone: (state, action) => {
      state.customerPhone = action.payload;
    },
    setCustomerEmail: (state, action) => {
      state.customerEmail = action.payload;
    },
    setCreated: (state, action) => {
      state.isCreated = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },
    resetValues(state) {
      state.Firstname = null;
      state.Lastname = "";
      state.customerPhone = null;
      state.customerEmail = "";
      state.isCreated = false;
      state.isOtpVerified = false;
    },
  },
});
export const userActions = user_slice.actions;
export default user_slice;
