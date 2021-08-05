import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    masterData: []
};

const setMasterData = (state, action) => {
    return updateObject(state, { masterData: action.masterData });
};



const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MASTER_DATA: return setMasterData(state, action);
        default: return state;
    }
};

export default Reducer;
