import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "components/Search/store/search-slice";
import { getSearchFeature } from "utils/helper/storeHelper/searchDataHelper";
import { CheckBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

export const SearchByFeature = () => {
  const feature = useSelector((state) => state.search.feature);
  const dispatch = useDispatch();
  const features = getSearchFeature();
  const { t } = useTranslation(["search"]);

  const handleValueChange = (value) => {
    dispatch(searchActions.setSelectedSpecialFeature([...value]));
  };
  return (
    <div className="flex flex-col space-x-3 sm:py-2 pb-2">
      <h4 className="pl-2  uppercase text-sm text-gray-800 sm:text-left sm:py-2  py-2.5 sm:px-0 text-center font-bold  sm:border-b-0 sm:pl-2  border-gray-200 border-b-2 tracking-widest">
        {t("search:label.specialFeatures")}
      </h4>
      <CheckBox
        value={feature}
        options={features || []}
        name="search-feature"
        direction="col"
        handleChecked={handleValueChange}
        textKey="SpecialFeature"
        valueKey="SpecialFeatureCode"
      />
    </div>
  );
};
