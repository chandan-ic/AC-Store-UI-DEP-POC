import { createSlice } from "@reduxjs/toolkit";
import { searchState } from "./search-state";

export const initialState = {
  ...searchState,
  
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  
  reducers: {
    setSearchMasterData: (state, action) => {
      state.searchMasterData = action.payload;
    },
    setSearchToInitial: (state) => {
      state.brand = [];
      state.categoryType = null;
      state.feature = [];
      state.bikeColor = [];
      state.active = 1;
    },
    setSeletedBikeColor: (state, action) => {
      state.bikeColor = action.payload;
    },
    setSelectedBrand: (state, action) => {
      state.brand = [...action.payload];
    },
    setActiveFilter: (state, action) => {
      state.active = action.payload;
    },
    setSeletedCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
    setSelectedSpecialFeature: (state, action) => {
      state.feature = action.payload;
    },
    setSeletedMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setSeletedMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setSeletedMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSeletedMinEngineCC: (state, action) => {
      state.minEngineCC = action.payload;
    },
    setSeletedMaxEngineCC: (state, action) => {
      state.maxEngineCC = action.payload;
    },
    setModelResponseData: (state, action) => {
      state.modelResData = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },

    setSelectedSort: (state, action) => {
      state.sortBy = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setClearAll: (state, action) => {
      state.clearAll = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setFuelType: (state, action) => {
      state.fuelType = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    clearFilterValue: (state) => {
      state.brand = [];
      state.categoryType = null;
      state.minPrice = null;
      state.maxPrice = null;
      state.minEngineCC = null;
      state.maxEngineCC = null;
      state.feature = [];
      state.sortBy = null;
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
export const searchActions = searchSlice.actions;
export default searchSlice;
