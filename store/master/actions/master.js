import * as actionTypes from './actionTypes';

export const setMasterData = (masterData) => {
   
   /// const res = await fetch(`${server}/api/masterData`)

   
    return {
        type: actionTypes.SET_MASTER_DATA,
        masterData:masterData
    }
}