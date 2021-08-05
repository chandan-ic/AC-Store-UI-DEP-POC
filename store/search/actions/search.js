import * as actionTypes from './actionTypes';

export const setSearchMasterData = (searchMasterData) => {
    return {
        type: actionTypes.SET_SEARCH_MASTER_DATA,
        searchMasterData: searchMasterData
    }
}


export const setLoading = (loading) => {
    return {
        type: actionTypes.SET_LOADING,
        loading: loading
    }
}

export const setSearchToInitial = () => {
    return {
        type: actionTypes.SET_SEARCH_TO_INITIAL,
    }
}

export const setClearAll = (clearAll) => {
    return {
        type: actionTypes.SET_CLEAR_ALL,
        clearAll:clearAll
    }
}


export const setSelectedBrand = (brand) => {
    return {
        type: actionTypes.SET_SELECTED_BRAND,
        brand: brand
    }
}

export const removeSelectedBrand = (brand) => {
    return {
        type: actionTypes.REMOVE_SELECTED_BRAND,
        brand: brand
    }
}

export const setSeletedCategoryType = (categoryType) => {
    return {
        type: actionTypes.SET_SELECTED_CATEGORY_TYPE,
        categoryType: categoryType
    }
}
export const setActiveFilter = (active) => {
    return {
        type: actionTypes.SET_ACTIVE_FILTER,
        active: active
    }
}

export const setSeletedBikeColor = (bikeColor) => {
    return {
        type: actionTypes.SET_SELECTED_BIKE_COLOR,
        bikeColor: bikeColor
    }
}
export const setSelectedSpecialFeature = (feature) => {
    return {
        type: actionTypes.SET_SELECTED_SPECIAL_FEATURE,
        feature: feature
    }
}

export const removeSelectedSpecialFeature = (feature) => {
    return {
        type: actionTypes.REMOVE_SELECTED_SPECIAL_FEATURE,
        feature: feature
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
        minEngineCC: minEngineCC
    }
}
export const setSeletedMaxEngineCC = (maxEngineCC) => {
    return {
        type: actionTypes.SET_SELECTED_MAXENGINE_CC,
        maxEngineCC: maxEngineCC
    }
}

export const setModelResponseData = (modelResData) => {
    return {
        type: actionTypes.SET_MODEL_RESPONSE_DATA,
        modelResData: modelResData
    }
}

export const setSelectedSort = (sortBy) => {
    return {
        type: actionTypes.SET_SELECTED_SORT_BY,
        sortBy: sortBy
    }
}
