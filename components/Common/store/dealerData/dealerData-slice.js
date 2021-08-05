import { createSlice } from "@reduxjs/toolkit";
import { dealerDataState } from "./dealerData-state";

export const initialState = {
  ...dealerDataState,
};

const dealerDataSlice = createSlice({
  name: "dealers",
  initialState,
  reducers: {
    setDealerData: (state, action) => {
      state.dealersData = action.payload;
      state.isLoaded = true;
    },
    setLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const dealerDataActions = dealerDataSlice.actions;
export default dealerDataSlice;
