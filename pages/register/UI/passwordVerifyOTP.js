import { useTranslation } from "next-i18next";
import React from "react";
import Timer from "../../../components/Common/Component/OTPTimer";

export default function ForgotOtpUI({
  otp,
  handleChange,
  callOnChange,
  callRegenarate,
  seconds,
}) {
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
    <section className="theme-autocomm acSec bg-default border-2 border-theme">
      <div className="container ">
        <div className="">
          <div className="block m-auto mt-10 lg:mt-20 w-full lg:w-1/2 h-96 md:border-2 md:border-gray-400">
            <h2 className="font-semibold md:mt-10 md:ml-10">
              {t("register:labels.check-msg")}
            </h2>
            <div className="mt-5 md:ml-10">
              <h5> {t("register:labels.otp-message")}</h5>
            </div>
            <div className="mt-8">
              <div className="mt-4 lg:mt-10 md:w-4/5 md:m-auto">
                <Timer
                  defaultValue={otp}
                  initialSeconds={seconds}
                  onValChange={(val) => callChange(val)}
                  otp={otp}
                  handleOnClick={handleOnChange}
                  handleRegenarate={callRegen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
