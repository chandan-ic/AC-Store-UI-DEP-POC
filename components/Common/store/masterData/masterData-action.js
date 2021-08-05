import { masterDataActions } from "./masterData-slice";
import { apiCall } from "utils/helper/apiHelper";
import { apiUrl } from "utils/constant/api/apiRoutes";
import { masterData } from "booking_masterData";

export const setMasterDataRequest = () => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.master.url,
      method: apiUrl.master.method,
    };
    try {
      const MasterData = await apiCall(apiConfig);

      dispatch(masterDataActions.setMasterData(MasterData.responseData));
    } catch (error) {}
  };
};

export const getStateCityRequest = () => {
  return async (dispatch) => {
    const apiConfig = {
      url: apiUrl.stateCity.url,
      method: apiUrl.stateCity.method,
    };

    try {
      const stateCityData = await apiCall(apiConfig);
      dispatch(
        masterDataActions.setStateCityData(stateCityData.responseData.data)
      );
    } catch (error) {}
  };
};
