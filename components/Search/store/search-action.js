import { searchActions } from "./search-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";

export const searchRequest = (data) => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.search.url,
      method: apiUrl.search.method,
      body: data,
    };

    try {
      const response = await apiCall(apiConfig);
      if (response !== null) {
        dispatch(
          searchActions.setModelResponseData(response?.responseData?.data?.data)
        );
        dispatch(
          searchActions.setTotalCount(response?.responseData?.data?.totalCount)
        );
        dispatch(searchActions.setLoading(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchMasterDataRequest = () => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.searchMasterData.url,
      method: apiUrl.searchMasterData.method,
    };

    try {
      const response = await apiCall(apiConfig);
      if (response !== null) {
        dispatch(
          searchActions.setSearchMasterData(response?.responseData?.data)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};