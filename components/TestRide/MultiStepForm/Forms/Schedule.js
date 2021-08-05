import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { testRideActions } from "components/TestRide/store/testRide-slice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropDownList, Button } from "components/Common/Controls";
import { TR_TIMING } from "utils/constant/testRide";
import { useTranslation } from "next-i18next";

export const Schedule = ({ setForm, formData, navigation }) => {
  const { testRideTime, testRideDate, preSelected } = useSelector(
    (state) => state.testRide
  );
  const displayDate = testRideDate;
  const dispatch = useDispatch();

  const { t } = useTranslation(["testRide", "common"]);

  const { previous, next, go } = navigation;

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage("bikeSchedule"));
  }, []);

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const callDate = (displayDate) => {
    if (moment.isDate(displayDate)) {
      dispatch(testRideActions.setTestRideDate(displayDate.toISOString()));
    }
  };
  const callTime = (time) => {
    dispatch(testRideActions.setTestRideTime(time));
  };

  return (
    <section className="flex items-start h-full ">
      <div className="container w-full sm:w-4/5 h-full mt-3 bg-white">
        <div className="flex flex-col md:flex-row w-full h-full mt-10  ">
          <div className="w-full lg:w-1/2 ">
            <div>
              <div className="flex flex-row">
                <h4 className="trFET"> {t("testRide:label.rideDate")}</h4>
                <span className="text-xs text-gray-400">
                  {t("common:labels.opt-required")}
                </span>
              </div>

              <div className="-mt-1  block p-2 pl-0 text-sm bg-white  focus:outline-none ">
                <DatePicker
                  className="border px-3 border-gray-300 focus:outline-none  w-72 focus:ring-2 focus:ring-yellow-300 h-9"
                  placeholderText="Select date"
                  dateFormat="dd-MM-yyyy"
                  onChange={callDate}
                  selected={displayDate ? new Date(displayDate) : null}
                  minDate={tomorrow}
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 sm:mt-0 mt-8">
            <div>
              <div className="flex flex-row">
                <h4 className="trFET"> {t("testRide:label.rideTime")}</h4>
                <span className="text-xs text-gray-400">
                  {t("common:labels.opt-required")}
                </span>
              </div>
              <div className="mt-1 block p-2 pl-0 text-sm bg-white  focus:outline-none ">
                <DropDownList
                  defaultValue={t("testRide:placeHolder.rideTime")}
                  value={testRideTime || ""}
                  list={TR_TIMING}
                  idKey="id"
                  valueKey="value"
                  onChange={callTime}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className=" flex flex-wrap justify-between sm:items-end sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-40
  space-x-10"
        >
          <Button handleClick={previous} theme="yellow-outlined">
            {t("testRide:buttonTxt.back")}
          </Button>
          <Button
            handleClick={next}
            disabled={!(testRideDate && testRideTime)}
            theme="yellow-contained"
          >
            {t("testRide:buttonTxt.next")}
          </Button>
        </div>
      </div>
    </section>
  );
};
