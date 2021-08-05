import { myRequestActions } from "./myRequest-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";

export const getMyRequests = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.MyRequest.url,
      method: apiUrl.MyRequest.method,
      body: data,
      customHeader: data.customHeader,
    };

    try {
      const response = await apiCall(apiConfig);
      if (response != null) {
        dispatch(
          myRequestActions.setRequestData(response.data.responseData.data)
        );
      }
    } catch (error) {}
  };
};
