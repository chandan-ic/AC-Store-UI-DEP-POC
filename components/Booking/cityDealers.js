import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { getStates, getCity } from "utils/helper/storeHelper/masterDataHelper";
import CityDealersUI from './Booking-UI/dealerByCityUI';

const BookingCityDealers = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState([])
    const [ShowDealerResults, setShowDealerResults] = useState(false);
    const { bookingCity, bookingState } = useSelector((state) => state.booking);

    const states = getStates();

    useEffect(() => {
        setCity(getCity(bookingState));
    }, [bookingState])

    const onRideCityChanged = (selectedCity) => {
        dispatch(testRideActions.setBookingCity(selectedCity));
        setShowDealerResults(false);
    }

    const onRideStateChanged = (selectedState) => {
        dispatch(testRideActions.setBookingState(selectedState));
        dispatch(testRideActions.setBookingCity(''));
        setShowDealerResults(false);

    }
    return (
        <CityDealersUI
            states={states}
            city={city}
            changeState={(selectedState) => onRideStateChanged(selectedState)}
            changeCity={(selectedCity) => onRideCityChanged(selectedCity)}
            bookingCity={bookingCity}
            bookingState={bookingState}
            setShowDealer={() => setShowDealerResults(true)}
            ShowDealerResults={ShowDealerResults}
        />
    )

}


export default BookingCityDealers;