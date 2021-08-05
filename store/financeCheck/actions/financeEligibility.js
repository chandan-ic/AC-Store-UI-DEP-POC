import * as actionTypes from './actionTypes';

export const setFinanceMasterData = (financeMasterData) => {
    return {
        type: actionTypes.SET_FINANCE_MASTER_DATA,
        financeMasterData:financeMasterData
    }
}



export const setFinanceCustomerPhone = (customerPhone) => {
    return {
        type: actionTypes.SET_FINANCE_CUSTOMER_PHONE,
        customerPhone: customerPhone
    }
}

export const setFinanceRequestNumber = (requestNo) => {
    return {
        type: actionTypes.SET_FINANCE_REQUEST_NUMBER,
        requestNo:requestNo
    }
}
export const setOnroadShow = (onroadpriceShow) => {
    return {
        type: actionTypes.SET_ON_ROAD_SHOW,
        onroadpriceShow: onroadpriceShow
    };
};