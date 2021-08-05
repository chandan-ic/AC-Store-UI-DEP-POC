import React from "react";
import { getBikeBrands } from "utils/helper/storeHelper";
import { DropDownList } from "../Controls";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

export const BikeBrand = ({ bikeBrand, onBrandChanged, disabled }) => {
  const { t } = useTranslation(["testRide", "common"]);
  const { isLoaded } = useSelector((state) => state.master);
  const brands = getBikeBrands();
  return (
    <>
      {isLoaded ? (
        <div>
          <div className="flex flex-row items-center">
            <h4 className="trFET"> {t("testRide:label.brand")}</h4>
            <span className="text-xs text-gray-400">
              {t("common:labels.opt-required")}
            </span>
          </div>
          <div className="w-full mt-4">
            <DropDownList
              defaultValue={t("testRide:placeHolder.brand")}
              value={bikeBrand}
              list={brands}
              idKey="BrandCode"
              valueKey="Brand"
              onChange={onBrandChanged}
              disabled={disabled}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
