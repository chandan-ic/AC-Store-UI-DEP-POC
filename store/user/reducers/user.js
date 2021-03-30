import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    userName: "",
    email: null,
    mobile: null,
    loggedIn: false,
};

const setUserName = (state, action) => {
    return updateObject(state, { userName: action.userName ,loggedIn:true
});
};
const setUserLogOut = (state, action) => {
    return updateObject(state, { userName:{}  ,loggedIn:false});
};
// const setUserMobile = (state, action) => {
//     return updateObject(state, { mobile: action.mobile });
// };



const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_NAME: return setUserName(state, action);
        case actionTypes.SET_USER_LOGOUT: return setUserLogOut(state, action);
        // case actionTypes.SET_USER_MOBILE: return setUserMobile(state, action);

        default: return state;
    }
};

export default Reducer;
