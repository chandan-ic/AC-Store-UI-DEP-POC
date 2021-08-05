import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "components/Search/store/search-slice";
import { Radio } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

export const SearchByFuel = () => {
  const fuelType = useSelector((state) => state.search.fuelType);
  const dispatch = useDispatch();
  const [isUpdated, setUpdated] = useState(false);
  const { t } = useTranslation(["search"]);

  const handleValueChange = (value) => {
    dispatch(searchActions.setFuelType(value));
  };

  const fuel = [
    { id: "Petrol", value: t("search:label.petrol") },
    { id: "Diesel", value: t("search:label.diesel") },
    { id: "Electricity", value: t("search:label.electricity") },
  ];

  useEffect(() => {
    setUpdated(!isUpdated);
  }, [fuelType]);

  return (
    <div id="brand" className="sm:py-2 space-x-5">
      <h4 className="pl-14  uppercase text-sm text-gray-800  sm:py-2  py-2.5 sm:pl-2  font-bold  sm:border-b-0  border-gray-200 border-b-2 tracking-widest ">
        {t("search:label.fuelType")}
      </h4>
      <Radio
        value={fuelType}
        options={fuel || []}
        name="fuel-type"
        direction="col"
        handleChange={handleValueChange}
        textKey="value"
        valueKey="id"
        disabled={true}
      />
    </div>
  );
};
