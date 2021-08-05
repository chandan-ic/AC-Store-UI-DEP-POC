import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    financeMasterData: [],

    requestNo: null,
    customerPhone: null,
    onroadpriceShow: false,
};

const setFinanceMasterData = (state, action) => {
    return updateObject(state, { financeMasterData: action.financeMasterData });
};

const setOnroadShow = (state, action) => {
    return updateObject(state, { onroadpriceShow: action.onroadpriceShow })
};


const setFinanceCustomerPhone = (state, action) => {
    return updateObject(state, { customerPhone: action.customerPhone });
};

const setFinanceRequestNumber = (state, action) => {
    return updateObject(state, { requestNo: action.requestNo });
};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FINANCE_MASTER_DATA: return setFinanceMasterData(state, action);
        case actionTypes.SET_ON_ROAD_SHOW: return setOnroadShow(state, action);
        case actionTypes.SET_FINANCE_CUSTOMER_PHONE: return setFinanceCustomerPhone(state, action);
        case actionTypes.SET_FINANCE_REQUEST_NUMBER: return setFinanceRequestNumber(state, action);
        default: return state;
    }
};

export default Reducer;
