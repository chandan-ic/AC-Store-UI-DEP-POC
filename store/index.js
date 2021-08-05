// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunkMiddleware from "redux-thunk";
// import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import testRideReducer from './testRide/reducers/testRide';
// import masterReducer from './master/reducers/master';
// import bookingReducer from './booking/reducers/booking';
// import searchReducer from './search/reducers/search';
// import userReducer from './user/reducers/user'
// import financeReducer from './financeCheck/reducers/financeEligibility'
// import otpReducer from './otp/reducers/otp'
// //COMBINING ALL REDUCERS
// const combinedReducer = combineReducers({
//   testRide: testRideReducer,
//   master: masterReducer,
//   booking: bookingReducer,
//   search: searchReducer,
//   user: userReducer,
//   finance: financeReducer,
//   otp: otpReducer
// });

// // BINDING MIDDLEWARE
// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// const makeStore = ({ isServer }) => {
//   if (isServer) {
//     //If it's on server side, create a store
//     return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
//   } else {
//     //If it's on client side, create a store which will persist
//     const { persistStore, persistReducer } = require("redux-persist");
//     const storage = require("redux-persist/lib/storage").default;

//     const persistConfig = {
//       key: "autcommCart",
//       whitelist: ["otp", "finance"], // only counter will be persisted, add other reducers if needed
//       storage, // if needed, use a safer storage
//     };

//     const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

//     const store = createStore(
//       persistedReducer,
//       bindMiddleware([thunkMiddleware])
//     ); // Creating the store again

//     store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

//     return store;
//   }
// };

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, { debug: true });

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

import { createWrapper, HYDRATE } from "next-redux-wrapper";

import testRideSlice from "components/TestRide/store/testRide-slice";
import masterDataSlice from "components/Common/store/masterData/masterData-slice";
import dealerDataSlice from "components/Common/store/dealerData/dealerData-slice";
import searchSlice from "components/Search/store/search-slice";
import bookingSlice from "../components/Booking/store/booking-slice";
import bikeSlice from "../components/Bike/store/bikeSlice";
import userSlice from "../components/Register/store/userSlice";
import suggestiveDataSlice from "components/Common/store/suggestiveData/suggestiveData-slice";
import profileDataSlice from "components/Profile/store/profileData-slice";
import loginSlice from "components/LoginUI/store/login-slice";
import errorSlice from "components/Common/store/error/error-slice";
import MyRequestSlice from "components/MyRequests/store/myRequest-slice";
import financeSlice from "components/FinanceEligibility/store/financeSlice";
import homeSlice from "components/Home/store/home-slice";

const store = configureStore({
  reducer: {
    testRide: testRideSlice.reducer,
    master: masterDataSlice.reducer,
    dealers: dealerDataSlice.reducer,
    search: searchSlice.reducer,
    booking: bookingSlice.reducer,
    user: userSlice.reducer,
    bike: bikeSlice.reducer,
    suggestive: suggestiveDataSlice.reducer,
    profile: profileDataSlice.reducer,
    login: loginSlice.reducer,
    myRequest: MyRequestSlice.reducer,
    finance: financeSlice.reducer,
    home: homeSlice.reducer,
    error: errorSlice.reducer
  },
});

export default store;
