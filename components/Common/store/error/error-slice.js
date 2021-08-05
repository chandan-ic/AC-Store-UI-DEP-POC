import { createSlice } from "@reduxjs/toolkit";
import { errorState } from "./error-state";

export const initialState = {
  ...errorState,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorList: (state, action) => {
      state.errorList = action.payload;
      state.isError = true;
    },
    resetErrors: (state) => {
      state.errorList = [];
      state.isError = false;
    },
    setIsLoader: (state, action) => {
      state.isLoader = action.payload;
    },
  },
});
export const errorActions = errorSlice.actions;
export default errorSlice;
