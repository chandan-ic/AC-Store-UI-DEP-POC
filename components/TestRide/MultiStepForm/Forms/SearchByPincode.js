import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "components/Common/Component";
import { TextBox } from "components/Common/Controls";
import { errorActions } from "components/Common/store/error/error-slice";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { trPincodeFormschema } from "utils/validation/testRide";
import DealerResult from "./DealerResult";

export const SearchByPincode = () => {
  const schema = trPincodeFormschema();
  const { pinCode, dealerCode } = useSelector((state) => state.testRide);
  const [ShowDealerResults, setShowDealerResults] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation(["testRide", "common"]);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setShowDealerResults(true);
  };

  const disPin = (value) => {
    dispatch(errorActions.resetErrors());
    setShowDealerResults(false);
    dispatch(testRideActions.setDealerCode(null));
    if (value === "") {
      dispatch(testRideActions.setPinCode(null));
    } else dispatch(testRideActions.setPinCode(value));
  };

  useEffect(() => {
    if (dealerCode) {
      setShowDealerResults(true);
    }
  }, []);

  return (
    <div>
      <div>
        <div className="w-full flex flex-row ">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="flex flex-row flex-wrap  mt-5">
                <h2 class="trFET">{t("testRide:label.pincode")}</h2>
                <span class="text-xs text-gray-400 ml-1 ">
                  {t("common:labels.opt-required")}
                </span>
              </div>
              <div className="flex flex-row w-full h-full  ">
                <TextBox
                  title=""
                  option=""
                  value={pinCode}
                  handleChange={disPin}
                  name="pincode"
                  error={errors?.pincode?.message}
                  reference={register}
                />
                <button
                  type="submit"
                  disabled={!pinCode}
                  className="bg-theme text-theme-inverse h-9 mt-1 rounded-md  px-4 focus:outline-none focus:ring-1 focus:ring-yellow-300 shadow-sm"
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
          {ShowDealerResults && <DealerResult />}
        </div>
      </div>
    </div>
  );
};
