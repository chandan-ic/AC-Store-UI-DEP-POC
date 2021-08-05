import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';
import { useSelector } from 'react-redux'



const initialState = {
    searchMasterData: [],
    brand: [],
    categoryType: null,
    feature: [],
    bikeColor: [],
    maxPrice: null,
    minPrice: null,
    minEngineCC: null,
    maxEngineCC: null,
    active: "1",
    modelResData: [],
    sortBy: null,
    loading:false,
    clearAll:false
};

    


const removeFromObject = (obj, item) => {
    const index = obj.indexOf(item);
    if (index > -1) {
        obj.splice(index, 1);
    }

    return obj
}

const addtoObject = (cTs, test) => {
    cTs.push(test);
    return cTs;
}


const setSearchMasterData = (state, action) => {
    return updateObject(state, { searchMasterData: action.searchMasterData });
};

const setSearchToInitial = (state, action) => {
    return updateObject(state, {
        brand: [],
        categoryType: null,
        feature: [],
        bikeColor: [],
        active: "1",
    });
};

const setSeletedBikeColor = (state, action) => {
    return updateObject(state, [{ bikeColor: action.bikeColor }]);
};

const setSelectedBrand = (state, action) => {
    return updateObject(state,
        { brand: addtoObject(state.brand, action.brand) });
};

const removeSelectedBrand = (state, action) => {
    return updateObject(state, removeFromObject(state.brand, action.brand));
};

const setActiveFilter = (state, action) => {
    return updateObject(state, { active: action.active })
}

const setSeletedCategoryType = (state, action) => {
    return updateObject(state, { categoryType: action.categoryType });
};


const setSelectedSpecialFeature = (state, action) => {
    return updateObject(state,
        { feature: addtoObject(state.feature, action.feature) });
};

const removeSelectedSpecialFeature = (state, action) => {
    return updateObject(state, removeFromObject(state.feature, action.feature));
};


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

const setModelResponseData = (state, action) => {
    return updateObject(state, { modelResData: action.modelResData })
}

const setSelectedSort = (state, action) => {
    return updateObject(state, { sortBy: action.sortBy })
}

const setLoading = (state, action) => {
    return updateObject(state, { loading: action.loading })
}

const setClearAll = (state, action) => {
    return updateObject(state, { clearAll: action.clearAll })
}

const Reducer = (state = initialState, action) => {
 

    switch (action.type) {
        case actionTypes.SET_CLEAR_ALL: return setClearAll(state, action);
        case actionTypes.SET_SEARCH_MASTER_DATA: return setSearchMasterData(state, action);
        case actionTypes.SET_SEARCH_TO_INITIAL: return setSearchToInitial(state, action);
        case actionTypes.SET_SELECTED_BRAND: return setSelectedBrand(state, action);
        case actionTypes.REMOVE_SELECTED_BRAND: return removeSelectedBrand(state, action);
        case actionTypes.SET_ACTIVE_FILTER: return setActiveFilter(state, action)
        case actionTypes.SET_SELECTED_BIKE_COLOR: return setSeletedBikeColor(state, action);
        case actionTypes.SET_SELECTED_CATEGORY_TYPE: return setSeletedCategoryType(state, action);
        case actionTypes.SET_SELECTED_MINPRICE: return setSeletedMinPrice(state, action);
        case actionTypes.SET_SELECTED_MAXPRICE: return setSeletedMaxPrice(state, action);
        case actionTypes.SET_SELECTED_MINENGINE_CC: return setSeletedMinEngineCC(state, action);
        case actionTypes.SET_SELECTED_MAXENGINE_CC: return setSeletedMaxEngineCC(state, action);
        case actionTypes.SET_SELECTED_SPECIAL_FEATURE: return setSelectedSpecialFeature(state, action);
        case actionTypes.REMOVE_SELECTED_SPECIAL_FEATURE: return removeSelectedSpecialFeature(state, action);
        case actionTypes.SET_MODEL_RESPONSE_DATA: return setModelResponseData(state, action);
        case actionTypes.SET_SELECTED_SORT_BY: return setSelectedSort(state, action);
        case actionTypes.SET_LOADING: return setLoading(state, action);

        default: return state;
    }
};

export default Reducer;
