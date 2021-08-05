import {  combineReducers } from 'redux';

import testRideReducer from './testRide/reducers/testRide';
import masterReducer from './master/reducers/master';
import bookingReducer from './booking/reducers/booking';
import searchReducer from './search/reducers/search';
import userReducer from './user/reducers/user'
import financeReducer from './financeCheck/reducers/financeEligibility'
import otpReducer from './otp/reducers/otp'
import testRideReducer1 from '../components/TestRide/store/testRide-slice';

//COMBINING ALL REDUCERS
export const combinedReducer = combineReducers({
  testRide: testRideReducer,
  testRide1:testRideReducer1,
  master: masterReducer,
  booking: bookingReducer,
  search: searchReducer,
  user: userReducer,
  finance: financeReducer,
  otp: otpReducer
});