import { yupResolver } from "@hookform/resolvers/yup";
import { TextBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React from "react";
import { useForm } from "react-hook-form";
import { trPincodeFormschema } from "utils/validation/testRide";
import BookingDealerResult from "../bookingDealerResultCard";

const BookingDealersUI = ({ pinCode, ShowDealerResults, handleChange }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(trPincodeFormschema),
  });

  const { t } = useTranslation(["booking", "error", "common"]);

  const onSubmit = (values) => {};

  const disPin = (val) => {
    handleChange(val);
  };

  return (
    <div>
      <div>
        <div className="flex flex-row w-full h-full mt-5">
          <h4 className="trFET">{t("booking:lables.pincode")}</h4>
          <span className="text-xs text-gray-400">
            {t("booking:lables.required")}
          </span>
        </div>
        <div className="w-full flex flex-row">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row w-full h-full mt-5">
                <TextBox
                  value={pinCode}
                  handleChange={(val) => disPin(val)}
                  name="pincode"
                  error={errors?.pincode?.message}
                  reference={register}
                />
                <button
                  type="submit"
                  disabled={!pinCode}
                  className="mt-1 bg-theme text-theme-inverse h-9  px-4 focus:outline-none focus:ring-1 focus:ring-yellow-300 shadow-sm"
                >
                  {t("booking:buttonLabels-go")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" w-full h-full mt-3 bg-white ">
          {ShowDealerResults && <BookingDealerResult />}
        </div>
      </div>
    </div>
  );
};
export default BookingDealersUI;
