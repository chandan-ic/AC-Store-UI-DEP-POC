import { createSlice } from "@reduxjs/toolkit";
import { homeState } from "./home-state";

export const initialState = {
  ...homeState,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.isLoaded = true;
      console.log("what i am sending=",action.payload);
      state.categoryData = action.payload;

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
export const homeActions = homeSlice.actions;
export default homeSlice;
