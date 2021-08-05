import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "components/Search/store/search-slice";
import { getSearchBrand } from "utils/helper/storeHelper/searchDataHelper";
import { CheckBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

export const SearchByBrands = () => {
  const brand = useSelector((state) => state.search.brand);
  const dispatch = useDispatch();
  const brands = getSearchBrand();
  const [isUpdated, setUpdated] = useState(false);
  const { t } = useTranslation(["search"]);

  const handleValueChange = (value) => {
    dispatch(searchActions.setSelectedBrand(value));
  };

  useEffect(() => {
    setUpdated(!isUpdated);
  }, [brand]);

  return (
    <div id="brand" className="sm:py-2 space-x-5">
      <h4 className="pl-14  uppercase text-sm text-gray-800  sm:py-2  py-2.5 sm:pl-2  font-bold  sm:border-b-0  border-gray-200 border-b-2 tracking-widest ">
        {t("search:label.brands")}
      </h4>
      <CheckBox
        value={brand}
        options={brands || []}
        name="search-brand"
        direction="col"
        handleChecked={handleValueChange}
        textKey="Brand"
        valueKey="BrandSlno"
      />
    </div>
  );
};
