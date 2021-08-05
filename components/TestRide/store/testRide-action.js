import { testRideActions } from "./testRide-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";

export const sumbitTestRideFormRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.testDrive.url,
      method: apiUrl.testDrive.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig);
      if (response !== null) {
        dispatch(testRideActions.setIsOtpVerified(true));
      }
    } catch (error) {}
  };
};

export const testDriveSentOtpRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.trSentOtp.url,
      method: apiUrl.trSentOtp.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(testRideActions.setSubmitStatus(true));
      }
    } catch (error) {}
  };
};

export const testDriveResentOtpRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.trResentOtp.url,
      method: apiUrl.trResentOtp.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(testRideActions.setSubmitStatus(true));
      }
    } catch (error) {}
  };
};
