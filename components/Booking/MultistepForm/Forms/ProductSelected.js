import React, { useEffect, useState } from "react";
import { Switch } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getVariantNameWithSno } from "utils/helper/storeHelper";
import { bookingActions } from "components/Booking/store/booking-slice";

export const ProductSelected = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const { product, selectedVariant } = useSelector((state) => state.booking);
  const [changed, setChanged] = useState(false);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    setChanged(!changed);
  },[selectedVariant])

  return (
    <div className="mt-3 bg-gray-200 p-5">
      <h4 className="text-gray-500">{t("booking:labels.ProductSelected")}</h4>
      <h2 className="font-bold mt-5">
        {product?.productName}  {getVariantNameWithSno(selectedVariant)?.variantName ? "| " + getVariantNameWithSno(selectedVariant)?.variantName:""} | Conyon red with black stripes |
        Petrol | Manual | ABS
      </h2>
      <div className="flex flex-row mt-5 justify-start">
        <div className="p-3">
                  
          <Switch id="finance" label="Finance Required" onChange={(val) => {
            dispatch(bookingActions.setFinanceRequired(val))
          }}/>
        </div>
        <div className="p-3">
          <Switch id="exchange" label="Exchange Required" onChange={(val) => {
            dispatch(bookingActions.setExchangeRequried(val))

          }} />
        </div>
      </div>
    </div>
  );
};
