import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customerVerifyOtpRequest,
  requestRegenerateOtp,
} from "../../components/Register/store/userActions";
import VerifyUI from "./UI/verifyUI";

const signUpOtpVerify = () => {
  const { customerPhone, isOtpVerified } = useSelector((state) => state.user);
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();
  const callChangeOTP = (val) => {
    setOtp(val);
  };
  useEffect(() => {
    if (isOtpVerified) {
      Router.push("/register/successMessage");
    }
  }, [isOtpVerified]);
  const callVerifyOtp = () => {
    var data = JSON.stringify({
      mobileNo: window.localStorage.getItem("mobile"),
      otp: otp,
    });
    dispatch(customerVerifyOtpRequest(data));
  };
  const regenerateRequest = () => {
    var data = JSON.stringify({
      mobileNo: window.localStorage.getItem("mobile"),
    });
    dispatch(requestRegenerateOtp(data));
  };
  return (
    <VerifyUI
      sourceImg="/images/navImg.png"
      otp={otp}
      handleChange={(val) => callChangeOTP(val)}
      callOnChange={callVerifyOtp}
      callRegenarate={regenerateRequest}
    />
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["register", "common", "error"])),
  },
});

export default signUpOtpVerify;
