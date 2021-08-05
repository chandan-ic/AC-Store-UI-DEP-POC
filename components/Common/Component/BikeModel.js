import React, { useState, useEffect } from "react";
import { DropDownList } from "../Controls";
import { getBikeModels } from "utils/helper/storeHelper";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

export const BikeModel = ({
  bikeBrand,
  bikeVariant,
  onModelChanged,
  disabled,
}) => {
  const { t } = useTranslation(["testRide", "common"]);
  const { isLoaded } = useSelector((state) => state.master);

  const [models, setModels] = useState([]);
  useEffect(() => {
    setModels(getBikeModels(bikeBrand));
  }, [bikeBrand]);

  return (
    <>
      {isLoaded ? (
        <div>
          <div className="flex flex-row align-middle">
            <h4 className="trFET"> {t("testRide:label.model")}</h4>
            <span className="text-xs text-gray-400">
              {t("common:labels.opt-required")}
            </span>
          </div>
          <div className="w-full mt-4">
            <DropDownList
              defaultValue={t("testRide:placeHolder.model")}
              value={bikeVariant}
              list={models}
              idKey="ModelCode"
              valueKey="Model"
              onChange={onModelChanged}
              disabled={disabled}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
