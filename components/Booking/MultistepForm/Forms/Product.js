import { Button } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
// import { useSelector } from 'react-redux';
import { bookingActions } from "components/Booking/store/booking-slice";
import { useDispatch } from "react-redux";
import { getBookingMaster } from "components/Booking/store/booking-actions";

import {
  ProductColor,
  ProductDetails,
  // ProductAccessory,
  ProductFeature,
  ProductSelected,
  ProductVariant,
} from ".";

export const Product = ({ navigation }) => {
  const { t } = useTranslation(["booking", "error", "common"]);
  // const { currentStep } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  useEffect(()=>{
    const data = JSON.stringify(
      {
        "productSlno": 1000,
        "locationSlno": 0,
        "citySlno": 0
      }
      )
    dispatch(getBookingMaster(data));
  },[])

  const { next } = navigation;

  return (
    <div className="container">
      <div className="flex flex-grow flex-wrap ">
        <div className="w-full md:w-1/2">
          <ProductDetails />
          <ProductColor />
          <ProductFeature />
        </div>
        <div className=" w-full md:w-1/2">
          <ProductVariant />
          {/* <ProductAccessory /> */}
        </div>
      </div>
      <div>
        <ProductSelected />
      </div>
      <div
        className="flex flex-wrap justify-end sm:items-end  sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-10
  space-x-10"
      >
        {/* <Button handleClick={() => {}} theme="yellow-outlined">
          {t("booking:buttonTxt.back")}
        </Button> */}

        <Button
          handleClick={() => {
            dispatch(bookingActions.setCurrentstep(1));
            next();
          }}
          disabled={false}
          theme="yellow-contained"
        >
          {t("booking:buttonTxt.next")}
        </Button>
      </div>
    </div>
  );
};
