import React, { useState } from "react";
import { bookingActions } from "../store/booking-slice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

const ExtendWarranty = () => {
  const dispatch = useDispatch();
  const EW = useSelector((state) => state.booking.EW);
  const [isChecked, setIsChecked] = useState(false);
  const [EWValue, setEWValue] = useState({
    serviceCode: "EW",
    required: false,
    referenceType: "",
    referenceCode: "",
  });
  const { t } = useTranslation(["booking", "error", "common"]);
  const setEWVl = () => {
    setIsChecked(!isChecked);
    setEWValue({ ...EWValue, required: !isChecked });
    dispatch(bookingActions.setEW({ ...EW, required: !isChecked }));
  };

  return (
    <div className="flex">
      <div className="w-1/4 ">
        <h4 className=" ml-4 text-xl">{t("booking:labels.bk-ex-warranty")}</h4>
      </div>
      <div className="w-3/4 ">
        <input
          className="mt-1 w-4 h-4"
          type="checkbox"
          checked={EW.required}
          onChange={() => setEWVl()}
        />
        <span className="uppercase text-sm text-gray-700 ml-2">
          {t("booking:labels.bk-include")}
        </span>{" "}
      </div>
    </div>
  );
};
export default ExtendWarranty;
