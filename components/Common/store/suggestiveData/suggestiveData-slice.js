import { createSlice } from '@reduxjs/toolkit';
import { suggestiveDataState } from './suggestiveData-state';

export const initialState = {
    ...suggestiveDataState,
};

const suggestiveDataSlice = createSlice({
  name: 'suggestive',
  initialState,
  reducers: {
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    setQuestionData: (state, action) => {
      state.question = action.payload;
    },
  },
});
export const suggestiveDataActions = suggestiveDataSlice.actions;
export default suggestiveDataSlice;