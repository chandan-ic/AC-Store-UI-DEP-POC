import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "components/Common/Component";
import Timer from "components/Common/Component/OTPTimer";
import { Button, MobileNumber } from "components/Common/Controls";

import { errorActions } from "components/Common/store/error/error-slice";

import { requestRegenerateOtp } from "components/Register/store/userActions";
import { userActions } from "components/Register/store/userSlice";
import { useTranslation } from "next-i18next";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { phoneFormSchema } from "utils/validation/login";
import ResetPassword from "./ResetPassword";
import {
  forgotPasswordOtpRequest,
  loginWithOtpRequest,
  loginWithOtpVerifyRequest,
} from "./store/login-action";
import { loginActions } from "./store/login-slice";

export default function ForgotPassword() {
  const { mobile, status, isOtpSent, isOtpVerified, isInvalidUser } =
    useSelector((state) => state.login);

  const dispatch = useDispatch();


  const { isCreated } = useSelector((state) => state.user);

  const [otp, setOtp] = useState("");
  const [isChanged, setChanged] = useState(true);
  const [isDisabled, setDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOtpSent) {
      window.localStorage.removeItem("seconds");
    }
  }, [isOtpSent]);

  useEffect(() => {
    dispatch(loginActions.setInvalidUser(false));
    dispatch(loginActions.setMobile(""));
  }, []);


  const { t } = useTranslation(["register", "common"]);

  const callRegisterVerify = () => {
    var data = JSON.stringify({
      mobileNo: window.localStorage.getItem("mobile"),
    });
    dispatch(requestRegenerateOtp(data));
  };

  const schema = phoneFormSchema();


  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch();

  useEffect(() => {
    dispatch(errorActions.resetErrors());
  }, [watchAllFields]);

  useEffect(() => {
    dispatch(userActions.setCreated(false));
  });

  useEffect(() => {
    if (isCreated) {
      Router.push("/register/verifyOtp");
      window.localStorage.removeItem("seconds");
    }
  }, [isCreated]);

  useEffect(() => {
    if (isOtpVerified) {
      router.push("/");
      dispatch(loginActions.setLoggedIn(true));
    }
  }, [isOtpVerified]);

  const handleChangePhone = (value) => {
    window.localStorage.setItem("mobile", value);

    dispatch(loginActions.setInvalidUser(false));
    setChanged(false);
    setDisabled(true);
    if (errors?.Mobile?.message?.length) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    if (status === "verify-phone") {
      dispatch(userActions.setCustomerPhone(value));
    }
    dispatch(loginActions.setMobile(value));  
  };

  const callGenerateOtp = () => {
    setChanged(true);
  };

  const onSubmit = (values) => {
    if (status === "forgot-password") {
      var data = JSON.stringify({
        mobileNo: window.localStorage.getItem("mobile"),
      });
      dispatch(forgotPasswordOtpRequest(data));
    }
    if (status === "login-otp") {
      var data = JSON.stringify({
        userName: window.localStorage.getItem("mobile"),
      });
      console.log(window.localStorage.getItem("mobile"));
      dispatch(loginWithOtpRequest(data));
    }
    if (status === "login-verify") {
      var data = JSON.stringify({
        userName: window.localStorage.getItem("mobile"),
      });
      dispatch(loginWithOtpRequest(data));
    }
    if (status === "verify-phone") {
      var data = JSON.stringify({
        mobileNo: window.localStorage.getItem("mobile"),
      });
      dispatch(requestRegenerateOtp(data));
    }
  };

  useEffect(() => {}, []);
  const callOtp = (value) => {
    setOtp(value);
  };

  const submitOtp = () => {
    if (status === "login-verify") {
      var data = JSON.stringify({
        userName: window.localStorage.getItem("mobile"),
        otp: otp,
      });
      dispatch(loginWithOtpVerifyRequest(data));
    }
  };
  return (
    <>
      {status === "reset-password" ? (
        <ResetPassword />
      ) : (
        <section className="theme-autocomm acSec bg-default  border-theme">
          <div
            className="container mt-5 flex justify-center align-center"
            style={{ height: "-webkit-fill-available" }}
          >
            <div className="block m-auto w-full  lg:w-1/2 border-yellow-400 border-2 p-5">
              <div className="flex justify-center pt-10">
                <div>
                  <h2 className="font-semibold my-4 text-center">
                    {status === "forgot-password"
                      ? t("register:pageHeaders.login-fPassword")
                      : null}
                    {status === "verify-phone"
                      ? t("register:pageHeaders.verify-phone")
                      : null}
                    {status === "login-otp" || status === "login-verify"
                      ? t("register:pageHeaders.login-otp")
                      : null}
                  </h2>
                  {status === "login-verify" ? (
                    <Timer
                      defaultValue={otp}
                      onValChange={(val) => callOtp(val)}
                      otp={otp}
                      handleOnClick={submitOtp}
                      handleRegenarate={onSubmit}
                    />
                  ) : null}
                  {status === "login-otp" ||
                  status === "forgot-password" ||
                  status === "verify-phone" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex items-center justify-center">
                        <div className="mt-8  ">
                          <MobileNumber
                            title={t("register:labels.mobileNo")}
                            option={t("common:labels.opt-required")}
                            placeholder={t("register:placeHolder.mobileNo")}
                            value={mobile}
                            handleChange={(value) => handleChangePhone(value)}
                            name="Mobile"
                            error={errors?.Mobile?.message}
                            reference={register}
                          />
                        </div>
                      </div>
                      <div className="my-5">
                        {status !== "reset-password" && isChanged ? (
                          <ErrorList />
                        ) : null}
                        {isInvalidUser ? (
                          <Button
                            handleClick={() => {
                              callRegisterVerify();
                            }}
                            themeType="link"
                            theme="mb-5 flex justify-start normal-case text-red-500 underline  p-0"
                          >
                            <span>{t("register:btn-labels.verify-link")}</span>
                          </Button>
                        ) : null}
                      </div>

                      <div className="mt-10 text-center ">
                        <Button
                          theme="yellow-contained"
                          disabled={!mobile}
                          type="submit"
                          handleClick={() => {
                            callGenerateOtp();
                          }}
                        >
                          {t("register:btn-labels.send-otp")}
                        </Button>
                      </div>
                    </form>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
