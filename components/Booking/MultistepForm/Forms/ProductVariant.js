import { bookingActions } from "components/Booking/store/booking-slice";
import { DropDownFilter, Radio } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberToINR } from "utils/helper/dateFunc";

export const ProductVariant = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const dispatch = useDispatch();

  const { product, selectedVariant } = useSelector((state) => state.booking);

  const [varData, setVarData] = useState([...product?.variantList]);

  return (
    <div className="mt-10 ml-10">
      <div className="flex justify-between relative flex-wrap">
        <h2 className="flex-grow-1">{t("booking:labels.SelectVariant")}</h2>

        <div>
          <DropDownFilter
            width="w-56"
            defaultValue="0 Items Selected"
            list={[product?.fuelType, product?.transmissionType]}
            idKey={["fuelTypeSlno", "transmissionSlno"]}
            keyVal={["fuelTypeSlno", "transmissionTypeSlno"]}
            valueKey={["fuelType", "transmissionType"]}
            title={["Fuel Type", "Transmisson"]}
            data={product?.variantList}
            onChange={(values) => {
              setVarData([...values]);
            }}
          />
        </div>
      </div>

      <hr className="my-2" />
      <div>
        {varData &&
          varData.map((variant, i) => {
            let data = [{ text: "", value: variant?.variantSlno }];
            return (
              <div
                key={i}
                className="flex flex-row justify-between border-b-2 pb-5"
              >
                <div className="mt-5 flex flex-row">
                  <div className="flex-shrink-0">
                    <Radio
                      value={selectedVariant}
                      options={data}
                      name="dealer-search"
                      handleChange={(val) => {
                        dispatch(bookingActions.setSelectedVariant(val));
                      }}
                      textKey="text"
                      valueKey="value"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="font-bold">{variant.variantName}</h4>
                    <h6 className="font-bold text-yellow-500">
                      {t("booking:labels.Limited")}
                    </h6>
                    <h6 className="font-bold text-red-500">
                      {t("booking:labels.Available")}
                    </h6>
                    <h6 className="font-bold text-green-500">
                      {t("booking:labels.NotAvailable")}
                    </h6>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm text-gray-500 mt-6">
                    {t("booking:labels.ExShowRoom")}
                  </h5>
                  <h5 className="font-bold">
                    {numberToINR(variant.standardPrice, 0)}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
};
