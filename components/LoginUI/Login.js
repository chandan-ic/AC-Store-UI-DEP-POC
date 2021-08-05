import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList, FullScreenLoader } from "components/Common/Component";
import { Button, TextBox } from "components/Common/Controls";
import { errorActions } from "components/Common/store/error/error-slice";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "utils/helper/cookieFunc";
import { loginFormSchema } from "utils/validation/login";
import { loginActions } from "./store/login-slice";

export const Login = ({
  customerEmail,
  password,
  loginRequest,
  callEmail,
  callPassword,
  selected,
  handleClick,
}) => {
  const router = useRouter();
  const schema = loginFormSchema();
  const dispatch = useDispatch();

  const { isLoggedIn, isInvalidUser } = useSelector((state) => state.login);
  const [isLogin, setLogin] = useState(Boolean(getCookie("is_logged_in")));
  const [isEmail, setIsEmail] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const watchAllFields = watch();


  useEffect(() => {
    if (!isInvalidUser) dispatch(errorActions.resetErrors());
  }, [watchAllFields]);

  const { t } = useTranslation(["register", "common"]);

  const handleChangeEmail = (val) => {
    dispatch(loginActions.setInvalidUser(false));
    let email = val.includes("@");
    if (email) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    callEmail(val);
  };
  const handleChangePassword = (val) => {
    dispatch(loginActions.setInvalidUser(false));
    callPassword(val);
  };
  const callSelect = () => {
    handleClick();
  };

  useEffect(() => {
    dispatch(
      loginActions.setStatus(
        window.localStorage.getItem("status") || "login-password"
      )
    );
    dispatch(loginActions.setInvalidUser(false));
  }, []);
  const callLogin = () => {};

  const onSubmit = (values) => {
    dispatch(errorActions.setIsLoader(true));
    setLogin(Boolean(getCookie("is_logged_in")));
    loginRequest();
  };

  const callLoginWithOtp = () => {
    dispatch(loginActions.setStatus("login-otp"));
    window.localStorage.removeItem("seconds");
  };

  const callRegisterVerify = () => {
    dispatch(loginActions.setStatus("verify-phone"));
  };

  const callForgotPassword = () => {
    dispatch(loginActions.setStatus("forgot-password"));
  };

  useEffect(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (isLogin) {
      router.push("/");
      dispatch(loginActions.setLoggedIn(true));
    }
  }, [isLogin]);

  return (
    <div>
      {isLogin ? (
        <FullScreenLoader />
      ) : (
        <section className="theme-autocomm acSec bg-default border-2 border-theme">
          <div
            className="container mt-5 flex justify-center align-center"
            style={{ height: "-webkit-fill-available" }}
          >
            <div className="flex flex-row flex-wrap items-center justify-center">
              <div>
                <div>
                  <h1 className="font-bold">
                    {t("register:pageHeaders.login")}
                  </h1>
                  <h3 className="text-sm md:text-lg ">
                    {t("register:pageHeaders.signup-explore")}
                  </h3>
                  <img className="w-full" src="/images/navImg.png" />
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full max-w-full sm:w-96 ">
                    <div>
                      <TextBox
                        title={t("register:labels.userName")}
                        option={t("common:labels.opt-required")}
                        placeholder={t("register:placeHolder.userName")}
                        value={customerEmail}
                        handleChange={(val) => handleChangeEmail(val)}
                        name="email"
                        error={errors?.email?.message}
                        reference={register}
                        autoFocus={true}
                      />
                      <TextBox
                        title={t("register:labels.userName")}
                        option={t("common:labels.opt-required")}
                        placeholder={t("register:placeHolder.userName")}
                        theme="hidden"
                        value={isEmail}
                        handleChange={() => {}}
                        name="isEmailValue"
                        error={errors?.isEmailValue?.message}
                        reference={register}
                      />
                    </div>

                    <div className="mt-5">
                      <TextBox
                        title={t("register:labels.password")}
                        option={t("common:labels.opt-required")}
                        placeholder={t("register:placeHolder.password")}
                        value={password}
                        handleChange={(val) => handleChangePassword(val)}
                        name="password"
                        type="password"
                        error={errors?.password?.message}
                        reference={register}
                      />
                    </div>
                    <div className="mt-4">
                      <ErrorList />
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
                    <div className="mt-5 flex items-center justify-center">
                      <Button
                        disabled={!(customerEmail && password)}
                        type="submit"
                        theme="yellow-contained w-full text-center"
                        handleClick={callLogin}
                      >
                        {t("register:pageHeaders.login")}
                      </Button>
                    </div>
                    <div className="mt-5 flex flex-row justify-between flex-wrap">
                      <Button
                        handleClick={() => {
                          callLoginWithOtp();
                        }}
                        themeType="link"
                        theme="mb-5 flex justify-start normal-case text-blue-700 underline  p-0"
                      >
                        <span className="ml-2">
                          {t("register:reg-links.login-otpLink")}
                        </span>
                      </Button>
                      <Button
                        handleClick={() => {
                          callForgotPassword();
                        }}
                        themeType="link"
                        theme="mb-5 flex justify-end capitalize text-blue-700 underline  p-0"
                      >
                        <svg
                          fill="#1d4fd8"
                          className="h-4 m-0.5 -mr-2"
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                        >
                          {" "}
                          <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9069372 8 4 8.9069372 4 10 L 4 20 C 4 21.093063 4.9069372 22 6 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 10 C 20 8.9069372 19.093063 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 12 13 C 10.9 13 10 13.9 10 15 C 10 16.1 10.9 17 12 17 C 13.1 17 14 16.1 14 15 C 14 13.9 13.1 13 12 13 z" />
                        </svg>
                        <span className="ml-2">
                          {t("register:pageHeaders.login-fPassword")}
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
