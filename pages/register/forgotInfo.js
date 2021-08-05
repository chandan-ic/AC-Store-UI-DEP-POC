import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customerVerifyOtpRequest,
  requestRegenerateOtp,
} from "../../components/Register/store/userActions";
import ForgotOtpUI from "./UI/passwordVerifyOTP";

const ForgotInfo = () => {
  const customerPhone = useSelector((state) => state.user.customerPhone);
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();
  const callChangeOTP = (val) => {
    setOtp(val);
  };
  const callVerifyOtp = () => {
    var data = JSON.stringify({
      phone: customerPhone,
      email: null,
      otp: otp,
      otpType: "P",
    });
    dispatch(customerVerifyOtpRequest(data));
  };
  const regenerateRequest = () => {
    var data = JSON.stringify({
      phone: customerPhone,
      email: null,
      otpType: "P",
    });
    dispatch(requestRegenerateOtp(data));
  };
  return (
    <ForgotOtpUI
      seconds={90}
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

export default ForgotInfo;
