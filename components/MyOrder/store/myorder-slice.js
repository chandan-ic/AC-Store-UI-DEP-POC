import { createSlice } from "@reduxjs/toolkit";
import { myOrderState } from "./myorder-state";

export const initialState = {
  ...myOrderState,
};

const myOrderSlice = createSlice({
  name: "myOrder",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
  },
});
export const myOrderAction = myOrderSlice.actions;
export default myOrderSlice;
