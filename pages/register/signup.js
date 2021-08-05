import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserRequest } from "../../components/Register/store/userActions";
import { userActions } from "../../components/Register/store/userSlice";
import SignUpForm from "./UI/RegisterUI";
const signup = () => {
  const { Firstname, Lastname, customerPhone, customerEmail, isCreated } =
    useSelector((state) => state.user);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleFname = (val) => {
    dispatch(userActions.setFirstName(val));
  };
  const handleLname = (val) => {
    dispatch(userActions.setLastName(val));
  };
  const handlePhone = (val) => {
    dispatch(userActions.setCustomerPhone(val));
  };
  const handleEmail = (val) => {
    dispatch(userActions.setCustomerEmail(val));
  };
  const handlePassword = (val) => {
    setPassword(val);
  };
  const handleConfirmPass = (val) => {
    setConfirmPassword(val);
  };

 
  const callSubRequest = () => {
    var data = JSON.stringify({
      firstName: Firstname,
      lastName: Lastname,
      mobileNo: customerPhone,
      emailId: customerEmail,
      password: password,
      confirmPassword: confirmPassword,
      countryCodeSlno: 1,
    });
    dispatch(createUserRequest(data));
  };
  return (
    <SignUpForm
      Firstname={Firstname}
      Lastname={Lastname}
      customerPhone={customerPhone}
      customerEmail={customerEmail}
      password={password}
      confirmPassword={confirmPassword}
      callFirstName={(val) => handleFname(val)}
      callLastName={(val) => handleLname(val)}
      callPhone={(val) => handlePhone(val)}
      callEmail={(val) => handleEmail(val)}
      callPassword={(val) => handlePassword(val)}
      callConfirmPassword={(val) => handleConfirmPass(val)}
      checked={checked}
      handleCheck={() => setChecked(!checked)}
      submitRequest={callSubRequest}
    />
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "register",
      "common",
      "error",
      "testRide",
    ])),
  },
});
export default signup;
