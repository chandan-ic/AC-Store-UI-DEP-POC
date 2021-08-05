import * as actionTypes from './actionTypes';


// export const setUserName = (userName) => {
//     return {
//         type: actionTypes.SET_USER_NAME,
//         userName: userName
//     };
// };
// export const setUserLogOut = () => {
//     return {
//         type: actionTypes.SET_USER_LOGOUT
//     };
// };
export const setUserEmail = (email) => {
    return {
        type: actionTypes.SET_USER_EMAIL,
        email: email
    };
};
export const setUserMobile = (customerPhone) => {
    return {
        type: actionTypes.SET_USER_PHONE,
        customerPhone: customerPhone
    };
};

export const setOnRoadPrice = (onRoadprice) => {
    return {
        type: actionTypes.SET_ON_ROAD_PRICE,
        onRoadprice: onRoadprice
    };
};
export const setUserLoggedIn = (loggedIn) => {
    return {
        type: actionTypes.SET_USER_LOGGED_IN,
        loggedIn: loggedIn
    };
};

export const setSelectedBike = (selectedBike) => {
    return {
        type: actionTypes.SET_SELECTED_BIKE,
        selectedBike: selectedBike
    };
};

export const setSelectedFunction = (selectedFunc) => {
    return {
        type: actionTypes.SET_SELECTED_FUNCTION,
        selectedFunc: selectedFunc
    };
};

export const setCloseRMenu = (menuOpen) => {
    return {
        type: actionTypes.CLOSE_RMENU,
        menuOpen: menuOpen
    };
};


export const setSelectedOnRoadBike = (selectedOnRoadBike) => {
    return {
        type: actionTypes.SET_SELECTED_ON_ROAD_BIKE,
        selectedOnRoadBike: selectedOnRoadBike
    };
};

export const setSelectedOnRoadBikeImg = (selectedOnRoadBikeImg) => {
    return {
        type: actionTypes.SET_SELECTED_ON_ROAD_BIKE_IMG,
        selectedOnRoadBikeImg: selectedOnRoadBikeImg
    };
};

export const setAdmin = (admin) => {
    return {
        type: actionTypes.SET_USER_ADMIN,
        admin: admin
    };
};
export const setAdminActiveLink = (adminLink) => {
    return {
        type: actionTypes.SET_ACTIVE_ADMIN_LINK,
        adminLink: adminLink
    };
};
export const setAdminActiveList = (adminList) => {
    return {
        type: actionTypes.SET_ACTIVE_ADMIN_LIST,
        adminList: adminList
    };
};

export const setselectedVariantBike = (selectedModelBike) => {
    return {
        type: actionTypes.SET_SELECTED_VARIANTBIKE,
        selectedModelBike:selectedModelBike
    }
}

export const setIsOpen = (isOpen) => {
    return {
        type: actionTypes.SET_ADMIN_SHOW,
        isOpen: isOpen
    };
};