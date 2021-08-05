import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "components/Common/Component";
import { TextBox } from "components/Common/Controls";
import { errorActions } from "components/Common/store/error/error-slice";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { trLocationFormschema } from "utils/validation/testRide";
import DealerResult from "./DealerResult";

const CustomerLocation = () => {
  const testRideAddress = useSelector(
    (state) => state.testRide.testRideAddress
  );

  const { dealerCode } = useSelector((state) => state.testRide);
  const schema = trLocationFormschema();
  const [ShowDealerResults, setShowDealerResults] = useState(false);
  const pinCode = useSelector((state) => state.testRide.pinCode);

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const watchAllFields = watch();

  useEffect(() => {
    dispatch(errorActions.resetErrors());
  }, [watchAllFields]);

  const { t } = useTranslation(["testRide", "common"]);

  const dispAddress = (e) => {
    dispatch(testRideActions.setTestRideAddress(e.target.value));
  };
  const onSubmit = (values) => {
    setShowDealerResults(true);
  };

  const disPin = (value) => {
    if (value === "") {
      dispatch(testRideActions.setPinCode(null));
      dispatch(testRideActions.setDealerCode(null));
      setShowDealerResults(false);
    }
    dispatch(testRideActions.setPinCode(value));
    setShowDealerResults(false);
  };

  useEffect(() => {
    if (dealerCode) {
      setShowDealerResults(true);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="md:w-1/2 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block w-full md:w-4/5 ">
                <div className="flex flex-row">
                  <h4 className="trFET"> {t("testRide:label.address")}</h4>
                  <span className="text-xs text-gray-400">
                    {t("common:labels.opt-required")}
                  </span>
                </div>
                <textarea
                  name="address"
                  onChange={(e) => dispAddress(e)}
                  className="form-textarea border border-gray-300 mt-1 block w-full"
                  rows="3"
                  placeholder={t("testRide:placeHolder.address")}
                  ref={register}
                >
                  {testRideAddress}
                </textarea>
              </label>
              {errors.address && (
                <span className="text-red-600 text-xs">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div class="flex flex-row flex-wrap  mt-5">
              <h2 class="trFET">{t("testRide:label.pincode")}</h2>
              <span class="text-xs text-gray-400 ml-1 ">
                {t("common:labels.opt-required")}
              </span>
            </div>
            <div className="flex flex-row  ">
              <label className="block  w-full">
                <TextBox
                  title=""
                  option=""
                  value={pinCode}
                  handleChange={(val) => {
                    disPin(val);
                  }}
                  name="pincode"
                  error={errors?.pincode?.message}
                  reference={register}
                />
              </label>
              <button
                type="submit"
                className="mt-1 rounded-md bg-theme text-theme-inverse h-10  px-4 focus:outline-none focus:ring-1 focus:ring-yellow-300 shadow-sm"
              >
                {t("testRide:buttonTxt.go")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5">
        <ErrorList />
      </div>
      <div className=" w-full h-full mt-3 bg-white ">
        {pinCode && ShowDealerResults && <DealerResult />}
      </div>
    </div>
  );
};

export default CustomerLocation;
