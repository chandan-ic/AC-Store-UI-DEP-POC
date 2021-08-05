import { createSlice } from "@reduxjs/toolkit";
import { bookingState } from "./booking-state";

export const initialState = {
  ...bookingState,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setProduct: (state, action) =>{
      state.product = action.payload;
    },
    setCurrentstep: (state, action) => {
      state.currentStep = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },

    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setVariant: (state, action) => {
      state.bookingBike = action.payload;
    },
    setFuelType: (state, action) => {
      state.fuelType = action.payload;
    },
    setFinanceRequired: (state, action) => {
      state.financeRequired = action.payload;
    },
    setExchangeRequried: (state, action) => {
      state.exchangeRequried = action.payload;
    },
    setSelectedVariant: (state, action) => {
      state.selectedVariant = action.payload;
    },
    setSelectedDealer: (state, action) => {
      state.selectedDealer = action.payload;
    },

    // setBookingBike: (state, action) => {
    //   state.bookingBike = action.payload;
    // },
    // setPaymentNo: (state, action) => {
    //   state.paymentNo = action.payload;
    // },
    // setVariants: (state, action) => {
    //   state.variants = action.payload;
    // },
    // setVariantData: (state, action) => {
    //   state.variantData = action.payload;
    // },
    // setPreOrderNo: (state, action) => {
    //   state.preOrderNo = action.payload;
    // },
    // setBikeData: (state, action) => {
    //   state.bikeData = action.payload;
    // },
    // setBikePrice: (state, action) => {
    //   state.bikePrice = action.payload;
    // },
    // setBookingPreSelected: (state, action) => {
    //   state.bookingPreSelected = action.payload;
    // },
    // setBookingCurrentStep: (state, action) => {
    //   state.currentStep = action.payload;
    // },
    // setVariantCode: (state, action) => {
    //   state.variantCode = action.payload;
    // },
    // setBookingMaster: (state, action) => {
    //   state.bookingMaster = action.payload;
    // },
    // setButtonType: (state, action) => {
    //   state.buttonType = action.payload;
    // },
    // setCurrentActive: (state, action) => {
    //   state.currentActive = action.payload;
    // },
    // setSelectedProductVariant: (state, action) => {
    //   state.productVariant = action.payload;
    // },
    // setBookingPinCode: (state, action) => {
    //   state.pinCode = action.payload;
    // },
    // setBookingDealerCode: (state, action) => {
    //   state.dealerCode = action.payload;
    // },
    // setBookingSelectedDealerCode: (state, action) => {
    //   state.selectedDealerCode = action.payload;
    // },
    // setExchangeRequired: (state, action) => {
    //   state.exchangeRequired = action.payload;
    // },
    // setRSA: (state, action) => {
    //   state.RSA = action.payload;
    // },
    // setRTO: (state, action) => {
    //   state.RTO = action.payload;
    // },
    // setEW: (state, action) => {
    //   state.EW = action.payload;
    // },
    // setSearchDealersBy: (state, action) => {
    //   state.searchDealersBy = action.payload;
    // },
    // setBookingCity: (state, action) => {
    //   state.bookingCity = action.payload;
    // },
    // setBookingState: (state, action) => {
    //   state.bookingState = action.payload;
    // },
    // setPaymentGatewayRefNo: (state, action) => {
    //   state.paymentGatewayRefNo = action.payload;
    // },
    // setClientKey: (state, action) => {
    //   state.clientKey = action.payload;
    // },
    // setCurrency: (state, action) => {
    //   state.currency = action.payload;
    // },
    // setTransactionToName: (state, action) => {
    //   state.transactionToName = action.payload;
    // },
    // setCustomerName: (state, action) => {
    //   state.customerName = action.payload;
    // },
    // setCustomerPhone: (state, action) => {
    //   state.customerPhone = action.payload;
    // },
    // setCustomerEmail: (state, action) => {
    //   state.customerEmail = action.payload;
    // },
    // setRazorPayorderId: (state, action) => {
    //   state.razorPayOrderId = action.payload;
    // },
    // showNotification(state, action) {
    //   state.notification = {
    //     };
    // }
  },
});

export const bookingActions = bookingSlice.actions;
export default bookingSlice;
