import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import "react-toastify/dist/ReactToastify.css";
import {
  testDriveSentOtpRequest,
  sumbitTestRideFormRequest,
} from "components/TestRide/store/testRide-action";
import { TextBox, Button } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import { getModalSNo } from "utils/helper/storeHelper";
import Timer from "components/Common/Component/OTPTimer";

export const VerifyOtp = ({ navigation }) => {
  const { t } = useTranslation(["testRide", "common"]);

  const {
    isOtpVerified,
    drivingLicenceNo,
    customerAlternatePhone,
    testRideAddress,
    bikeVariant,
    customerFirstName,
    customerLastName,
    dealerCode,
    testRideDate,
    customerPhone,
    customerEmail,
    testRideType,
    testRideLocation,
    testRideTime,
  } = useSelector((state) => state.testRide);

  const [otp, setOtp] = useState();

  const { go } = navigation;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOtpVerified) {
      go("submit");
    }
  }, [isOtpVerified]);

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage("verifyotp"));
  }, []);

  // if (typeof window !== "undefined") {
  //   window.addEventListener('beforeunload', function (e) {
  //     e.preventDefault();
  //     e.returnValue = '';
  //   })
  // }
  const callOtp = (value) => {
    setOtp(value);
  };

  const submitOtp = () => {
    const data = JSON.stringify({
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      customerCode: "",
      modelSlno: getModalSNo(bikeVariant),
      locationSlno: Number(dealerCode),
      preferredDate: testRideDate,
      mobileNo: customerPhone,
      emailId: customerEmail,
      otp: otp,
      testrideType: testRideType,
      preferredLocation: testRideLocation,
      preferredPeriod: testRideTime,
      preferredLocationAddress: testRideAddress,
      countryCodeSlno: 1,
      drivingLicenceNo: drivingLicenceNo,
      customerAlternatePhone: customerAlternatePhone,
    });
    dispatch(sumbitTestRideFormRequest(data));
  };

  const subRegenarateClick = () => {
    setOtp("");

    const data = JSON.stringify({
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      customerCode: "",
      modelSlno: getModalSNo(bikeVariant),
      locationSlno: Number(dealerCode),
      preferredDate: testRideDate,
      mobileNo: customerPhone,
      email: customerEmail,
    });
    dispatch(testDriveSentOtpRequest(data));
  };

  return (
    <section className="flex items-start h-full justify-center">
      <div className="  w-1/2 h-full bg-white pb-5 ">
        <div className=" flex  w-full h-full mt-10 space-x-2 flex-col items-center">
          <Timer
            defaultValue={otp}
            onValChange={(val) => callOtp(val)}
            otp={otp}
            handleOnClick={submitOtp}
            handleRegenarate={subRegenarateClick}
          />
        </div>
      </div>
    </section>
  );
};
