import { store } from "react-notifications-component";
import { apiUrl } from "../../../utils/constant/api/apiRoutes";
import { Notifications } from "../../../utils/constant/notificationMessages";
import { apiCall } from "../../../utils/helper/apiHelper";
import { getToaster } from "../../../utils/helper/notificationHelper";
import { bookingActions } from "./booking-slice";

export const getBookingMaster = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.BookingMaster.url,
      method: apiUrl.BookingMaster.method,
      body:data
    };

    try {
      const responseData = await apiCall(apiConfig);
      if (responseData !== null) {
        console.log(responseData)
        dispatch(bookingActions.setProduct(responseData?.responseData?.data));
      }
    } catch (error) {}
  };
};

//indexApiSatrt

export const getBikeVariantsRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.bookingBikeSelect.url + `${data.bookingBike}`,
      method: apiUrl.bookingBikeSelect.method,
    };

    try {
      const apiResponse = await apiCall(apiConfig);
      const notificationMsg = {
        title: "Success",
        message: apiResponse?.responseData?.messages[0].messageText,
        type: "success",
      };
      dispatch(bookingActions.setVariantData(responseData.responseData));

      store.addNotification(getToaster(notificationMsg));
    } catch (error) {
      //     dispatch(
      //       testRideActions.showNotification(
      //         Notifications.testDriveFormSubmitFailed
      //       )
      //     );
      //     store.addNotification(
      //       getToaster(Notifications.testDriveFormSubmitFailed)
      //     );
    }
  };
};

// export const getBookingMaster = () => {
//   return async (dispatch) => {
//     const apiConfig = {
//       url: apiUrl.bookingMaster.url,
//       method: apiUrl.bookingMaster.method,
//       errorMsg: apiErrorMsg.getMaster,
//     };

//     try {
//       const responseData = await apiCall(apiConfig);
//       dispatch(bookingActions.setBookingMaster(responseData.responseData));
//       dispatch(bookingActions.showNotification(Notifications.getMasterSuccess));
//       store.addNotification(getToaster(Notifications.getMasterSuccess));
//     } catch (error) {
//       dispatch(bookingActions.showNotification(Notifications.getMasterFailed));
//       store.addNotification(getToaster(Notifications.getMasterFailed));
//     }
//   };
// };

//indexApi end

export const submitBikeVariant = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.booking.url,
      method: apiUrl.booking.method,
      body: data,
      errorMsg: apiErrorMsg.submitVariantError,
    };

    try {
      const bookingVariantData = await apiCall(apiConfig);
      dispatch(
        bookingActions.showNotification(Notifications.VariantSubmitSuccess)
      );
      store.addNotification(getToaster(Notifications.VariantSubmitSuccess));
    } catch (error) {
      dispatch(
        bookingActions.showNotification(Notifications.VariantSubmitFailed)
      );
      store.addNotification(getToaster(Notifications.VariantSubmitFailed));
    }
  };
};

export const submitBikeVariantColor = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.booking.url,
      method: apiUrl.booking.method,
      body: data,
      errorMsg: apiErrorMsg.submitVariantError,
    };

    try {
      await apiCall(apiConfig);
      dispatch(
        bookingActions.showNotification(Notifications.VariantColorSuccess)
      );
      store.addNotification(getToaster(Notifications.VariantColorSuccess));
    } catch (error) {
      dispatch(
        bookingActions.showNotification(Notifications.VariantColorFailed)
      );
      store.addNotification(getToaster(Notifications.VariantColorFailed));
    }
  };
};

export const sendbookingLocation = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.booking.url,
      method: apiUrl.booking.method,
      body: data,
      errorMsg: apiErrorMsg.submitVariantError,
    };

    try {
      const bookingAmount = await apiCall(apiConfig);
      dispatch(bookingActions.setBookingAmount(bookingAmount.responseData));
      dispatch(
        bookingActions.showNotification(Notifications.VariantColorSuccess)
      );
      store.addNotification(getToaster(Notifications.VariantColorSuccess));
    } catch (error) {
      dispatch(
        bookingActions.showNotification(Notifications.VariantColorFailed)
      );
      store.addNotification(
        getToaster(Notifications.sendbookingVariantColorFailed)
      );
    }
  };
};

