import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';


const initialState = {
    searchMasterData: [],
    brand: [],
    categoryType: null,
    feature:[],
    bikeColor: null,
    maxPrice: null,
    minPrice: null,
    minEngineCC: null,
    maxEngineCC: null
};
const setSearchMasterData = (state, action) => {
    return updateObject(state, { searchMasterData: action.searchMasterData });
};

const setSeletedBikeColor = (state, action) => {
    return updateObject(state, { bikeColor: action.bikeColor });
};

const setSelectedBrand = (state, action) => {
    return updateObject(state, [{ brand: action.brand}]);
};

const setSeletedCategoryType = (state, action) => {
    return updateObject(state, { categoryType: action.categoryType });
};

const setSeletedSpecialFeature = (state, action) => {
    return updateObject(state, [{ feature: action.feature}])
}

const setSeletedMinPrice = (state, action) => {
    return updateObject(state, { minPrice: action.minPrice })
}


const setSeletedMaxPrice = (state, action) => {
    return updateObject(state, { maxPrice: action.maxPrice })
}


const setSeletedMinEngineCC = (state, action) => {
    return updateObject(state, { minEngineCC: action.minEngineCC })
}

const setSeletedMaxEngineCC = (state, action) => {
    return updateObject(state, { maxEngineCC: action.maxEngineCC })
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_MASTER_DATA: return setSearchMasterData(state, action);
        case actionTypes.SET_SELECTED_BRAND: return setSelectedBrand(state, action);
        case actionTypes.SET_SELECTED_BIKE_COLOR: return setSeletedBikeColor(state, action);
        case actionTypes.SET_SELECTED_CATEGORY_TYPE: return setSeletedCategoryType(state, action);
        case actionTypes.SET_SELECTED_MINPRICE: return setSeletedMinPrice(state, action);
        case actionTypes.SET_SELECTED_MAXPRICE: return setSeletedMaxPrice(state, action);
        case actionTypes.SET_SELECTED_MINENGINE_CC: return setSeletedMinEngineCC(state, action);
        case actionTypes.SET_SELECTED_MAXENGINE_CC: return setSeletedMaxEngineCC(state, action);
        case actionTypes.SET_SELECTED_SPECIAL_FEATURE: return setSeletedSpecialFeature(state, action);
        default: return state;
    }
};

export default Reducer;