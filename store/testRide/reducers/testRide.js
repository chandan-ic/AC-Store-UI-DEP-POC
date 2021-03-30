import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    currentPage: "bikeSelect",
    bikeBrand: "",
    bikeVariant: "",
    testRideType: null,
    testRideLocation: null,
    pinCode: null,
    dealerCode: null,
    dealerLoading: false,
    testRideDate: null,
    testRideTime: null,
    testRideSelectedDate: null,
    testRideAddress: null,
    customerName: null,
    customerEmail: null,
    customerPhone: null,
    drivingLicenceNo: null,
    customerAlternatePhone: null,
    customerPincode: null,
    preSelected: false,
    requestNo: ""
};

const setCurrentPage = (state, action) => {
    return updateObject(state, { currentPage: action.currentPage });
};
const setBikeBrand = (state, action) => {
    return updateObject(state, { bikeBrand: action.bikeBrand });
};
const setBikeVariant = (state, action) => {
    return updateObject(state, { bikeVariant: action.bikeVariant });
};
const setTestRideType = (state, action) => {
    return updateObject(state, { testRideType: action.testRideType })
}
const setPinCode = (state, action) => {
    return updateObject(state, { pinCode: action.pinCode });
};
const setTestRideLocation = (state, action) => {
    return updateObject(state, { testRideLocation: action.testRideLocation });
};

const setTestRideAddress = (state, action) => {
    return updateObject(state, { testRideAddress: action.testRideAddress })
}
const setDealerCode = (state, action) => {
    return updateObject(state, { dealerCode: action.dealerCode });
};

const setTestRideDate = (state, action) => {
    return updateObject(state, { testRideDate: action.testRideDate })
}

const setTestRideTime = (state, action) => {
    return updateObject(state, { testRideTime: action.testRideTime })
}

const setTestRideCustomerName = (state, action) => {
    return updateObject(state, { customerName: action.customerName })
}

const setTestRideCustomerPhone = (state, action) => {
    return updateObject(state, { customerPhone: action.customerPhone })
}

const setTestRideCustomerEmail = (state, action) => {
    return updateObject(state, { customerEmail: action.customerEmail })
}

const setTestRideCustomerDlnumber = (state, action) => {
    return updateObject(state, { drivingLicenceNo: action.drivingLicenceNo })
}
const setTestRideCustomerAltPhone = (state, action) => {
    return updateObject(state, { customerAlternatePhone: action.customerAlternatePhone })
}

const setTestRideCustomerPincode = (state, action) => {
    return updateObject(state, { customerPincode: action.customerPincode })
}

const setTestRideSelectedDate = (state, action) => {
    return updateObject(state, { testRideSelectedDate: action.testRideSelectedDate })
}


const setPreselected = (state, action) => {
    return updateObject(state, { preSelected: action.preSelected })
}

const setRequestNumber = (state, action) => {
    return updateObject(state, { requestNo: action.requestNo })
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_PAGE: return setCurrentPage(state, action);
        case actionTypes.SET_BIKE_BRAND: return setBikeBrand(state, action);
        case actionTypes.SET_BIKE_VARIANT: return setBikeVariant(state, action);
        case actionTypes.SET_TEST_RIDE_TYPE: return setTestRideType(state, action);
        case actionTypes.SET_PINCODE: return setPinCode(state, action);
        case actionTypes.SET_TEST_RIDE_LOCATION: return setTestRideLocation(state, action);
        case actionTypes.SET_DEALER_CODE: return setDealerCode(state, action);
        case actionTypes.SET_TEST_RIDE_ADDRESS: return setTestRideAddress(state, action);
        case actionTypes.SET_TEST_RIDE_DATE: return setTestRideDate(state, action);
        case actionTypes.SET_TEST_RIDE_DATE: return setTestRideSelectedDate(state, action);
        case actionTypes.SET_TEST_RIDE_TIME: return setTestRideTime(state, action);
        case actionTypes.SET_TEST_RIDE_CUSTOMER_NAME: return setTestRideCustomerName(state, action);
        case actionTypes.SET_TEST_RIDE_CUSTOMER_PHONE: return setTestRideCustomerPhone(state, action);
        case actionTypes.SET_TEST_RIDE_CUSTOMER_EMAIL: return setTestRideCustomerEmail(state, action);
        case actionTypes.SET_TEST_RIDE_CUSTOMER_DL: return setTestRideCustomerDlnumber(state, action);
        case actionTypes.SET_TEST_RIDE_CUSTOMER_ALT_PHONE: return setTestRideCustomerAltPhone(state, action);
        case actionTypes.SET_TEST_RIDE_CUSTOMER_PINCODE: return setTestRideCustomerPincode(state, action);
        case actionTypes.SET_PRODUCT_PRESELECTED: return setPreselected(state, action);
        case actionTypes.SET_REQUEST_NUMBER: return setRequestNumber(state, action);
        default: return state;
    }
};

export default Reducer;