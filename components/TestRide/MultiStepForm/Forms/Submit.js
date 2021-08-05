import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Button } from "components/Common/Controls";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import {
  getModalName,
  getTestRideLocationValue,
  getDealerName,
} from "utils/helper/storeHelper/masterDataHelper";

export const Submit = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { t } = useTranslation(["testRide", "common"]);
  const {
    currentPage,
    bikeVariant,
    testRideLocation,
    testRideDate,
    testRideTime,
    customerName,
    testRideType,
    dealerCode,
  } = useSelector((state) => state.testRide);

  const selModel = getModalName(bikeVariant);
  const selLocation = getTestRideLocationValue(testRideLocation);
  const selDealer = getDealerName(Number(dealerCode));
  const displayDate = new Date(testRideDate);

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage(""));
  }, []);

  const goHomePage = () => {
    router.push("/");
  };

  return (
    <section id="submit" className="flex items-start py-10">
      <div className="container  w-4/5  border-theme border-2  bg-sixth ">
        <div className="flex sm:mt-20  mt-10 justify-center  text-center sm:flex-row">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full sm:mr-0 sm:ml-0 border-2 border-theme bg-transparent mr-6 ml-3 p-1 shawdow-2xl bg- shadow-2xl ">
            <img src="/images/bike.png" />
            <p className="sm:pt-3 text-sm">{t("testRide:submit.select")}</p>
          </div>
          <span className="sm:w-14 w-7 sm:pt-0 align-middle pt-2">
            <img src="images/arrow.png" />
          </span>
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full  shadow-2xl
                          sm:mr-2 sm:ml-2 mr-2 ml-5   border-2 border-theme  p-1 bg-transparent"
          >
            <img src="images/schedule.png" />
            <p className="sm:pt-3 text-sm">
              {t("testRide:dealers.selectDealer")}
            </p>
          </div>
          <span className="sm:w-14 w-7 sm:pt-0 align-middle pt-2">
            <img src="images/arrow.png" />
          </span>
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl 
sm:mr-0 sm:ml-0 mr-2 ml-5 p-1 bg-theme border-2 border-theme "
          >
            <img src="images/testride.png" />
            <p className="sm:pt-3 text-sm">{t("testRide:submit.ride")}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold mt-20">{t("testRide:submit.thankYou")}</h2>
          <h4>{t("testRide:submit.message")}</h4>
          <div className="border-t-4 border-yellow-400 my-5 py-5 text-left">
            <div className="flex flex-row flex-wrap my-1">
              <div className="w-32 font-bold">
                {t("testRide:label.selectedBike")}{" "}
                <span className="sm:float-right">:</span>
              </div>
              <div className="w-48 ml-3">{selModel}</div>
            </div>
            <div className="flex flex-row flex-wrap my-1">
              <div className="w-32 font-bold">
                {t("testRide:label.selectedLocation")}{" "}
                <span className="sm:float-right">:</span>
              </div>
              <div className="w-48 ml-3">{selLocation}</div>
            </div>
            <div className="flex flex-row flex-wrap my-1">
              <div className="w-32 font-bold">
                {t("testRide:label.dealer")}{" "}
                <span className="sm:float-right">:</span>
              </div>
              <div className="w-48 ml-3">{selDealer}</div>
            </div>
            <div className="flex flex-row flex-wrap my-1">
              <div className="w-32 font-bold">
                {t("testRide:label.preferredDate")}{" "}
                <span className="sm:float-right">:</span>
              </div>
              <div className="w-48 ml-3">
                {testRideDate &&
                  displayDate &&
                  ("0" + displayDate.getDate()).slice(-2) +
                    "-" +
                    ("0" + (displayDate.getMonth() + 1)).slice(-2) +
                    "-" +
                    displayDate.getFullYear()}
              </div>
            </div>
            <div className="flex flex-row flex-wrap my-1">
              <div className="w-32 font-bold">
                {t("testRide:label.preferredTime")}{" "}
                <span className="sm:float-right">:</span>
              </div>
              <div className="w-48 ml-3">
                {testRideTime === "M"
                  ? "9:00AM-12:00PM"
                  : testRideTime === "A"
                  ? "1:00PM-3:00PM"
                  : testRideTime === "E"
                  ? "4:00PM-6:00PM"
                  : ""}
              </div>
            </div>
            <div className="sm:text-center">
              <Button handleClick={goHomePage} theme="yellow-contained mt-5">
                {t("testRide:buttonTxt.goHome")}
              </Button>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
