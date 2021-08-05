import * as actionTypes from './actionTypes';

export const setOtpTimer = (seconds) => {

    return {
        type: actionTypes.SET_OTP_TIMER,
        seconds: seconds
    }
}
export const setOtpRegTimer = (second) => {

    return {
        type: actionTypes.SET_REG_TIMER,
        second: second
    }
}