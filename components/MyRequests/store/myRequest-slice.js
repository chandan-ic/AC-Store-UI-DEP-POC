import { createSlice } from "@reduxjs/toolkit";
import { MyRequestState } from "./myRequest-state";

export const initialState = {
    ...MyRequestState
}

const MyRequestSlice = createSlice({
    name: 'myrequest', initialState,
    reducers: {
        setShowCancel: (state, action) => {
            state.showCancel = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setRequestData: (state, action) => {
            state.RequestData = action.payload;
        }
        // showNotification: (state, action) => {
        //     state.notification = {
        //         status: action.payload.status,
        //         title: action.payload.title,
        //         message: action.payload.message,
        //     }
        // }
    },

});

export const myRequestActions = MyRequestSlice.actions;
export default MyRequestSlice;