import { createSlice } from "@reduxjs/toolkit";
import { financeState } from "./financeState";

export const initialState = {
  ...financeState,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setFinanceMasterData: (state, action) => {
      state.financeMasterData = action.payload;
    },
    setCustomerCode: (state, action) => {
      state.customerCode = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setStateSlno: (state, action) => {
      state.stateSlno = action.payload;
    },
    setCitySlno: (state, action) => {
      state.citySlno = action.payload;
    },
    setPinCode: (state, action) => {
      state.pinCode = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setMobileNo: (state, action) => {
      state.mobileNo = action.payload;
    },
    setEmailId: (state, action) => {
      state.emailId = action.payload;
    },
    setLikelyPurchaseDate: (state, action) => {
      state.likelyPurchaseDate = action.payload;
    },
    setModelSlno: (state, action) => {
      state.modelSlno = action.payload;
    },
    setBrandSlno: (state, action) => {
      state.brandSlno = action.payload;
    },
    setApplicantType: (state, action) => {
      state.applicantType = action.payload;
    },
    setMonthlyIncomeDetails: (state, action) => {
      state.monthlyIncomeDetails = action.payload;
    },
    setRealtionTypeSlno: (state, action) => {
      state.realtionTypeSlno = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAddressLine1: (state, action) => {
      state.addressLine1 = action.payload;
    },
    setAddressLine2: (state, action) => {
      state.addressLine2 = action.payload;
    },
    setLandMark: (state, action) => {
      state.landMark = action.payload;
    },
    setAddressType: (state, action) => {
      state.addressType = action.payload;
    },
    setCountrySlno: (state, action) => {
      state.countrySlno = action.payload;
    },
    setLocationStatus: (state, action) => {
      state.locationStatus = action.payload;
    },
    setAddressStatus: (state, action) => {
      state.addressStatus = action.payload;
    },
    setMonthsLivingInCurrentAddress: (state, action) => {
      state.monthsLivingInCurrentAddress = action.payload;
    },
    setEmploymentType: (state, action) => {
      state.employmentType = action.payload;
    },
    setDocumentSlno: (state, action) => {
      state.documentSlno = action.payload;
    },
    setDocumentNo: (state, action) => {
      state.documentNo = action.payload;
    },
    setPreferredTenureSlno: (state, action) => {
      state.preferredTenureSlno = action.payload;
    },
    setFinancierSlno: (state, action) => {
      state.financierSlno = action.payload;
    },
    setPreferredDownPaymentAmount: (state, action) => {
      state.preferredDownPaymentAmount = action.payload;
    },
    setLocationSlno: (state, action) => {
      state.locationSlno = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setCompanyTenureSlno: (state, action) => {
      state.companyTenureSlno = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },
    setOtpSent: (state, action) => {
      state.isOtpSent = action.payload;
    },
    resetValues: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.stateSlno = 0;
      state.citySlno = 0;
      state.pinCode = "";
      state.dateOfBirth = null;
      state.mobileNo = "";
      state.emailId = "";
      state.likelyPurchaseDate = null;
      state.modelSlno = 0;
      state.brandSlno = 0;
      state.applicantType = "";
      state.monthlyIncomeDetails = 0;
      state.preferredTenureSlno = 0;
      state.realtionTypeSlno = "";
      state.gender = "";
      state.addressLine1 = "";
      state.addressLine2 = "";
      state.landMark = "";
      state.addressType = "";
      state.countrySlno = 1;
      state.locationStatus = "R";
      state.addressStatus = "P";
      state.monthsLivingInCurrentAddress = 24;
      state.employmentType = "";
      state.documentSlno = 0;
      state.documentNo = "";
      state.financierSlno = 0;
      state.preferredDownPaymentAmount = 20000;
      state.locationSlno = 1;
      state.company = "";
      state.companyTenureSlno = 0;
    },
    resetFastTrackDetails: (state) => {
      state.realtionTypeSlno = "";
      state.gender = "";
      state.addressLine1 = "";
      state.addressLine2 = "";
      state.landMark = "";
      state.addressType = "";
      state.countrySlno = 1;
      state.locationStatus = "R";
      state.addressStatus = "P";
      state.monthsLivingInCurrentAddress = 24;
      state.employmentType = "";
      state.documentSlno = 0;
      state.documentNo = "";
      state.financierSlno = 0;
      state.preferredDownPaymentAmount = 20000;
      state.locationSlno = 1;
      state.company = "";
      state.companyTenureSlno = 0;
    },
  },
});
export const financeActions = financeSlice.actions;
export default financeSlice;
