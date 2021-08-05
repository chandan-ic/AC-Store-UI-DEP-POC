import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";
import { setCookie } from "utils/helper/cookieFunc";
import { loginActions } from "./login-slice";
import { setExpiryTime } from "utils/helper/dateFunc";
import Router from "next/router";

export const loginWithPasswordRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.loginPassword.url,
      method: apiUrl.loginPassword.method,
      body: data,
    };

    try {
      const loginMsg = await apiCall(apiConfig, true);
      if (loginMsg !== null) {
        dispatch(loginActions.setLoggedIn(true));
        setCookie("is_logged_in", "true", false);
        setCookie("token", loginMsg?.responseData?.data?.token, false);
        setCookie("x", loginMsg?.responseData?.data?.x, false);
        setCookie("y", loginMsg?.responseData?.data?.y, false);
        setCookie(
          "expiry",
          setExpiryTime(loginMsg?.responseData?.data?.token?.expiresIn),
          false
        );

        const user = {
          customerEmailId: loginMsg?.responseData?.data?.customerEmailId,
          customerFirstName: loginMsg?.responseData?.data?.customerFirstName,
          customerFullName: loginMsg?.responseData?.data?.customerFullName,
          customerLastName: loginMsg?.responseData?.data?.customerLastName,
          customerMobileNo: loginMsg?.responseData?.data?.customerMobileNo,
        };
        window.localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginActions.setUser({ ...user }));
        Router.push("/");
      }
    } catch (error) {}
  };
};

export const loginWithOtpRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.loginOtp.url,
      method: apiUrl.loginOtp.method,
      body: data,
    };

    try {
      const response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(loginActions.setOtpSent(true));
        dispatch(loginActions.setStatus("login-verify"));
      }
    } catch (error) {}
  };
};

export const forgotPasswordOtpVerifyRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.passwordVerifyOtp.url,
      method: apiUrl.passwordVerifyOtp.method,
      body: data,
    };

    try {
      const response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(loginActions.setPasswordChanged(true));
        dispatch(loginActions.setStatus("login-password"));
      }
    } catch (error) {}
  };
};

export const forgotPasswordOtpRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.passwordGenerateOTP.url,
      method: apiUrl.passwordGenerateOTP.method,
      body: data,
    };

    try {
      const response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(loginActions.setOtpSent(true));
        dispatch(loginActions.setStatus("reset-password"));
      }
    } catch (error) {}
  };
};

export const loginWithOtpVerifyRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.loginOtpVerify.url,
      method: apiUrl.loginOtpVerify.method,
      body: data,
    };

    try {
      const loginMsg = await apiCall(apiConfig, true);
      if (loginMsg !== null) {
        dispatch(loginActions.setLoggedIn(true));

        setCookie("is_logged_in", "true", false);
        setCookie("token", loginMsg?.responseData?.data?.token, false);
        setCookie("x", loginMsg?.responseData?.data?.x, false);
        setCookie("y", loginMsg?.responseData?.data?.y, false);
        setCookie(
          "expiry",
          setExpiryTime(loginMsg?.responseData?.data?.token?.expiresIn),
          false
        );

        const user = {
          customerEmailId: loginMsg?.responseData?.data?.customerEmailId,
          customerFirstName: loginMsg?.responseData?.data?.customerFirstName,
          customerFullName: loginMsg?.responseData?.data?.customerFullName,
          customerLastName: loginMsg?.responseData?.data?.customerLastName,
          customerMobileNo: loginMsg?.responseData?.data?.customerMobileNo,
        };
        window.localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginActions.setUser({ ...user }));
        dispatch(loginActions.setOtpVerified(true));
        Router.push("/");
      }
    } catch (error) {}
  };
};

export const forgotPasswordVerifyRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.passwordVerifyOtp.url,
      method: apiUrl.passwordVerifyOtp.method,
      body: data,
    };

    try {
      const loginMsg = await apiCall(apiConfig, true);
      if (loginMsg !== null) {
      }
    } catch (error) {}
  };
};
