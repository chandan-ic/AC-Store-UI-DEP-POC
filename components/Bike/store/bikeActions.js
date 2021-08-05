import { bikeActions } from './bikeSlice';
import { apiCall } from '../../../utils/helper/apiHelper'
import { apiUrl } from '../../../utils/constant/api/apiRoutes';
import { apiErrorMsg } from '../../../utils/constant/api/apiErrorMessage';
import { Notifications } from '../../../utils/constant/notificationMessages';

export const getOnRoadPrice = (data) => {
    return async (dispatch) => {
        const apiConfig = {
            url: apiUrl.onRoadPrice.url,
            method: apiUrl.onRoadPrice.method,
            body: data,
            errorMsg: apiErrorMsg.onRoadPrice
        }
        try {
            const DefaultOnRoadPrice = await apiCall(apiConfig);
            dispatch(bikeActions.setOnRoadPrice(DefaultOnRoadPrice.responseData));
            dispatch(bikeActions.showNotification(Notifications.onRoadPriceSuccess));
            dispatch(bikeActions.onroadpriceShow(true))
        } catch (error) {
            dispatch(bikeActions.showNotification(Notifications.onRoadPriceFailed))
        }
    }
}
