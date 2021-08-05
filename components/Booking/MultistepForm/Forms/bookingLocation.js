import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookingActions } from "../../store/booking-slice";
import LocationUI from '../../Booking-UI/selectLocationUI';
import { sendbookingLocation } from '../../store/booking-actions';

const Location = ({ navigation }) => {
    const { selectedDealerCode, preOrderNo, bookingBike, searchDealersBy, productVariant, currentActive, dealerCode } = useSelector((state) => state.booking)
    const [searchBy, setSearchBy] = useState("");

    const { previous, next } = navigation;

    const dispatch = useDispatch();
    useEffect(() => {
        setSearchBy(searchDealersBy);
    }, [searchDealersBy])

    useEffect(() => {
        dispatch(bookingActions.setBookingCurrentStep("3"))

    }, [searchDealersBy])

    const handleSelectDealer = (selectedOptionValue) => {
        dispatch(bookingActions.setSearchDealersBy(selectedOptionValue));
    }

    // On clicking next send dealer location to api
    const sendBikeLoc = () => {
        const data = JSON.stringify(
            {
                "basedOn": "LOC",
                "modelCode": bookingBike,
                "variantCode": productVariant,
                "colorCode": currentActive,
                "locationCode": dealerCode,
                "financeType": "",
                "financierName": null,
                "financierAddress": null,
                "financierCode": null,
                "exchangeRequired": false,
                "phone": "9036940842",
                "preOrderNo": preOrderNo,
                "additionalServices": []
            })
        dispatch(sendbookingLocation(data));

    }

    return (
        <LocationUI
            searchDealersBy={searchDealersBy}
            searchBy={searchBy}
            selectedDealerCode={selectedDealerCode}
            handleChange={(val) => handleSelectDealer(val)}
            handlePrevious={previous}
            handleNext={() => (next(), sendBikeLoc())}
        />
    )

}


export default Location;
