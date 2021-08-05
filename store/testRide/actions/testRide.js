import * as actionTypes from './actionTypes';

export const setCurrentPage = (currentPage) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setBikeBrand = (bikeBrand) => {
    return {
        type: actionTypes.SET_BIKE_BRAND,
        bikeBrand: bikeBrand

    };
};
export const setBikeVariant = (bikeVariant) => {
    return {
        type: actionTypes.SET_BIKE_VARIANT,
        bikeVariant: bikeVariant
    };
};
export const setTestRideType = (testRideType) => {
    return {
        type: actionTypes.SET_TEST_RIDE_TYPE,
        testRideType: testRideType
    }
}

export const setTestRideLocation = (testRideLocation) => {
    return {
        type: actionTypes.SET_TEST_RIDE_LOCATION,
        testRideLocation: testRideLocation
    }
}

export const setPinCode = (pinCode) => {
    return {
        type: actionTypes.SET_PINCODE,
        pinCode: pinCode
    };
};

export const setDealerCode = (dealerCode) => {
    return {
        type: actionTypes.SET_DEALER_CODE,
        dealerCode: dealerCode
    };
};


export const setTestRideAddress = (testRideAddress) => {
    return {
        type: actionTypes.SET_TEST_RIDE_ADDRESS,
        testRideAddress: testRideAddress
    }
}
export const setTestRideDate = (testRideDate) => {
    return {
        type: actionTypes.SET_TEST_RIDE_DATE,
        testRideDate: testRideDate
    }
}
export const setTestRideSelectedDate = (testRideSelectedDate) => {
    return {
        type: actionTypes.SET_TEST_RIDE_SELECTED_DATE,
        testRideSelectedDate: testRideSelectedDate
    }
}
export const setTestRideTime = (testRideTime) => {
    return {
        type: actionTypes.SET_TEST_RIDE_TIME,
        testRideTime: testRideTime
    }
}

export const setTestRideCustomerName = (customerName) => {
    return {
        type: actionTypes.SET_TEST_RIDE_CUSTOMER_NAME,
        customerName: customerName
    }
}
export const setTestRideCustomerEmail = (customerEmail) => {
    return {
        type: actionTypes.SET_TEST_RIDE_CUSTOMER_EMAIL,
        customerEmail: customerEmail
    }
}

export const setTestRideCustomerPhone = (customerPhone) => {
    return {
        type: actionTypes.SET_TEST_RIDE_CUSTOMER_PHONE,
        customerPhone: customerPhone
    }
}
export const setTestRideCustomerDlnumber = (drivingLicenceNo) => {
    return {
        type: actionTypes.SET_TEST_RIDE_CUSTOMER_DL,
        drivingLicenceNo: drivingLicenceNo
    }
}

export const setTestRideCustomerAltPhone = (customerAlternatePhone) => {
    return {
        type: actionTypes.SET_TEST_RIDE_CUSTOMER_ALT_PHONE,
        customerAlternatePhone: customerAlternatePhone
    }
}

export const setTestRideCustomerPincode = (customerPincode) => {
    return {
        type: actionTypes.SET_TEST_RIDE_CUSTOMER_PINCODE,
        customerPincode: customerPincode
    }
}
export const setPreselected = (preSelected) => {
    return {
        type: actionTypes.SET_PRODUCT_PRESELECTED,
        preSelected: preSelected
    }
}

export const setRequestNumber = (requestNo) => {
    return {
        type: actionTypes.SET_REQUEST_NUMBER,
        requestNo:requestNo
    }
}


