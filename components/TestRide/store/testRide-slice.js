import { createSlice } from "@reduxjs/toolkit";
import { testRideState } from "./testRide-state";

export const initialState = {
  ...testRideState,
};

const testRideSlice = createSlice({
  name: "testRide",
  initialState,
  reducers: {
    setSubmitStatus: (state, action) => {
      state.isSubmitted = action.payload;
    },
    setDealerSubmit: (state, action) => {
      state.isDealerSumbit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setBikeBrand: (state, action) => {
      state.bikeBrand = action.payload;
    },
    setBikeVariant: (state, action) => {
      state.bikeVariant = action.payload;
    },
    setTestRideType: (state, action) => {
      state.testRideType = action.payload;
    },
    setPinCode: (state, action) => {
      state.pinCode = action.payload;
      state.dealerCode = null;
    },
    setTestRideLocation: (state, action) => {
      state.testRideLocation = action.payload;
    },
    setTestRideAddress: (state, action) => {
      state.testRideAddress = action.payload;
    },
    setDealerCode: (state, action) => {
      state.dealerCode = action.payload;
    },
    setTestRideDate: (state, action) => {
      state.testRideDate = action.payload;
    },
    setTestRideCustomerFirstName: (state, action) => {
      state.customerFirstName = action.payload;
    },
    setTestRideCustomerLastName: (state, action) => {
      state.customerLastName = action.payload;
    },
    setTestRideCustomerPhone: (state, action) => {
      state.customerPhone = action.payload;
    },
    setTestRideCustomerEmail: (state, action) => {
      state.customerEmail = action.payload;
    },
    setTestRideCustomerDlnumber: (state, action) => {
      state.drivingLicenceNo = action.payload;
    },
    setTestRideCustomerAltPhone: (state, action) => {
      state.customerAlternatePhone = action.payload;
    },
    setTestRideCustomerPincode: (state, action) => {
      state.customerPincode = action.payload;
    },
    setTestRideSelectedDate: (state, action) => {
      state.testRideSelectedDate = action.payload;
    },
    setTestRideTime: (state, action) => {
      state.testRideTime = action.payload;
    },
    setPreselected: (state, action) => {
      state.preSelected = action.payload;
    },
    setRequestNumber: (state, action) => {
      state.requestNo = action.payload;
    },
    setSearchDealersBy: (state, action) => {
      state.searchDealersBy = action.payload;
    },
    setRideCity: (state, action) => {
      state.rideCity = action.payload;
    },
    setRideState: (state, action) => {
      state.rideState = action.payload;
    },
    setIsOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },
    resetValues: (state) => {
      state.isSubmitted = false;
      state.isOtpVerified = false;
      state.isDealerSumbit = false;
      state.currentPage = "bikeSelect";
      state.bikeBrand = "";
      state.bikeVariant = "";
      state.testRideLocation = null;
      state.pinCode = null;
      state.dealerCode = null;
      state.dealerLoading = false;
      state.testRideDate = null;
      state.testRideTime = null;
      state.testRideSelectedDate = null;
      state.testRideAddress = null;
      state.customerFirstName = null;
      state.customerLastName = null;
      state.customerEmail = null;
      state.customerPhone = null;
      state.drivingLicenceNo = null;
      state.customerAlternatePhone = null;
      state.customerPincode = null;
      state.preSelected = false;
      state.searchDealersBy = "";
      state.requestNo = "";
      state.rideState = "";
      state.rideCity = "";
    },
  },
});
export const testRideActions = testRideSlice.actions;
export default testRideSlice;
