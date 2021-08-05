import Timer from "components/Common/Component/OTPTimer";
import { loginActions } from "components/LoginUI/store/login-slice";
import { useTranslation } from "next-i18next";
import Link from "next/Link";
import Router from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function VerifyUI({
  otp,
  sourceImg,
  handleChange,
  callOnChange,
  callRegenarate,
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation(["register", "common"]);
  const callChange = (val) => {
    handleChange(val);
  };
  const handleOnChange = () => {
    callOnChange();
  };
  const callRegen = () => {
    callRegenarate();
  };

  return (
    <section className="theme-autocomm acSec bg-default border-2 border-theme ">
      <div className="container ">
        <div className="flex mt-20 flex-col lg:flex-row w-full  place-self-center justify-between font-Montserrat">
          <div className="w-full lg:w-3/5 ">
            <div>
              <h1 className="font-bold font-Montserrat">
                {t("register:pageHeaders.verify-otp")}
              </h1>
              <h3 className="text-sm md:text-lg">
                {t("register:pageHeaders.signup-explore")}
              </h3>
              <img className="" src={sourceImg} />
            </div>
          </div>
          <div className="w-full lg:w-2/5  md:mt-6 lg:mt-40 md:ml-10 text-center">
            <div className="flex items-center justify-center">
              <form className="flex flex-col items-center justify-center">
                <div className="mt-4 lg:mt-10 md:w-3/5 lg:w-full ">
                  <Timer
                    defaultValue={otp}
                    onValChange={(val) => callChange(val)}
                    otp={otp}
                    handleOnClick={handleOnChange}
                    handleRegenarate={callRegen}
                  />
                </div>

                <div className="flex flex-wrap justify-center mt-5 items-center pb-5 md:pb-10 m-auto lg:ml-14">
                  <h5 className="mr-4 mt-3">
                    {t("register:labels.signup-accountText")}
                  </h5>
                  <div>
                    <Link href="#">
                      <a
                        onClick={() => {
                          dispatch(loginActions.setStatus("login-password"));
                          Router.push("/register/login");
                        }}
                        className="mt-3 w-33 border-1 border-transparent rounded hover:border-gray-500  focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase "
                      >
                        {t("register:btn-labels.signup-signinBtn")}
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*{successInfo()}*/}
    </section>
  );
}
