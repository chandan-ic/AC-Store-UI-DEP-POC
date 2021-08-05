import { createSlice } from '@reduxjs/toolkit';
import { masterDataState } from './masterData-state';

export const initialState = {
    ...masterDataState,
};

const masterDataSlice = createSlice({
  name: 'master',
  initialState,
  reducers: {
    setMasterData: (state, action) => {
      state.masterData = action.payload;
      state.isLoaded = true;
    },
    setStateCityData: (state, action) => {
      state.stateCity = action.payload;
      state.isStateCityLoaded = true;
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
export const masterDataActions = masterDataSlice.actions;
export default masterDataSlice;