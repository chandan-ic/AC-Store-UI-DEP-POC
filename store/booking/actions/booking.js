import * as actionTypes from './actionTypes';

export const setBookingCurrentStep = (currentStep) => {
    return {
        type: actionTypes.SET_BOOKING_CURRENT_STEP,
        currentStep: currentStep
    }
}



export const setBookingPinCode = (pinCode) => {
    return {
        type: actionTypes.SET_BOOKING_PINCODE,
        pinCode: pinCode
    };
};

export const setBookingDealerCode = (dealerCode) => {
    return {
        type: actionTypes.SET_BOOKING_DEALER_CODE,
        dealerCode: dealerCode
    };
};

export const setBookingSelectedDealerCode = (selectedDealerCode) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_DEALER_CODE,
        selectedDealerCode: selectedDealerCode
    };
};

export const setCurrentActive = (currentActive) => {
    return {
        type: actionTypes.SET_CURRENT_ACTIVE,
        currentActive: currentActive
    }
}


export const setSelectedProduct = (product) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_PRODUCT,
        product: product
    }
}
export const setSelectedProductVariant = (productVariant) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_VARIANT,
        productVariant: productVariant
    }
}
export const setSelectedProductColor = (productColor) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_COLOR,
        productColor: productColor
    }
}