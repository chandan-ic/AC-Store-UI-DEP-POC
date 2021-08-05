import React from "react";
import { Button } from "components/Common/Controls";
import { OrderItems, OrderBilling } from ".";
import { useTranslation } from "next-i18next";
import { bookingActions } from "components/Booking/store/booking-slice";
import { Payment } from "components/Common/Component";

import { useDispatch } from "react-redux";


export const OrderReview = ({ navigation }) => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const dispatch = useDispatch();
  const { previous } = navigation;

  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <div className="flex flex-grow ">
        <div className="w-full md:w-3/4">
          <h2 className="font-bold py-3 border-b-2">
            {t("booking:labels.orderReview")}
          </h2>

          <OrderItems />
        </div>
        <div className=" w-full md:w-1/4 hidden md:block border-l-2">
          <OrderBilling />
        </div>
      </div>

      <div
        className="flex flex-wrap justify-between sm:items-end  sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-10
  space-x-10"
      >
        <Button handleClick={() => {
          dispatch(bookingActions.setCurrentstep(1));
          previous();
        }} theme="yellow-outlined">
          {t("booking:buttonTxt.back")}
        </Button>
          <Payment onClick={()=>{}} amount={5000} user={user}>
          {t("booking:buttonTxt.makePayment")}
          </Payment>
      </div>
    </div>
  );
};
