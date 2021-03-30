import * as actionTypes from './actionTypes';


export const setUserName = (userName) => {
    return {
        type: actionTypes.SET_USER_NAME,
        userName: userName
    };
};
export const setUserLogOut = () => {
    return {
        type: actionTypes.SET_USER_LOGOUT
    };
};
// export const setUserEmail = (  ) => {
//     return {
//         type: actionTypes.SET_USER_EMAIL
//     };
// };
// export const setUserMobile = (  ) => {
//     return {
//         type: actionTypes.SET_USER_MOBILE
//     };
// };

