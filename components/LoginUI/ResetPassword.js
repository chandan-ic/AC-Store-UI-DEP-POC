import { yupResolver } from "@hookform/resolvers/yup";
import Timer from "components/Common/Component/OTPTimer";
import { TextBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetFormSchema } from "utils/validation/login";
import {
  forgotPasswordOtpRequest,
  forgotPasswordOtpVerifyRequest,
} from "./store/login-action";

export default function ResetPassword() {
  const { mobile } = useSelector((state) => state.login);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const { t } = useTranslation(["register", "common"]);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const schema = resetFormSchema();
  const { isPasswordChanged } = useSelector((state) => state.login);
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const handleChange = (e) => {
    setPassword(e);
    if (
      errors?.confirmPassword?.message?.length ||
      errors?.newpassword?.message?.length
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const handleChangePassword = (e) => {
    setConfirmPassword(e);
    if (
      errors?.confirmPassword?.message?.length ||
      errors?.newpassword?.message?.length
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onSubmit = (values) => {
    var data = JSON.stringify({
      mobileNo: window.localStorage.getItem("mobile"),
      otp: otp,
      resetPassword: password,
      confirmPassword: confirmPassword,
    });
    dispatch(forgotPasswordOtpVerifyRequest(data));
  };
  const callUpdatePassword = (errors) => {
    if (errors?.Mobile?.message?.length) {
      setDisabled(true);
    } else {
      setDisabled(false);
      onSubmit();
    }
  };

  const callGenerateOtp = () => {
    var data = JSON.stringify({
      mobileNo: window.localStorage.getItem("mobile"),
    });
    dispatch(forgotPasswordOtpRequest(data));
  };

  const callOtp = (value) => {
    setOtp(value);
  };

  return (
    <section className="theme-autocomm acSec bg-default ">
      <div
        className="container mt-5 flex justify-center items-center"
        style={{ height: "-webkit-fill-available" }}
      >
        <div className="block border-yellow-400 border-2 p-5  w-full flex items-center justify-center md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className=" w-96 max-w-full">
            <div className="flex justify-left">
              <div className=" w-full">
                <h2 className="font-semibold text-center">
                  {t("register:labels.new-password")}
                </h2>
                <div className="mt-8 w-full">
                  <TextBox
                    title={t("register:labels.newPassword")}
                    option={t("common:labels.opt-required")}
                    placeholder={t("register:placeHolder.newPassword")}
                    type="password"
                    value={password}
                    handleChange={(e) => handleChange(e)}
                    name="newpassword"
                    error={errors?.newpassword?.message}
                    reference={register}
                  />
                </div>

                <div className="mt-8 w-full">
                  <TextBox
                    title={t("register:labels.confirmPassword")}
                    option={t("common:labels.opt-required")}
                    placeholder={t("register:placeHolder.confirmPassword")}
                    type="password"
                    value={confirmPassword}
                    handleChange={(e) => handleChangePassword(e)}
                    name="confirmpassword"
                    error={errors?.confirmpassword?.message}
                    reference={register}
                  />
                </div>
                {confirmPassword && confirmPassword !== password ? (
                  <span className="text-red-600 text-xs text-left w-full">
                    {t("register:validation.mismatch")}
                  </span>
                ) : (
                  ""
                )}
                <div className="my-10 text-center mx-auto flex justify-center">
                  {
                    <Timer
                      defaultValue={otp}
                      onValChange={(val) => callOtp(val)}
                      otp={otp}
                      disabled={isDisabled}
                      handleOnClick={() => {
                        callUpdatePassword(errors);
                      }}
                      handleRegenarate={callGenerateOtp}
                    />
                  }
                  {/* <Button
                    theme="yellow-contained"
                    disabled={!(password && confirmPassword)}
                    handleClick={callUpdatePassword}
                  >
                    {t("register:btn-labels.update-btn")}
                  </Button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
