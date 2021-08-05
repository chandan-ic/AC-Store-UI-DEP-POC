import React, { useState } from "react";
import { bookingActions } from "../store/booking-slice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

const Exchange = () => {
  s;
  const dispatch = useDispatch();
  const exchangeRequired = useSelector(
    (state) => state.booking.exchangeRequired
  );
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation(["booking", "error", "common"]);

  return (
    <div className=" flex w-full">
      <div className="w-1/2">
        <h4 className="font-semibold">{t("booking:labels.bk-exchange")}</h4>
      </div>
      <div className="w-1/2 inline-flex">
        <input
          className="mt-1 w-4 h-4"
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked),
              dispatch(bookingActions.setExchangeRequired(!isChecked));
          }}
        />
        <h4 className=" text-sm text-gray-700 ml-2 mt-1">
          {t("booking:labels.bk-include")}
        </h4>
      </div>
    </div>
  );
};
export default Exchange;
