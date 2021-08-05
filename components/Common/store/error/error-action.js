import { dealerDataActions } from "./dealerData-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";
import { apiErrorMsg } from "utils/constant/api/apiErrorMessage";

export const sendDealerDataRequest = (data) => {
  return async (dispatch) => {
    // dispatch(
    //   dealerDataActions.showNotification(Notifications.dealerStart)
    // );

    const apiConfig = {
      url: apiUrl.dealers.url,
      method: apiUrl.dealers.method,
      body: data,
      errorMsg: apiErrorMsg.dealer,
    };

    try {
      const dealerData = await apiCall(apiConfig);
      dispatch(dealerDataActions.setDealerData(dealerData.responseData));
    } catch (error) {}
  };
};