export const sendPaymentRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.booking.url,
      method: apiUrl.booking.method,
      body: data,
      errorMsg: apiErrorMsg.submitVariantError,
    };

    try {
      const preOrderNo = await apiCall(apiConfig);
      dispatch(bookingActions.setPreOrderNo(preOrderNo.responseData));
      dispatch(bookingActions.showNotification(Notifications.paymentSuccess));
      store.addNotification(getToaster(Notifications.paymentSuccess));
    } catch (error) {
      dispatch(bookingActions.showNotification(Notifications.paymentFailed));
      store.addNotification(getToaster(Notifications.paymentFailed));
    }
  };
};

export const getBikeImgUrlsFromApi = (productVariant) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.bookingColor.url + `/${productVariant}`,
      method: apiUrl.bookingColor.method,
      errorMsg: apiErrorMsg.getImageError,
    };

    try {
      const bikeData = await apiCall(apiConfig);
      dispatch(bookingActions.setBikeData(responseData.responseData));
      dispatch(
        bookingActions.showNotification(Notifications.VariantColorSuccess)
      );
      store.addNotification(getToaster(Notifications.VariantColorSuccess));
    } catch (error) {
      dispatch(
        bookingActions.showNotification(Notifications.VariantColorFailed)
      );
      store.addNotification(getToaster(Notifications.VariantColorFailed));
    }
  };
};

export const getOnRoadPriceAPI = (reqObject) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.bookingOnRoadPrice.url,
      method: apiUrl.bookingOnRoadPrice.method,
      body: reqObject,
      errorMsg: apiErrorMsg.submitVariantError,
    };

    try {
      const bikePrice = await apiCall(apiConfig);
      dispatch(bookingActions.setBikePrice(bikePrice.responseData));
      dispatch(bookingActions.showNotification(Notifications.paymentSuccess));
      store.addNotification(getToaster(Notifications.paymentSuccess));
    } catch (error) {
      dispatch(bookingActions.showNotification(Notifications.paymentFailed));
      store.addNotification(getToaster(Notifications.paymentFailed));
    }
  };
};

///payment Screen

export const getPaymentButtonDtls = (data) => {
  return async (dispatch) => {
    dispatch(bookingActions.showNotification(Notifications.paymentStart));

    const apiConfig = {
      url: apiUrl.bookingPayment.url,
      method: apiUrl.bookingPayment.method,
      body: data,
      errorMsg: apiErrorMsg.bookingPaymentError,
    };

    try {
      const response = await apiCall(apiConfig);

      dispatch(bookingActions.setPaymentNo(response.responseData.paymentNo));
      dispatch(
        bookingActions.setPaymentGatewayRefNo(
          response.responseData.razorpay.paymentGatewayReferenceNo
        )
      );
      dispatch(
        bookingActions.setClientKey(response.responseData.razorpay.clientKey)
      );
      dispatch(
        bookingActions.setCurrency(response.responseData.razorpay.currency)
      );
      dispatch(
        bookingActions.setTransactionToName(
          response.responseData.razorpay.transactionToName
        )
      );
      dispatch(
        bookingActions.setCustomerName(
          response.responseData.razorpay.customerName
        )
      );
      dispatch(
        bookingActions.setCustomerPhone(
          response.responseData.razorpay.customerPhone
        )
      );
      dispatch(
        bookingActions.setCustomerEmail(
          response.responseData.razorpay.customerEmail
        )
      );

      dispatch(bookingActions.showNotification(Notifications.paymentSuccess));

      store.addNotification(getToaster(Notifications.paymentSuccess));

      dispatch(bookingActions.showNotification(Notifications.paymentComplete));
      store.addNotification(getToaster(Notifications.paymentComplete));
    } catch (error) {
      dispatch(bookingActions.showNotification(Notifications.paymentFailed));
      store.addNotification(getToaster(Notifications.paymentFailed));
    }
  };
};
