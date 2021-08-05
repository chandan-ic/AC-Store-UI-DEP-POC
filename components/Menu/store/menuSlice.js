import { createSlice } from '@reduxjs/toolkit';
import { menuState } from './menuState'

export const initialState = {
    ...menuState
}

const menuSlice = createSlice({
    name: "menu", initialState,
    reducers: {
        setCloseRMenu: (state, action) => {
            state.menuOpen = action.payload
        }
    }
})
export const menuActions = menuSlice.actions;
export default menuSlice;
