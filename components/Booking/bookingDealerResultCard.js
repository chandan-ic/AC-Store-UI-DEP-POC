import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from "./store/booking-slice";
import { getDealerDataFromAPI } from "../../utils/apicalls";
import { useTranslation } from "next-i18next";
import DealerResultUI from "./Booking-UI/dealerResultUI";

const BookingDealerResult = ({ dealers }) => {
  const dispatch = useDispatch();

  const disDealerCode = (val) => {
    e.preventDefault();
    dispatch(bookingActions.setBookingDealerCode(val));
    if (dealers.length === 1) {
      dispatch(bookingActions.setBookingSelectedDealerCode(dealers));
    } else getDealer(val);
  };
  const getDealer = (selDeal) => {
    let selectedDealerCode = [];
    selectedDealerCode = dealers.filter(
      (dealer) => dealer.LocationCode === selDeal
    );
    dispatch(bookingActions.setBookingSelectedDealerCode(selectedDealerCode));
  };

  return <DealerResultUI handleChange={(val) => disDealerCode(val)} />;
};

export default BookingDealerResult;
