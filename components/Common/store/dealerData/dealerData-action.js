import { dealerDataActions } from "./dealerData-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";

export const sendDealerDataRequest = (data) => {
  return async (dispatch) => {
    dispatch(dealerDataActions.setLoaded(false));

    const apiConfig = {
      url: apiUrl.dealers.url,
      method: apiUrl.dealers.method,
      body: data,
    };

    try {
      const dealerData = await apiCall(apiConfig);
      if(dealerData !== null){
        dispatch(dealerDataActions.setDealerData(dealerData.responseData));

      }
    } catch (error) {}
  };
};
