import { useTranslation } from "next-i18next";
import React from "react";
import { getVariantNameWithSno } from "utils/helper/storeHelper";
import { numberToINR } from "utils/helper/dateFunc";
import { useSelector } from 'react-redux';
import { Radio } from "components/Common/Controls";


export const OrderBilling = () => {
  const { t } = useTranslation(["common", "booking"]);
  const { selectedVariant } = useSelector((state) => state.booking);
  const variant = getVariantNameWithSno(selectedVariant);

  const handleValueChange = (value) => {
    // dispatch(searchActions.setFuelType(value));
  };

  const fuel = [
    { id: "razorPay", value: "RazorPay" },
   
  ];

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="px-5">
      <h2 className="font-bold py-3 text-center">
        {t("booking:labels.billingSummary")}
      </h2>
      <div>
        <h4 className="font-normal ">
          {t("booking:labels.name")} :{" "}
          <span className="font-bold">{user?.customerFullName}</span>
        </h4>
        <h4 className="font-normal ">
          {t("booking:labels.mobile")} :{" "}
          <span className="font-bold">{user?.customerMobileNo}</span>
        </h4>
        <h4 className="font-normal ">
          {t("booking:labels.email")} :{" "}
          <span className="font-bold">{user?.customerEmailId}</span>
        </h4>
      </div>
      <div className="mt-3">
        <h5 className="pt-3 pb-1 text-center underline border-b-2">
          {t("booking:labels.orderValue")}
        </h5>
        <div>
          <div className="flex w-full justify-between py-2">
            <div width="150px ">{t("booking:labels.itemTotal")}</div>
            <div className="font-bold">{numberToINR(variant?.maximumRetailPrice,0)}</div>
          </div>
          <div className="flex w-full justify-between py-2">
            <div width="150px">{t("booking:labels.discounts")}</div>
            <div className="font-bold">- {numberToINR(0,0)}</div>
          </div>
          <div className="flex w-full justify-between py-2">
            <div width="150px">{t("booking:labels.deliveryCharges")}</div>
            <div className="font-bold">{numberToINR(0,0)}</div>
          </div>
          <div className="flex w-full justify-between py-3 border-b-2 border-t-2">
            <div width="150px">{t("booking:labels.totalOrderValue")}</div>
            <div className="font-bold">{numberToINR(variant?.maximumRetailPrice,0)}</div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="pt-3 pb-1 text-center underline border-b-2">
          {t("booking:labels.PayableNow")}
        </h5>
        <div className="flex w-full justify-between py-2">
          <div width="150px">{t("booking:labels.bookingAmount")}</div>
          <div className="font-bold text-yellow-600">{numberToINR(5000,0)}</div>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="pt-3 pb-1 text-center underline border-b-2">
          {t("booking:labels.selectPaymentType")}
        </h5>
      
      <Radio
        value="razorPay"
        options={fuel || []}
        name="fuel-type"
        direction="col"
        handleChange={handleValueChange}
        textKey="value"
        valueKey="id"
        disabled={true}
      />
      </div>
    </div>
  );
};
