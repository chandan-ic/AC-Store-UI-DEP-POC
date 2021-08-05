import { createSlice } from '@reduxjs/toolkit';
import { profileDataState } from './profileData-state';

export const initialState = {
    ...profileDataState,
};

const profileDataSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
    
  },
});
export const profileDataActions = profileDataSlice.actions;
export default profileDataSlice;