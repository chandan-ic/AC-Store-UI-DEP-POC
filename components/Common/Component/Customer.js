import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "components/Common/Component";
import { errorActions } from "components/Common/store/error/error-slice";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import regCustomerSchema from "utils/validation/customerValidation";
import { Button, TextBox } from "../Controls";

export default function Customer({
  Firstname,
  Lastname,
  customerPhone,
  customerEmail,
  handleFirstName,
  handleLastName,
  password,
  confirmPassword,
  handlePhone,
  handleEmail,
  handlePassword,
  handleConfirmPassword,
  checked,
  callSelect,
  callSignup,
}) {
  const schema = regCustomerSchema();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch();

  useEffect(() => {
    dispatch(errorActions.resetErrors());
  }, [watchAllFields]);

  const { t } = useTranslation(["register", "common"]);
  const onSubmit = () => {
    callSignup();
  };
  const handleChangeFName = (val) => {
    handleFirstName(val);
  };
  const handleChangeLName = (val) => {
    handleLastName(val);
  };
  const handleChangePhone = (val) => {
    handlePhone(val);
    window.localStorage.setItem("mobile", val);
  };
  const handleChangeEmail = (val) => {
    handleEmail(val);
  };

  const handleChangePassword = (val) => {
    handlePassword(val);
  };
  const handleConfPassword = (val) => {
    handleConfirmPassword(val);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:mt-5">
            <TextBox
              title={t("common:labels.cus-fname")}
              option={t("common:labels.opt-required")}
              placeholder={t("common:placeHolder.firstName")}
              value={Firstname}
              handleChange={(val) => handleChangeFName(val)}
              name="firstName"
              error={errors?.firstName?.message}
              reference={register}
              autoFocus={true}
            />
          </div>

          <div className="mt-5">
            <TextBox
              title={t("common:labels.cus-lname")}
              option={t("common:labels.opt-required")}
              placeholder={t("common:placeHolder.lastName")}
              value={Lastname}
              handleChange={(val) => handleChangeLName(val)}
              name="lastName"
              error={errors?.lastName?.message}
              reference={register}
            />
          </div>

          <div className="mt-5">
            <TextBox
              title={t("common:labels.cus-phone")}
              option={t("common:labels.opt-required")}
              placeholder={t("common:placeHolder.mobileNo")}
              value={customerPhone}
              handleChange={(val) => handleChangePhone(val)}
              name="customerPhone"
              error={errors?.customerPhone?.message}
              reference={register}
            />
          </div>
          <div className="mt-5">
            <TextBox
              title={t("common:labels.cus-email")}
              option={t("common:labels.opt-required")}
              placeholder={t("common:placeHolder.email")}
              value={customerEmail}
              handleChange={(val) => handleChangeEmail(val)}
              name="customerEmail"
              error={errors?.customerEmail?.message}
              reference={register}
            />
          </div>

          <div className="mt-5">
            <TextBox
              title={t("common:labels.cus-password")}
              option={t("common:labels.opt-required")}
              placeholder={t("common:placeHolder.password")}
              type="password"
              value={password}
              handleChange={(val) => handleChangePassword(val)}
              name="password"
              error={errors?.password?.message}
              reference={register}
            />
          </div>
          <div className="mt-5">
            <TextBox
              title={t("common:labels.cus-confirmPassword")}
              option={t("common:labels.opt-required")}
              placeholder={t("common:placeHolder.confirmPassword")}
              type="password"
              value={confirmPassword}
              handleChange={(val) => handleConfPassword(val)}
              name="confirmPassword"
              error={errors?.confirmPassword?.message}
              reference={register}
            />
            {confirmPassword && confirmPassword != password ? (
              <span className="text-red-500 text-xs">
                {t("register:validation.mismatch")}
              </span>
            ) : null}
          </div>
          <div className="mt-5">
            <input
              type="checkbox"
              className="form-checkbox w-4 h-4 text-yellow-300 border-2 border-gray-300"
              checked={checked}
              onChange={callSelect}
            />
            <label className="font-LibreFranklin ml-2 border-b-2 border-yellow-300">
              {t("register:labels.signup-acceptTerms")}
            </label>
          </div>

          <div className="mt-3">
            <ErrorList />
          </div>

          <div className=" mt-4">
            <Button
              type="submit"
              disabled={
                !(
                  Firstname &&
                  Lastname &&
                  customerPhone &&
                  customerEmail &&
                  password &&
                  confirmPassword &&
                  checked
                )
              }
              theme="yellow-contained"
              width="w-full"
              handleClick={() => {}}
            >
              {t("register:btn-labels.signup-btnText")}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
