import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";
// import { apiErrorMsg } from "utils/constant/api/apiErrorMessage";
// import { Notifications } from "utils/constant/notificationMessages";
import { store } from "react-notifications-component";
import { getToaster } from "utils/helper/notificationHelper";

export const getProileAddrDataRequest = (data) => {
  console.log("gowi");
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.profileAddressGetList.url,
      method: apiUrl.profileAddressGetList.method,
      customHeader: data.customHeader,
    };

    try {
      const response = await apiCall(apiConfig);
    } catch (error) {}
  };
};

export const getProileContDataRequest = () => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.profileContactMasterData.url,
      method: apiUrl.profileContactMasterData.method,
    };

    try {
      const response = await apiCall(apiConfig);
    } catch (error) {}
  };
};
