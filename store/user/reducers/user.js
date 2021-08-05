import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    email: null,
    customerPhone: null,
    onRoadprice: null,
    loggedIn: false,
    selectedBike: "",
    selectedFunc: "",
    menuOpen: false,
    selectedOnRoadBike: null,
    selectedOnRoadBikeImg: null,
    admin: false,
    adminList: "reg",
    adminLink: "reg",
    selectedModelBike: null,
    isOpen: false
};

const setUserLoggedIn = (state, action) => {
    return updateObject(state, { loggedIn: action.loggedIn })
};

const setAdmin = (state, action) => {
    return updateObject(state, { admin: action.admin })
};
const setSelectedBike = (state, action) => {
    return updateObject(state, { selectedBike: action.selectedBike });
};

const setSelectedFunction = (state, action) => {
    return updateObject(state, { selectedFunc: action.selectedFunc });
};

const setOnRoadPrice = (state, action) => {
    return updateObject(state, { onRoadprice: action.onRoadprice });
}
const setselectedVariantBike = (state, action) => {
    return updateObject(state, { selectedModelBike: action.selectedModelBike });
};
const setUserEmail = (state, action) => {
    return updateObject(state, { email: action.email });
};
const setAdminActiveList = (state, action) => {
    return updateObject(state, { adminList: action.adminList });
};
const setAdminActiveLink = (state, action) => {
    return updateObject(state, { adminLink: action.adminLink });
};

const setUserMobile = (state, action) => {
    return updateObject(state, { customerPhone: action.customerPhone });
};
const closeRMenu = (state, action) => {
    return updateObject(state, { menuOpen: action.menuOpen })
};


const setSelectedOnRoadBike = (state, action) => {
    return updateObject(state, { selectedOnRoadBike: action.selectedOnRoadBike })
};
const setIsOpen = (state, action) => {
    return updateObject(state, { isOpen: action.isOpen })
};

const setSelectedOnRoadBikeImg = (state, action) => {
    return updateObject(state, { selectedOnRoadBikeImg: action.selectedOnRoadBikeImg })
};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_EMAIL: return setUserEmail(state, action);
        case actionTypes.SET_USER_PHONE: return setUserMobile(state, action);
        case actionTypes.SET_ON_ROAD_PRICE: return setOnRoadPrice(state, action);
        case actionTypes.SET_USER_LOGGED_IN: return setUserLoggedIn(state, action);
        case actionTypes.SET_SELECTED_BIKE: return setSelectedBike(state, action);
        case actionTypes.SET_SELECTED_FUNCTION: return setSelectedFunction(state, action);
        case actionTypes.SET_SELECTED_ON_ROAD_BIKE: return setSelectedOnRoadBike(state, action);
        case actionTypes.SET_SELECTED_ON_ROAD_BIKE_IMG: return setSelectedOnRoadBikeImg(state, action);
        case actionTypes.SET_USER_ADMIN: return setAdmin(state, action);
        case actionTypes.SET_ADMIN_SHOW: return setIsOpen(state, action);
        case actionTypes.SET_ACTIVE_ADMIN_LIST: return setAdminActiveList(state, action);
        case actionTypes.SET_ACTIVE_ADMIN_LINK: return setAdminActiveLink(state, action);
        case actionTypes.CLOSE_RMENU: return closeRMenu(state, action);

        case actionTypes.SET_SELECTED_VARIANTBIKE: return setselectedVariantBike(state, action);
        default: return state;
    }
};

export default Reducer;
