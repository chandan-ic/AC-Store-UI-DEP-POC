import { createSlice } from '@reduxjs/toolkit';
import { BikeState } from './bikeState';

export const initialState = {
    ...BikeState
}

const bikeSlice = createSlice({
    name: "bike", initialState,
    reducers: {
        setOnRoadPrice: (state, action) => {
            state.onRoadprice = action.payload;
        },
        setOnroadShow: (state, action) => {
            state.onroadpriceShow = action.payload;
        },
        setselectedVariantBike: (state, action) => {
            state.selectedModelBike = action.payload;
        },
        setSelectedBike: (state, action) => {
            state.selectedBike = action.payload;
        },
        setSelectedProductBikeBrand: (state, action) => {
            state.selectedProductBikeBrand = action.payload;
        },
        setSelectedProductBrand: (state, action) => {
            state.selectedProductBrand = action.payload;
        },
        setSelectedBike: (state, action) => {
            state.selectedBike = action.payload;
        },
        setIsProductPage: (state, action) => {
            state.isProductPage = action.payload;
        },
        setSelectedFunction: (state, action) => {
            state.selectedFunc = action.payload;
        },
        setSelectedOnRoadBike: (state, action) => {
            state.selectedOnRoadBike = action.payload;
        },
        setBtnType: (state, action) => {
            state.buttonType = action.payload;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})
export const bikeActions = bikeSlice.actions;
export default bikeSlice;

