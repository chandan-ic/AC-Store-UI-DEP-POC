import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputRange from "react-input-range";
import { getSearchMaxMinCC } from "utils/helper/storeHelper/searchDataHelper";
import { searchActions } from "components/Search/store/search-slice";
import { useTranslation } from "next-i18next";

export const SearchByEngine = () => {
  const { t } = useTranslation(["search"]);
  const minEngineCC = useSelector((state) => state.search.minEngineCC);
  const maxEngineCC = useSelector((state) => state.search.maxEngineCC);

  const dispatch = useDispatch();

  const engineMinMaxValue = getSearchMaxMinCC();

  const dispVal = (val) => {
    dispatch(searchActions.setSeletedMinEngineCC(val.min));
    dispatch(searchActions.setSeletedMaxEngineCC(val.max));
  };

  return (
    <div className="">
      <div className="flex flex-col sm:py-4 sm:p-4 ">
        <h4 className="pl-2  uppercase text-sm text-gray-800 sm:text-left sm:pl-0 sm:py-2  py-2.5 sm:px-0 text-center font-bold  sm:border-b-0  border-gray-200 border-b-2 tracking-widest">
          {t("search:label.engineCC")}
        </h4>
        <div className="sm:w-5/6 w-3/4 pl-4 ml-7 pt-14 sm:pt-4 sm:ml-0">
          <InputRange
            maxValue={engineMinMaxValue.Maximum}
            minValue={engineMinMaxValue.Minimum}
            value={{
              min: minEngineCC || engineMinMaxValue.Minimum,
              max: maxEngineCC || engineMinMaxValue.Maximum,
            }}
            onChange={(value) => dispVal(value)}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around py-4 sm:mt-4 mt-6">
        <div className="border border-black  sm:w-20 sm:h-7 py-1 sm:p-1 p-2 pt-2 text-xs focus:outline-none text-center text-gray-500">
          {minEngineCC ? minEngineCC : engineMinMaxValue.Minimum}
        </div>
        {/* <h6>-to-</h6> */}
        <div className="border border-black sm:w-20 sm:h-7 py-1 sm:p-1 p-2 text-xs focus:outline-none text-center text-gray-500">
          {maxEngineCC ? maxEngineCC : engineMinMaxValue.Maximum}
        </div>
      </div>
    </div>
  );
};
