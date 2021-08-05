import { ErrorList } from "components/Common/Component";
import { errorActions } from "components/Common/store/error/error-slice";
import { getStateCityRequest } from "components/Common/store/masterData/masterData-action";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getStates } from "utils/helper/storeHelper/masterDataHelper";
import { Button, DropDownList } from "../../../Common/Controls";
import DealerResult from "./DealerResult";

export const SearchByCity = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState([]);
  const [states, setStates] = useState([]);
  const [ShowDealerResults, setShowDealerResults] = useState(false);
  const { rideCity, rideState, dealerCode } = useSelector(
    (state) => state.testRide
  );
  const { isStateCityLoaded } = useSelector((state) => state.master);
  const { t } = useTranslation(["testRide", "common"]);

  useEffect(() => {
    if (isStateCityLoaded) {
      setStates(getStates());
    }
    dispatch(errorActions.resetErrors());
  }, [isStateCityLoaded]);

  useEffect(() => {
    if (dealerCode) {
      setShowDealerResults(true);
    }
  }, []);

  useEffect(() => {
    if (isStateCityLoaded) {
      setCity(getCity(rideState));
    }
    dispatch(errorActions.resetErrors());
  }, [rideState]);

  useEffect(() => {
    dispatch(getStateCityRequest());
  }, []);

  const onRideCityChanged = (selectedCity) => {
    dispatch(testRideActions.setRideCity(selectedCity));
    setShowDealerResults(false);
    dispatch(errorActions.resetErrors());
  };

  const onRideStateChanged = (selectedState) => {
    dispatch(testRideActions.setRideState(selectedState));
    dispatch(testRideActions.setRideCity(""));
    setShowDealerResults(false);
    dispatch(errorActions.resetErrors());
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-full mt-5 items-end">
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-row items-center">
            <h4 className="trFET"> {t("testRide:label.rideState")}</h4>
            <span className="text-xs text-gray-400">
              {t("common:labels.opt-required")}
            </span>
          </div>
          <div className="w-full mt-4  pr-0 sm:pr-10">
            <DropDownList
              defaultValue={t("testRide:placeHolder.rideState")}
              value={rideState}
              list={states}
              idKey="StateSlno"
              valueKey="State"
              onChange={onRideStateChanged}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mt-0 mt-8">
          <div className="flex flex-row align-middle">
            <h4 className="trFET"> {t("testRide:label.rideCity")}</h4>
            <span className="text-xs text-gray-400">
              {t("common:labels.opt-required")}
            </span>
          </div>
          <div className="w-full mt-4  pr-0 sm:pr-10">
            <DropDownList
              defaultValue={t("testRide:placeHolder.rideCity")}
              value={rideCity}
              list={city}
              idKey="CitySlno"
              valueKey="City"
              onChange={onRideCityChanged}
            />
          </div>
        </div>
        <div className="md:mt-0 mt-8">
          <Button
            disabled={!(rideCity && rideState)}
            handleClick={() => {
              setShowDealerResults(true);
            }}
            theme="yellow-contained"
          >
            {t("testRide:buttonTxt.go")}
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <ErrorList />
      </div>

      <div className=" w-full h-full mt-3 bg-white ">
        {ShowDealerResults && <DealerResult />}
      </div>
    </div>
  );
};
