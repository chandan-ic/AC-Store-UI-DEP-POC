import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import TestRideLocation from "./TestRideLocation";
import { DealerSearchOption } from "./DealerSearchOption";
import CustomerLocation from "./CustomerLocation";
import {
  getPreferredLocation,
  getRideType,
} from "utils/helper/storeHelper/masterDataHelper";
import { Button, DropDownList } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

export const SelectRideLocation = ({ setForm, formData, navigation }) => {
  const {
    testRideType,
    testRideLocation,
    pinCode,
    dealerCode,
    testRideAddress,
  } = useSelector((state) => state.testRide);
  const { previous, next } = navigation;
  const { t } = useTranslation(["testRide", "common"]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage("selectLocation"));
  }, []);

  useEffect(() => {
    dispatch(testRideActions.setSubmitStatus(false));
    dispatch(testRideActions.setPreselected(false));
  }, []);

  const trt = getRideType();
  const trl = getPreferredLocation();

  const changeRideType = (testRideType) => {
    dispatch(testRideActions.setTestRideType(testRideType));
    // dispatch(testRideActions.setTestRideLocation(null));
  };

  const isDisabled = () => {
    return testRideType === "" ||
      testRideType === null ||
      testRideType === "Select Testride Type"
      ? true
      : (testRideType === "CTY" && testRideLocation === null) ||
        (testRideLocation === "DLR" && dealerCode === null)
      ? true
      : testRideType === "CTY" &&
        testRideLocation === "CUS" &&
        (testRideAddress === "" ||
          testRideAddress === null ||
          dealerCode === null)
      ? true
      : false;
  };

  return (
    <section id="selectLocation" className="flex items-start h-full">
      <div className="container mx-0 w-full h-full mt-3 bg-white md:mx-20 ">
        <div className="flex flex-col md:flex-row w-full h-full mt-10  ">
          <div className="w-full md:w-1/2 pr-0 md:pr-10">
            <div className="flex flex-row">
              <h4 className="trFET"> {t("testRide:label.rideType")}</h4>
              <span className="text-xs text-gray-400">
                {t("common:labels.opt-required")}
              </span>
            </div>
            <div className="w-full mt-4">
              <DropDownList
                defaultValue={t("testRide:placeHolder.rideType")}
                value={testRideType || ""}
                list={trt}
                idKey="Code"
                valueKey="Value"
                onChange={changeRideType}
                autoSelect={true}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2  sm:mt-0 mt-8 pr-0 md:pr-10">
            {testRideType === "CTY" && <TestRideLocation />}
          </div>
        </div>
        <div className="flex md:flex-row w-full h-full mt-10  ">
          <div className="w-full">
            {testRideLocation === "DLR" && <DealerSearchOption />}
            {testRideLocation === "CUS" && <CustomerLocation />}
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between sm:items-end  sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-10
  space-x-10"
        >
          <Button handleClick={previous} theme="yellow-outlined">
            {t("testRide:buttonTxt.back")}
          </Button>
          <Button
            handleClick={next}
            disabled={isDisabled()}
            theme="yellow-contained"
          >
            {t("testRide:buttonTxt.next")}
          </Button>
        </div>
      </div>
    </section>
  );
};
