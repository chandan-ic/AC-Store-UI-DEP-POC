import { yupResolver } from "@hookform/resolvers/yup";
import { BikeBrand, BikeModel, ErrorList } from "components/Common/Component";
import Timer from "components/Common/Component/OTPTimer";
import {
  Button,
  DropDownList,
  MobileNumber,
  Radio,
  Switch,
  TextBox,
} from "components/Common/Controls";
import { errorActions } from "components/Common/store/error/error-slice";
import { getStateCityRequest } from "components/Common/store/masterData/masterData-action";
import {
  createFinanceRequest,
  financeVerifyOtpRequest,
} from "components/FinanceEligibility/store/financeActions";
import { financeActions } from "components/FinanceEligibility/store/financeSlice";
import moment from "moment";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getBrandCodeToSno, getModelCodeToSno } from "utils/helper/storeHelper";
import { getCity, getStates } from "utils/helper/storeHelper/masterDataHelper";
import FinanceSchema from "utils/validation/financeValidation";

export const FinanceForm = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const {
    financeMasterData,
    firstName,
    lastName,
    stateSlno,
    citySlno,
    pinCode,
    dateOfBirth,
    mobileNo,
    emailId,
    likelyPurchaseDate,
    modelSlno,
    brandSlno,
    applicantType,
    monthlyIncomeDetails,
    gender,
    addressLine1,
    addressLine2,
    landMark,
    addressType,
    employmentType,
    documentSlno,
    documentNo,
    preferredTenureSlno,
    company,
    companyTenureSlno,
    isOtpVerified,
    isOtpSent,
  } = useSelector((state) => state.finance);

  const Tenure = financeMasterData.data.Tenure;
  const AddressType = financeMasterData.data.AddressType;
  const Gender = financeMasterData.data.Gender;
  const Documents = financeMasterData.data.Document;
  const ApplicantType = financeMasterData.data.ApplicantType;
  const EmploymentType = financeMasterData.data.EmploymentType;

  const dispatch = useDispatch();

  const { t } = useTranslation(["finance", "common", "error"]);
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const schema = FinanceSchema();
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const [city, setCity] = useState([]);
  const [states, setStates] = useState([]);

  const { isStateCityLoaded } = useSelector((state) => state.master);

  const watchAllFields = watch();

  useEffect(() => {
    dispatch(errorActions.resetErrors());
  }, [watchAllFields]);

  useEffect(() => {
    if (isOtpSent) {
      setVerify(isOtpSent);
      window.localStorage.removeItem("seconds");
    }
  }, [isOtpSent]);

  const submitFinancialData = () => {
    const modelSl = getModelCodeToSno(modelSlno);
    const brandSl = getBrandCodeToSno(brandSlno);
    const data = JSON.stringify({
      customerCode: "",
      firstName: firstName,
      lastName: lastName,
      stateSlno: stateSlno,
      citySlno: citySlno,
      pinCode: pinCode,
      dateOfBirth: dateOfBirth,
      mobileNo: mobileNo,
      emailId: emailId,
      likelyPurchaseDate: likelyPurchaseDate,
      modelSlno: modelSl,
      brandSlno: brandSl,
      applicantType: applicantType,
      monthlyIncomeDetails: Number(monthlyIncomeDetails),
      realtionTypeSlno: "",
      gender: gender,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      landMark: landMark,
      addressType: addressType,
      countrySlno: 1,
      locationStatus: "R",
      addressStatus: "P",
      monthsLivingInCurrentAddress: 24,
      employmentType: employmentType,
      documentSlno: documentSlno,
      documentNo: documentNo,
      preferredTenureSlno: Number(preferredTenureSlno),
      financierSlno: 1,
      preferredDownPaymentAmount: 20000,
      locationSlno: 1,
    });
    dispatch(createFinanceRequest(data));
  };

  const submitRequest = () => {
    const modelSl = getModelCodeToSno(modelSlno);
    const brandSl = getBrandCodeToSno(brandSlno);
    const data = JSON.stringify({
      customerCode: "",
      otp: otp,
      firstName: firstName,
      lastName: lastName,
      stateSlno: stateSlno,
      citySlno: citySlno,
      pinCode: pinCode,
      dateOfBirth: dateOfBirth,
      mobileNo: mobileNo,
      emailId: emailId,
      likelyPurchaseDate: likelyPurchaseDate,
      modelSlno: modelSl,
      brandSlno: brandSl,
      applicantType: applicantType,
      monthlyIncomeDetails: Number(monthlyIncomeDetails),
      realtionTypeSlno: "",
      gender: gender,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      landMark: landMark,
      addressType: addressType,
      countrySlno: 1,
      locationStatus: "R",
      addressStatus: "P",
      monthsLivingInCurrentAddress: 24,
      employmentType: employmentType,
      documentSlno: documentSlno,
      documentNo: documentNo,
      preferredTenureSlno: Number(preferredTenureSlno),
      financierSlno: 1,
      preferredDownPaymentAmount: 20000,
      locationSlno: 1,
    });
    dispatch(financeVerifyOtpRequest(data));
  };

  const onSubmit = (values) => {
    submitFinancialData();
  };

  useEffect(() => {
    if (isStateCityLoaded) {
      setStates(getStates());
    }
  }, [isStateCityLoaded]);

  useEffect(() => {
    if (isStateCityLoaded) {
      setCity(getCity(stateSlno));
    }
  }, [stateSlno]);

  useEffect(() => {
    dispatch(getStateCityRequest());
  }, []);

  const handleFirstNameChange = (val) => {
    dispatch(financeActions.setFirstName(val));
  };
  const handleLastNameChange = (val) => {
    dispatch(financeActions.setLastName(val));
  };
  const handleBrandChange = (val) => {
    dispatch(financeActions.setBrandSlno(val));
  };
  const handleModelChange = (val) => {
    dispatch(financeActions.setModelSlno(val));
  };
  const handlePurchaseDateChange = (val) => {
    if (moment.isDate(val)) {
      dispatch(financeActions.setLikelyPurchaseDate(val.toISOString()));
    }
  };

  const handleAddrTypeChange = (val) => {
    dispatch(financeActions.setAddressType(val));
  };

  const handleTenureChange = (val) => {
    dispatch(financeActions.setPreferredTenureSlno(val));
  };

  const handleDOBChange = (val) => {
    if (moment.isDate(val)) {
      dispatch(financeActions.setDateOfBirth(val.toISOString()));
    }
  };

  const handleIncomeChange = (val) => {
    dispatch(financeActions.setMonthlyIncomeDetails(val));
  };
  const handleStateChange = (val) => {
    dispatch(financeActions.setStateSlno(Number(val)));
  };
  const handleCityChange = (val) => {
    dispatch(financeActions.setCitySlno(Number(val)));
  };
  const handleAddress1Change = (val) => {
    dispatch(financeActions.setAddressLine1(val));
  };
  const handleAddress2Change = (val) => {
    dispatch(financeActions.setAddressLine2(val));
  };

  const handlePincodeChange = (val) => {
    dispatch(financeActions.setPinCode(val));
  };
  const handleMobileChange = (val) => {
    dispatch(financeActions.setMobileNo(val));
  };
  const handleEmailChange = (val) => {
    dispatch(financeActions.setEmailId(val));
  };
  const handleGenderChange = (val) => {
    dispatch(financeActions.setGender(val));
  };
  const handleLandmarkChange = (val) => {
    dispatch(financeActions.setLandMark(val));
  };
  const handleAppTypeChange = (val) => {
    dispatch(financeActions.setApplicantType(val));
  };
  const handleDocumentChange = (val) => {
    dispatch(financeActions.setDocumentSlno(Number(val)));
    dispatch(financeActions.setDocumentNo(""));
  };
  const handleDocNoChange = (val) => {
    dispatch(financeActions.setDocumentNo(val));
  };

  const handleEmpTypeChange = (val) => {
    dispatch(financeActions.setEmploymentType(val));
  };
  const handleCompanyChange = (val) => {
    dispatch(financeActions.setCompany(val));
  };

  const handleCompanyTenureChange = (val) => {
    dispatch(financeActions.setCompanyTenureSlno(val));
  };

  const callOtp = (value) => {
    setOtp(value);
  };

  return (
    <div className=" mb-4 container ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl md:text-2xl font-bold text-indigo-700 md:pb-6 pt-10 py-4">
          {t("finance:header.title")}{" "}
        </h1>
        <div className="flex flex-col border-2 border-gray-100 rounded-2xl bg-gray-100 p-5">
          <div className="-ml-2">
            <Radio
              value={applicantType}
              options={ApplicantType}
              name="applicantType"
              handleChange={(val) => handleAppTypeChange(val)}
              textKey="Value"
              valueKey="Code"
              disabled={isOtpSent}
            />
          </div>
          <h4 className="border-yellow-300 border-b-2  w-28 mt-6 font-semibold">
            {t("finance:labels.select-Bike")}
          </h4>
          <div className="flex md:flex-row flex-col w-full mt-6">
            <div className="md:w-1/2 lg:w-2/5 w-full pr-0 sm:pr-10">
              <BikeBrand
                bikeBrand={brandSlno}
                onBrandChanged={(value) => handleBrandChange(value)}
                disabled={isOtpSent}
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <BikeModel
                bikeBrand={brandSlno}
                bikeVariant={modelSlno}
                onModelChanged={(value) => handleModelChange(value)}
                disabled={isOtpSent}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6  pr-0 sm:pr-10">
              <div className="flex flex-row">
                <h2 className="trFET">
                  {t("finance:labels.cus-purchaseDate")}
                </h2>
                <span className="text-xs text-gray-400">
                  {t("finance:labels.opt-required")}
                </span>
              </div>
              <DatePicker
                className="border w-full px-3 border-gray-300 focus:outline-none mt-1.5 focus:ring-2 focus:ring-yellow-300 h-9"
                placeholderText={t("finance:placeholder.customer-purchaseD")}
                dateFormat="dd-MM-yyyy"
                selected={
                  likelyPurchaseDate !== null
                    ? new Date(likelyPurchaseDate)
                    : ""
                }
                onChange={(date) => handlePurchaseDateChange(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                minDate={tomorrow}
                disabled={isOtpSent}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-2 border-gray-100 rounded-2xl bg-gray-100 p-5 my-2">
          <h4 className="border-yellow-300 border-b-2 w-32 font-semibold">
            {t("finance:labels.Your-Details")}
          </h4>
          <div className="flex md:flex-row flex-col w-full mt-6">
            <div className="md:w-1/2 lg:w-2/5 w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
              <TextBox
                title={t("finance:labels.fname")}
                option={t("finance:labels.opt-required")}
                placeholder={t("finance:placeholder.customer-fname")}
                name="firstName"
                value={firstName}
                handleChange={(val) => handleFirstNameChange(val)}
                error={errors?.firstName?.message}
                reference={register}
                disabled={isOtpSent}
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 w-full  mt-6 md:mt-0  pr-0 sm:pr-10">
              <TextBox
                title={t("finance:labels.lname")}
                option={t("finance:labels.opt-required")}
                placeholder={t("finance:placeholder.customer-lname")}
                name="lastName"
                value={lastName}
                handleChange={(val) => handleLastNameChange(val)}
                error={errors?.lastName?.message}
                reference={register}
                disabled={isOtpSent}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full mt-6">
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <div className="flex flex-row">
                <h2 className="trFET">{t("finance:labels.cus-dob")}</h2>
                <span className="text-xs text-gray-400">
                  {t("finance:labels.opt-required")}
                </span>
              </div>
              <DatePicker
                className="border px-3 border-gray-300 focus:outline-none w-full mt-1.5 focus:ring-2 focus:ring-yellow-300 h-9"
                placeholderText={t("finance:placeholder.customer-dob")}
                selected={dateOfBirth !== null ? new Date(dateOfBirth) : ""}
                onChange={(date) => handleDOBChange(date)}
                peekNextMonth
                showMonthDropdown
                dateFormat="dd-MM-yyyy"
                showYearDropdown
                dropdownMode="select"
                disabled={isOtpSent}
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <div className="flex flex-row mb-3">
                <h2 className="trFET">{t("finance:labels.cus-gender")}</h2>
                <span className="text-xs text-gray-400">
                  {t("finance:labels.opt-required")}
                </span>
              </div>
              <Radio
                value={gender}
                options={Gender}
                name="gender"
                handleChange={(val) => handleGenderChange(val)}
                textKey="Value"
                valueKey="Code"
                disabled={isOtpSent}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full mt-6">
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <div className="flex flex-col md:flex-row">
                <h2 className="trFET">{t("finance:labels.cus-phone")}</h2>
                <span className="text-xs text-gray-400 ml-1 ">
                  {t("finance:labels.opt-required")}
                </span>
              </div>
              <MobileNumber
                placeholder={t("finance:placeholder.customer-phone")}
                value={mobileNo}
                handleChange={(val) => handleMobileChange(val)}
                name="mobileNo"
                error={errors?.mobileNo?.message}
                reference={register}
                disabled={isOtpSent}
              ></MobileNumber>
            </div>
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <TextBox
                title={t("finance:labels.cus-email")}
                option={t("finance:labels.opt-required")}
                placeholder={t("finance:placeholder.customer-email")}
                value={emailId}
                handleChange={(val) => handleEmailChange(val)}
                name="emailId"
                error={errors?.emailId?.message}
                reference={register}
                disabled={isOtpSent}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full mt-6">
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <TextBox
                title={t("finance:labels.net-Income")}
                option={t("finance:labels.opt-required")}
                placeholder={t("finance:placeholder.net-Income")}
                value={monthlyIncomeDetails}
                handleChange={(val) => handleIncomeChange(val)}
                name="monthlyIncomeDetails"
                error={errors?.monthlyIncomeDetails?.message}
                disabled={isOtpSent}
                reference={register}
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 pr-0 sm:pr-10">
              <div className="flex flex-row mb-3">
                <label className="trFET font-bold">
                  {t("finance:header.tenure-header")}
                </label>
                <span className="text-xs text-gray-400 ml-1 ">
                  {t("finance:labels.opt-required")}
                </span>
              </div>
              <DropDownList
                defaultValue={t("finance:placeholder.sel-tenure")}
                value={preferredTenureSlno || ""}
                list={Tenure}
                idKey="TenureSlno"
                valueKey="Tenure"
                onChange={(selected) => handleTenureChange(selected)}
                disabled={isOtpSent}
              />
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center mt-3 ml-1">
            <Switch
              id="finance"
              theme="font-bold"
              label={t("finance:labels.fastTrack")}
              onChange={(val) => {
                dispatch(financeActions.resetFastTrackDetails());
                setShow(val);
              }}
            />
          </span>

          <div
            className={`${
              show ? "bg-gray-100 rounded-2xl p-5 mt-5" : "hidden"
            } `}
          >
            <div className="flex flex-col mb-5 pb-5">
              <h4 className="border-yellow-300 border-b-2 w-28 font-semibold">
                {t("finance:labels.address")}
              </h4>
              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className="md:w-1/2 lg:w-2/5 w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <TextBox
                    title={t("finance:labels.addressLine1")}
                    option=""
                    placeholder={t("finance:placeholder.addressLine1")}
                    name="addressLine1"
                    value={addressLine1}
                    handleChange={(val) => handleAddress1Change(val)}
                    error={errors?.addressLine1?.message}
                    reference={register}
                    disabled={isOtpSent}
                  />
                </div>
                <div className="md:w-1/2 lg:w-2/5 w-full  mt-6 md:mt-0  pr-0 sm:pr-10">
                  <TextBox
                    title={t("finance:labels.addressLine2")}
                    option=""
                    placeholder={t("finance:placeholder.addressLine2")}
                    name="addressLine2"
                    value={addressLine2}
                    handleChange={(val) => handleAddress2Change(val)}
                    error={errors?.addressLine2?.message}
                    reference={register}
                    disabled={isOtpSent}
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className="md:w-1/2 lg:w-2/5 w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="flex flex-row items-center">
                    <h2 className="trFET"> {t("finance:labels.cus-state")}</h2>
                  </div>
                  <div className="w-full mt-4">
                    <DropDownList
                      defaultValue={t("finance:placeholder.customer-state")}
                      value={stateSlno.toString()}
                      list={states}
                      idKey="StateSlno"
                      valueKey="State"
                      onChange={handleStateChange}
                      disabled={isOtpSent}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-2/5 w-full  mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="flex flex-row align-middle">
                    <h2 className="trFET"> {t("finance:labels.cus-city")}</h2>
                  </div>
                  <div className="w-full mt-4">
                    <DropDownList
                      defaultValue={t("finance:placeholder.customer-city")}
                      value={citySlno.toString()}
                      list={city}
                      idKey="CitySlno"
                      valueKey="City"
                      onChange={handleCityChange}
                      disabled={isOtpSent}
                    />
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className="md:w-1/2 lg:w-2/5 w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <TextBox
                    title={t("finance:labels.pincode")}
                    option=""
                    placeholder={t("finance:placeholder.pincode")}
                    name="pincode"
                    value={pinCode}
                    handleChange={(val) => handlePincodeChange(val)}
                    error={errors?.pincode?.message}
                    reference={register}
                    disabled={isOtpSent}
                  />
                </div>
                <div className="md:w-1/2 lg:w-2/5 w-full  mt-6 md:mt-0  pr-0 sm:pr-10">
                  <TextBox
                    title={t("finance:labels.landmark")}
                    option=""
                    placeholder={t("finance:placeholder.landmark")}
                    name="landmark"
                    value={landMark}
                    handleChange={(val) => handleLandmarkChange(val)}
                    error={errors?.landmark?.message}
                    reference={register}
                    disabled={isOtpSent}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col my-5 pb-5">
              <h4 className="border-yellow-300 border-b-2 w-52 font-semibold">
                {t("finance:labels.identifyDetails")}
              </h4>
              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className=" w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="flex flex-row items-center">
                    <h2 className="trFET">
                      {t("finance:labels.cus-addrType")}
                    </h2>
                  </div>
                  <div className="w-full">
                    <Radio
                      value={addressType}
                      options={AddressType}
                      name="addressType"
                      handleChange={(val) => handleAddrTypeChange(val)}
                      textKey="Value"
                      valueKey="Code"
                      disabled={isOtpSent}
                    />
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className="md:w-1/2 lg:w-2/5 w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="flex flex-row items-center">
                    <h2 className="trFET"> {t("finance:labels.cus-IDdoc")}</h2>
                  </div>
                  <div className="w-full mt-3">
                    <DropDownList
                      defaultValue={t("finance:placeholder.customer-IDdoc")}
                      value={documentSlno.toString()}
                      list={Documents}
                      idKey="DocumentSlno"
                      valueKey="DocumentName"
                      onChange={handleDocumentChange}
                      disabled={isOtpSent}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-2/5 w-full  mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className={documentSlno === 2 ? "block" : "hidden"}>
                    <TextBox
                      title={t("finance:labels.cus-docNum")}
                      option=""
                      placeholder={t("finance:placeholder.customer-docNum")}
                      name="aadhar"
                      value={documentNo}
                      disabled={isOtpSent}
                      handleChange={(val) => handleDocNoChange(val)}
                      error={errors?.aadhar?.message}
                      reference={register}
                    />
                  </div>
                  <div className={documentSlno === 1 ? "block" : "hidden"}>
                    <TextBox
                      title={t("finance:labels.cus-docNum")}
                      option=""
                      placeholder={t("finance:placeholder.customer-docNum")}
                      name="pan"
                      value={documentNo}
                      disabled={isOtpSent}
                      handleChange={(val) => handleDocNoChange(val)}
                      error={errors?.pan?.message}
                      reference={register}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col  my-5 ">
              <h4 className="border-yellow-300 border-b-2 w-48 font-semibold">
                {t("finance:labels.educationDetails")}
              </h4>
              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className=" w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="w-full">
                    <Radio
                      value={employmentType}
                      options={EmploymentType}
                      name="employmentType"
                      handleChange={(val) => handleEmpTypeChange(val)}
                      textKey="Value"
                      disabled={isOtpSent}
                      valueKey="Code"
                    />
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row flex-col w-full mt-6">
                <div className="md:w-1/2 lg:w-2/5 w-full   mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="w-full">
                    <TextBox
                      title={t("finance:labels.cus-companyName")}
                      option=""
                      placeholder={t(
                        "finance:placeholder.customer-companyName"
                      )}
                      disabled={isOtpSent}
                      value={company}
                      handleChange={handleCompanyChange}
                      name="companyName"
                      error={errors?.companyName?.message}
                      reference={register}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-2/5 w-full  mt-6 md:mt-0  pr-0 sm:pr-10">
                  <div className="flex flex-row mb-3">
                    <h2 className="trFET">
                      {t("finance:labels.company-tenure")}
                    </h2>
                  </div>
                  <DropDownList
                    defaultValue={t("finance:placeholder.sel-tenure")}
                    value={companyTenureSlno || ""}
                    list={Tenure}
                    idKey="TenureCode"
                    valueKey="Tenure"
                    disabled={isOtpSent}
                    onChange={handleCompanyTenureChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>{!isOtpSent ? <ErrorList /> : null}</div>
          <div className="md:pt-16 pt-8 pb-6 flex justify-center lg:-ml-12">
            {isOtpSent ? (
              <Timer
                defaultValue={otp}
                onValChange={(val) => callOtp(val)}
                otp={otp}
                disabled={!otp}
                handleOnClick={submitRequest}
                handleRegenarate={submitFinancialData}
              />
            ) : (
              <Button
                width="w-72"
                theme="yellow-contained"
                type="submit"
                disabled={
                  firstName === "" ||
                  lastName === "" ||
                  dateOfBirth === null ||
                  gender === "" ||
                  mobileNo === "" ||
                  emailId === "" ||
                  monthlyIncomeDetails === 0 ||
                  monthlyIncomeDetails.trim() === "" ||
                  likelyPurchaseDate === null ||
                  modelSlno === 0 ||
                  brandSlno === 0 ||
                  preferredTenureSlno === 0
                }
                handleClick={(e) => {
                  submitFinancialData(e);
                }}
              >
                {t("finance:labels.finBtn-sub")}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
