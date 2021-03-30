import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    currentStep: "1",
    pinCode: null,
    dealerCode: null,
    selectedDealerCode: null,
    currentActive: "black",
    productVariant: null
};
const setBookingCurrentStep = (state, action) => {
    return updateObject(state, { currentStep: action.currentStep })
}

const setCurrentActive = (state, action) => {
    return updateObject(state, { currentActive: action.currentActive })
}

const setSelectedProductVariant = (state, action) => {
    return updateObject(state, { productVariant: action.productVariant })
}

const setBookingPinCode = (state, action) => {
    return updateObject(state, { pinCode: action.pinCode });
};
const setBookingDealerCode = (state, action) => {
    return updateObject(state, { dealerCode: action.dealerCode });
};
const setBookingSelectedDealerCode = (state, action) => {
    return updateObject(state, { selectedDealerCode: action.selectedDealerCode });
};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BOOKING_CURRENT_STEP: return setBookingCurrentStep(state, action);
        case actionTypes.SET_BOOKING_SELECTED_VARIANT: return setSelectedProductVariant(state, action);
        case actionTypes.SET_BOOKING_PINCODE: return setBookingPinCode(state, action);
        case actionTypes.SET_BOOKING_DEALER_CODE: return setBookingDealerCode(state, action);
        case actionTypes.SET_CURRENT_ACTIVE: return setCurrentActive(state, action);
        case actionTypes.SET_BOOKING_SELECTED_DEALER_CODE: return setBookingSelectedDealerCode(state, action);
        default: return state;
    }
};

export default Reducer;