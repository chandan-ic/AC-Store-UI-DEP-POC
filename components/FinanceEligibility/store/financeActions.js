import { apiCall } from "../../../utils/helper/apiHelper";
import { apiUrl } from "../../../utils/constant/api/apiRoutes";
import { financeActions } from "components/FinanceEligibility/store/financeSlice";
import { FINANCE_SUCCESS } from "utils/constant/routerPath";
import Router from "next/router";

export const createFinanceRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.Finance.url,
      method: apiUrl.Finance.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(financeActions.setOtpSent(true));
      }
    } catch (error) {}
  };
};

export const financeVerifyOtpRequest = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.FinanceVerifyOtp.url,
      method: apiUrl.FinanceVerifyOtp.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
      if (response !== null) {
        dispatch(financeActions.setOtpVerified(true));
        dispatch(financeActions.resetValues());
        Router.push(FINANCE_SUCCESS);
      }
    } catch (error) {}
  };
};

export const financeRequestRegenerateOtp = (data) => {
  let response = null;
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.FinanceRegenOtp.url,
      method: apiUrl.FinanceRegenOtp.method,
      body: data,
    };

    try {
      response = await apiCall(apiConfig, true);
    } catch (error) {}
  };
};
