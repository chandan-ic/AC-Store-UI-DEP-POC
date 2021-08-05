import React from "react";
import { DropDownList, Button } from "components/Common/Controls";
import BookingDealerResult from "../bookingDealerResultCard";
import { useTranslation } from "next-i18next";

const CityDealersUI = ({
  changeState,
  states,
  city,
  changeCity,
  bookingCity,
  bookingState,
  setShowDealer,
  ShowDealerResults,
}) => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const onRideStateChanged = (selectedState) => {
    changeState(selectedState);
  };
  const onRideCityChanged = (selectedCity) => {
    changeCity(selectedCity);
  };
  const setShow = () => {
    setShowDealer();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-full mt-5 items-end">
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-row items-center">
            <h4 className="trFET">{t("booking:labels.select-state")}</h4>
            <span className="text-xs text-gray-400">
              {t("booking:labels.opt-required")}
            </span>
          </div>
          <div className="w-full mt-4">
            <DropDownList
              defaultValue="Select State"
              value={bookingState}
              list={states}
              idKey="StateCode"
              valueKey="State"
              onChange={onRideStateChanged}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mt-0 mt-8">
          <div className="flex flex-row align-middle">
            <h4 className="trFET">{t("booking:labels.select-city")}</h4>
            <h4 className="text-xs text-gray-400">
              {t("booking:labels.opt-required")}
            </h4>
          </div>
          <div className="w-full mt-4">
            <DropDownList
              defaultValue="Select City"
              value={bookingCity}
              list={city}
              idKey="CityCode"
              valueKey="City"
              onChange={onRideCityChanged}
            />
          </div>
        </div>
        <div className="md:mt-0 mt-8">
          <Button
            disabled={!(bookingCity && bookingState)}
            handleClick={() => setShow()}
            theme="yellow-contained"
          >
            {t("booking:buttonLabels-go")}
          </Button>
        </div>
      </div>
      <div className=" w-full h-full mt-3 bg-white ">
        {ShowDealerResults && <BookingDealerResult />}
      </div>
    </div>
  );
};

export default CityDealersUI;
