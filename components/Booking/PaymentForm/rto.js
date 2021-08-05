import React, { useState } from "react";
import { bookingActions } from "../store/booking-slice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

const RTO = () => {
  const dispatch = useDispatch();
  const RTO = useSelector((state) => state.booking.RTO);
  const [RTORef, setRTORef] = useState("PER");
  const [RTOValue, setRTOValue] = useState({
    serviceCode: "RTO",
    required: true,
    referenceType: null,
    referenceCode: "PER",
  });
  const { t } = useTranslation(["booking", "error", "common"]);
  const setRTOVals = (e) => {
    setRTORef(e.target.value);
    setRTOValue({ ...RTOValue, referenceCode: e.target.value });
    dispatch(bookingActions.setRTO({ ...RTO, referenceCode: e.target.value }));
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <h4 className="font-semibold">{t("booking:labels.bk-rto")}</h4>
        </div>
        <div className="w-1/2  border-2 border-gray-50">
          <div className="flex flex-col ">
            <div className="inline-flex">
              <input
                className="w-4 h-4 mt-1"
                name="RTO"
                type="radio"
                value="PER"
                onClick={setRTOVals}
                checked={RTO.referenceCode === "PER"}
              />
              <h4 className="mt-1 pl-1 text-sm  text-gray-700">
                {t("booking:labels.bk-permanent")}
              </h4>
            </div>

            <div className="inline-flex">
              <input
                className=" w-4 mt-2 h-4"
                name="RTO"
                value="TMP"
                type="radio"
                checked={RTO.referenceCode === "TMP"}
                onClick={setRTOVals}
              />
              <h4 className="mt-1.5 pl-1 text-sm  text-gray-700">
                {t("booking:labels.bk-tempo")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RTO;
