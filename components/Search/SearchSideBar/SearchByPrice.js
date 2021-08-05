import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { getSearchMaxMinPrice } from "utils/helper/storeHelper/searchDataHelper";
import { searchActions } from "components/Search/store/search-slice";
import { useTranslation } from "next-i18next";

export const SearchByPrice = () => {
  const maxPrice = useSelector((state) => state.search.maxPrice);
  const minPrice = useSelector((state) => state.search.minPrice);
  const { t } = useTranslation(["search"]);

  const dispatch = useDispatch();

  const searchMinMaxPrice = getSearchMaxMinPrice();

  const dispVal = (val) => {
    dispatch(searchActions.setSeletedMinPrice(val.min));
    dispatch(searchActions.setSeletedMaxPrice(val.max));
  };

  return (
    <div className="flex flex-col sm:py-4 sm:p-4">
      <h4 className="pl-2  uppercase text-sm text-gray-800  sm:py-2 sm:text-left sm:pl-0 py-2.5 sm:px-0 text-center font-bold sm:border-b-0  border-gray-200 border-b-2 tracking-widest">
        {t("search:label.price")}
      </h4>
      <div className="sm:w-5/6 w-3/4 pl-4 ml-5 pt-14 sm:pt-4 sm:ml-0">
        <InputRange
          maxValue={searchMinMaxPrice.Maximum}
          minValue={searchMinMaxPrice.Minimum}
          value={{
            min: minPrice || searchMinMaxPrice.Minimum,
            max: maxPrice || searchMinMaxPrice.Maximum,
          }}
          onChange={(value) => dispVal(value)}
        />
      </div>
      <div className="flex flex-row justify-around py-4 sm:mt-6 mt-6">
        <div className="border border-black  sm:w-20 sm:h-7 py-1 h-7 sm:p-1 p-1 text-xs focus:outline-none text-center text-gray-500">
          {minPrice ? minPrice : searchMinMaxPrice.Minimum}
        </div>
        <div className="border border-black  sm:w-20 sm:h-7 text-center py-1 h-7 sm:p-1 p-1 text-xs focus:outline-none text-gray-500">
          {maxPrice ? maxPrice : searchMinMaxPrice.Maximum}
        </div>
      </div>
    </div>
  );
};
