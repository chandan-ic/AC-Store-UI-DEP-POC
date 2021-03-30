import * as actionTypes from './actionTypes';

export const setSearchMasterData = (searchMasterData) => { 
    return {
        type: actionTypes.SET_SEARCH_MASTER_DATA,
        searchMasterData:searchMasterData
    }
}


export const setSelectedBrand = (brandCode) => {
    return {
        type: actionTypes.SET_SELECTED_BRAND,
        brand:brand
    }
}

export const setSeletedCategoryType = (categoryType) => {
    return {
        type: actionTypes.SET_SELECTED_CATEGORY_TYPE,
        categoryType: categoryType
    }
}

export const setSeletedBikeColor = (bikeColor) => {
    return {
        type: actionTypes.SET_SELECTED_BIKE_COLOR,
        bikeColor: bikeColor
    }
}
export const setSeletedSpecialFeature = (feature) => {
    return {
        type: actionTypes.SET_SELECTED_SPECIAL_FEATURE,
        feature:feature
    }
}
export const setSeletedMaxPrice = (maxPrice) => {
    return {
        type: actionTypes.SET_SELECTED_MAXPRICE,
        maxPrice: maxPrice
    }
}

export const setSeletedMinPrice = (minPrice) => {
    return {
        type: actionTypes.SET_SELECTED_MINPRICE,
        minPrice: minPrice
    }
}

export const setSeletedMinEngineCC = (minEngineCC) => {
    return {
        type: actionTypes.SET_SELECTED_MINENGINE_CC,
       minEngineCC:minEngineCC
    }
}
export const setSeletedMaxEngineCC = (maxEngineCC) => {
    return {
        type: actionTypes.SET_SELECTED_MAXENGINE_CC,
       maxEngineCC:maxEngineCC
    }
}