import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from "components/Common/Controls";
import { getSelectedDealer } from "utils/helper/storeHelper";
import { getVariantNameWithSno } from "utils/helper/storeHelper";
import { numberToINR } from "utils/helper/dateFunc";

export const OrderItems = () => {
  const { t } = useTranslation(["common", "booking"]);
  const dispatch = useDispatch();
  const { selectedDealer, product,selectedVariant } = useSelector((state) => state.booking);

  const dealer = getSelectedDealer(selectedDealer);

const variant = getVariantNameWithSno(selectedVariant);
  return (
    <div>
      {[1].map((item, i) => (
        <div
          className="block justify-between items-center flex-wrap border-b-2 py-3 px-5 md:flex w-full"
          key={i}
        >
          <div className="h-60 w-56 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/images/BAJAJ/DOMINAR400/dominar400-img-05-big.jpg"
            />
          </div>
          <div className="flex-grow w-80 max-w-full p-5 pl-0 pr-0 sm:pl-5 sm:pr-10">
            <h2 className=" w-full ">
            {product?.productName}  {variant?.variantName ? "| " + getVariantNameWithSno(selectedVariant)?.variantName:""} | Conyon red with black stripes |
        Petrol | Manual | ABS
            </h2>
            <div className="pt-3">
              <h3>{t("common:labels.dealerName")} : {dealer.LocationName}</h3>
              <h3>{t("common:labels.dealerPhone")} : {dealer.Phone}</h3>
              <h3>{t("common:labels.dealerEmail")} : {dealer.Email}</h3>
            </div>
            <div className="flex flex-row mt-5 justify-start">
              <div className="p-3">
                <Switch
                  id={`finance_${i}`}
                  label="Finance Required"
                  onChange={() => {}}
                />
              </div>
              <div className="p-3">
                <Switch
                  id={`exchange${i}`}
                  label="Exchange Required"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className=" mr-0 sm:mr-14">
            <h3>{t("booking:labels.exShowRoomPrice")}</h3>
            <h3 className="font-medium">{numberToINR(variant?.standardPrice,0)}</h3>
            <h3 className="mt-3">{t("booking:labels.onRoadPrice")}</h3>
            <h3 className="font-bold">{numberToINR(variant?.maximumRetailPrice,0)}</h3>
            
          </div>
        </div>
      ))}
    </div>
  );
};
