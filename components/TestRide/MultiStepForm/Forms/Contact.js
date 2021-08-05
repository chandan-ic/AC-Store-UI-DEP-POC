import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "components/Common/Component";
import { Button, MobileNumber, TextBox } from "components/Common/Controls";
import { errorActions } from "components/Common/store/error/error-slice";
import { testDriveSentOtpRequest } from "components/TestRide/store/testRide-action";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "utils/helper/cookieFunc";
import { getModalSNo } from "utils/helper/storeHelper/masterDataHelper";
import {
  trContactFormLicenseSchema,
  trContactFormSchema,
} from "utils/validation/testRide";
import { VerifyOtp } from "./verifyOtp";

export const Contact = ({ navigation }) => {
  const { t } = useTranslation(["testRide", "common"]);
  const [isLogin, setLogin] = useState(Boolean(getCookie("is_logged_in")));

  const schema = trContactFormSchema();
  const yupSchema = trContactFormLicenseSchema();
  const {
    testRideDate,
    dealerCode,
    customerFirstName,
    customerLastName,
    customerPhone,
    customerEmail,
    drivingLicenceNo,
    customerAlternatePhone,
    bikeVariant,
    isSubmitted,
    preSelected,
  } = useSelector((state) => state.testRide);
  const { user, isLoggedIn } = useSelector((state) => state.login);

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
    resolver: !isLogin ? yupResolver(schema) : yupResolver(yupSchema),
  });

  const dispatch = useDispatch();

  const { previous, go } = navigation;

  const watchAllFields = watch();

  useEffect(() => {
    dispatch(errorActions.resetErrors());
  }, [watchAllFields]);

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage("bikeContact"));
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      // go("submit");
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        testRideActions.setTestRideCustomerFirstName(user?.customerFirstName)
      );
      dispatch(
        testRideActions.setTestRideCustomerLastName(user?.customerLastName)
      );
      dispatch(testRideActions.setTestRideCustomerEmail(user?.customerEmailId));
      dispatch(
        testRideActions.setTestRideCustomerPhone(user?.customerMobileNo)
      );
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);

  const callFirstName = (value) => {
    dispatch(testRideActions.setTestRideCustomerFirstName(value));
  };

  const callLastName = (value) => {
    dispatch(testRideActions.setTestRideCustomerLastName(value));
  };

  const callEmail = (value) => {
    dispatch(testRideActions.setTestRideCustomerEmail(value));
  };
  const callDl = (value) => {
    dispatch(testRideActions.setTestRideCustomerDlnumber(value));
  };
  const callPhone = (value) => {
    dispatch(testRideActions.setTestRideCustomerPhone(value));
  };
  const callAlt = (value) => {
    dispatch(testRideActions.setTestRideCustomerAltPhone(value));
  };

  const onSubmit = (values) => {
    const data = JSON.stringify({
      customerFirstName: customerFirstName,
      customerLastName: customerFirstName,
      customerCode: "",
      modelSlno: getModalSNo(bikeVariant),
      locationSlno: Number(dealerCode),
      preferredDate: testRideDate,
      mobileNo: customerPhone,
      email: customerEmail,
    });
    dispatch(testDriveSentOtpRequest(data));
  };

  let btnRef = useRef();
  const handleSubmitData = () => {
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };

  return (
    <section className="flex items-start h-full ">
      <div className=" container w-full md:w-4/5 h-full mt-3 pt-3 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col md:flex-row w-full h-full mt-5 sm:space-x-2 ">
            <div className=" w-full md:w-1/2 ">
              <div>
                <div className="flex flex-row mt-5">
                  <h4 className="trFET"> {t("testRide:label.firstName")}</h4>
                  <span className="text-xs text-gray-400">
                    {t("common:labels.opt-required")}
                  </span>
                </div>
                <TextBox
                  placeholder={t("testRide:placeHolder.firstName")}
                  value={customerFirstName}
                  defaultValue={customerFirstName}
                  handleChange={callFirstName}
                  name="customerFirstName"
                  error={errors?.customerFirstName?.message}
                  reference={register}
                  disabled={isSubmitted || isLogin}
                />
              </div>
            </div>

            <div className=" w-full md:w-1/2 ">
              <div>
                <div className="flex flex-row mt-5">
                  <h4 className="trFET"> {t("testRide:label.lastName")}</h4>
                  <span className="text-xs text-gray-400">
                    {t("common:labels.opt-required")}
                  </span>
                </div>
                <TextBox
                  placeholder={t("testRide:placeHolder.lastName")}
                  value={customerLastName}
                  defaultValue={customerLastName}
                  handleChange={callLastName}
                  name="customerLastName"
                  error={errors?.customerLastName?.message}
                  reference={register}
                  disabled={isSubmitted || isLogin}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row w-full h-full  mt-0 sm:mt-5 sm:space-x-2 ">
            <div className=" w-full md:w-1/2 sm:mt-0 mt-5">
              <div>
                <div className="flex flex-row mt-5">
                  <h4 className="trFET"> {t("testRide:label.mobileNo")}</h4>
                  <span className="text-xs text-gray-400">
                    {t("common:labels.opt-required")}
                  </span>
                </div>
                <MobileNumber
                  placeholder={t("testRide:placeHolder.mobileNo")}
                  value={customerPhone}
                  defaultValue={customerPhone}
                  handleChange={callPhone}
                  name="customerPhone"
                  error={errors?.customerPhone?.message}
                  reference={register}
                  disabled={isSubmitted || isLogin}
                />
              </div>
            </div>
            <div className=" w-full md:w-1/2 ">
              <div>
                <div className="flex flex-row mt-5">
                  <h4 className="trFET"> {t("testRide:label.email")}</h4>
                  <span className="text-xs text-gray-400">
                    {t("common:labels.opt-required")}
                  </span>
                </div>
                <TextBox
                  placeholder={t("testRide:placeHolder.email")}
                  value={customerEmail}
                  defaultValue={customerEmail}
                  handleChange={callEmail}
                  name="customerEmail"
                  error={errors?.customerEmail?.message}
                  reference={register}
                  disabled={isSubmitted || isLogin}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row w-full h-full mt-0 sm:mt-5 sm:space-x-2">
            <div className=" w-full md:w-1/2 sm:mt-0 mt-5">
              <div>
                <div className="flex flex-row mt-5">
                  <h4 className="trFET"> {t("testRide:label.dlNo")}</h4>
                  <span className="text-xs text-gray-400">
                    {t("common:labels.opt-required")}
                  </span>
                </div>
                <TextBox
                  placeholder={t("testRide:placeHolder.dlNo")}
                  value={drivingLicenceNo}
                  handleChange={callDl}
                  name="drivingLicenceNo"
                  error={errors?.drivingLicenceNo?.message}
                  reference={register}
                  disabled={isSubmitted}
                />
              </div>
            </div>
            <div className=" w-full md:w-1/2 mb-5">
              <div>
                <div className="flex flex-row mt-5">
                  <h4 className="trFET">
                    {" "}
                    {t("testRide:label.alternatePhoneNo")}
                  </h4>
                  <span className="text-xs text-gray-400">
                    ({t("common:optional")})
                  </span>
                </div>

                <MobileNumber
                  placeholder={t("testRide:placeHolder.alternatePhoneNo")}
                  value={customerAlternatePhone}
                  handleChange={callAlt}
                  name="customerAlternatePhone"
                  error={errors?.customerAlternatePhone?.message}
                  reference={register}
                  disabled={isSubmitted}
                />
              </div>
            </div>
          </div>
          {isSubmitted && <VerifyOtp navigation={navigation} />}
          <div>{!isSubmitted ? <ErrorList /> : null}</div>
          {!isSubmitted ? (
            <div
              className="flex flex-wrap justify-between sm:items-end sm:justify-end mt-8 sm:mt-20
  space-x-10 "
            >
              <Button handleClick={previous} theme="yellow-outlined">
                {t("testRide:buttonTxt.back")}
              </Button>
              <Button
                theme="yellow-contained"
                disabled={
                  !(
                    customerFirstName &&
                    customerLastName &&
                    customerPhone &&
                    customerEmail &&
                    drivingLicenceNo
                  )
                }
                handleClick={handleSubmitData}
                type="submit"
              >
                {t("testRide:buttonTxt.submit")}
              </Button>
            </div>
          ) : null}
        </form>
        <div className="md:text-center w-full justify-start flex flex-row md:justify-end md:ml-6  pb-5 sm:pb-5 pt-6">
          <h6 className="text-yellow-300 text-xs whitespace-nowrap">
            {t("testRide:label.termsCondition")}
          </h6>
        </div>
      </div>
    </section>
  );
};
