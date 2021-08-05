import Router from "next/router";
import { apiUrl } from "../../../utils/constant/api/apiRoutes";
import { apiCall } from "../../../utils/helper/apiHelper";
import { userActions } from "./userSlice";

export const createUserRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.register.url,
      method: apiUrl.register.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(userActions.setCreated(true));
        Router.push("/register/verifyOtp");
      }
    } catch (error) {}
  };
};

export const customerVerifyOtpRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.registerOtpVerify.url,
      method: apiUrl.registerOtpVerify.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(userActions.setOtpVerified(true));
        dispatch(userActions.resetValues());
      }
    } catch (error) {}
  };
};

export const requestRegenerateOtp = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.RegenearteOtp.url,
      method: apiUrl.RegenearteOtp.method,
      body: data,
    };
    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        Router.push("/register/verifyOtp");
      }
    } catch (error) {}
  };
};

export const passwordVerifyOtpRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.passwordVerifyOtp.url,
      method: apiUrl.passwordVerifyOtp.method,
      body: data,
    };
    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        Router.push("/register/resetlink");
      }
    } catch (error) {}
  };
};

export const forgotPasswordOtpRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.passwordGenerateOTP.url,
      method: apiUrl.passwordGenerateOTP.method,
      body: data,
    };
    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        Router.push("/register/forgotInfo");
      }
    } catch (error) {}
  };
};

export const resetPasswordRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.ResetPassword.url,
      method: apiUrl.ResetPassword.method,
      body: data,
    };
    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        Router.push("/register/login");
      }
    } catch (error) {}
  };
};
