import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';


const initialState = {
    seconds:0,
    second: 0
};

const setOtpTimer = (state, action) => {
    return updateObject(state, { seconds: action.seconds });
};
const setOtpRegTimer = (state, action) => {
    return updateObject(state, { second: action.second });
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_OTP_TIMER: return setOtpTimer(state, action);
        case actionTypes.SET_REG_TIMER: return setOtpRegTimer(state, action);
        default: return state;
    }
};

export default Reducer;
