import Customer from "components/Common/Component/Customer";
import { loginActions } from "components/LoginUI/store/login-slice";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const SignUpForm = ({
  Firstname,
  Lastname,
  password,
  checked,
  handleCheck,
  confirmPassword,
  customerPhone,
  customerEmail,
  callFirstName,
  callLastName,
  callPhone,
  callEmail,
  callPassword,
  callConfirmPassword,
  submitRequest,
}) => {
  const { t } = useTranslation(["register", "common"]);

  const dispatch = useDispatch();

  const handleChangeFirstName = (val) => {
    callFirstName(val);
  };
  const handleChangeLastName = (val) => {
    callLastName(val);
  };
  const handleChangePhone = (val) => {
    callPhone(val);
  };
  const handleChangeEmail = (val) => {
    callEmail(val);
  };

  const handleChangePassword = (val) => {
    callPassword(val);
  };
  const handleConfirmPassword = (val) => {
    callConfirmPassword(val);
  };
  const callSelect = () => {
    handleCheck();
  };
  const callSignup = () => {
    window.localStorage.removeItem("seconds");
    submitRequest();
  };

  return (
    <section className="theme-autocomm acSec bg-default border-2 border-theme">
      <div
        className="container mt-5 flex justify-center align-center"
        style={{ height: "-webkit-fill-available" }}
      >
        <div className="flex flex-col lg:flex-row w-full  justify-between">
          <div className="w-full lg:w-3/5 -ml-1 md:-ml-0 lg:mt-16">
            <div>
              <h1 className="font-bold"> {t("register:pageHeaders.signup")}</h1>
              <h3 className="text-sm md:text-lg ">
                {t("register:pageHeaders.signup-explore")}
              </h3>

              <img className="w-full" src="/images/navImg.png" />
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-2/5 lg:mt-24 md:ml-20 lg:ml-10 ">
            <div className="lg:w-4/5 m-auto">
              <Customer
                Firstname={Firstname}
                Lastname={Lastname}
                customerPhone={customerPhone}
                customerEmail={customerEmail}
                password={password}
                confirmPassword={confirmPassword}
                handleFirstName={(val) => handleChangeFirstName(val)}
                handleLastName={(val) => handleChangeLastName(val)}
                handlePhone={(val) => handleChangePhone(val)}
                handleEmail={(val) => handleChangeEmail(val)}
                handlePassword={(val) => handleChangePassword(val)}
                handleConfirmPassword={(val) => handleConfirmPassword(val)}
                checked={checked}
                callSelect={callSelect}
                callSignup={callSignup}
              />

              <div className="flex flex-wrap mt-5 items-center pb-5 md:pb-10 m-auto md:ml-0  justify-center">
                <div>
                  <h5 className="mr-4 mt-3">
                    {" "}
                    {t("register:labels.signup-accountText")}{" "}
                  </h5>
                </div>
                <Link href="#">
                  <a
                    onClick={() => {
                      dispatch(loginActions.setStatus("login-password"));
                      Router.push("/register/login");
                    }}
                    className="mt-3 w-33 border-1 border-transparent rounded hover:border-gray-500  focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
                  >
                    {t("register:btn-labels.signup-signinBtn")}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
