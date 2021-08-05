import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from './store/booking-slice';
import BookingDealersUI from './Booking-UI/dealerByPincodeUI';


const BookingDealers = () => {
    const { pinCode } = useSelector((state) => state.booking);
    const [ShowDealerResults, setShowDealerResults] = useState(false);

    const dispatch = useDispatch();

    const disPin = (value) => {
        setShowDealerResults(false);
        dispatch(bookingActions.setBookingDealerCode(null));
        if (value === "") {
            dispatch(bookingActions.setBookingPinCode(null));
        } else dispatch(bookingActions.setBookingPinCode(value));
    };

    return (
        <BookingDealersUI pinCode={pinCode} ShowDealerResults={ShowDealerResults} handleChange={(val)=>disPin(val)} />
    );
};
export default BookingDealers;