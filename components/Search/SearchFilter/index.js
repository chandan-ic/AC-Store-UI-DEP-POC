import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "components/Search/store/search-slice";
import { searchRequest } from "components/Search/store/search-action";
import { getSearchPayload } from "utils/helper/storeHelper";
import { useTranslation } from "next-i18next";
import {
  getCategoryCodeToValue,
  getBrandSlnoToName,
} from "utils/helper/storeHelper/searchDataHelper";

export const SearchFilter = () => {
  const brand = useSelector((state) => state.search.brand);
  const categoryType = useSelector((state) => state.search.categoryType);
  const { t } = useTranslation(["search"]);

  const feature = useSelector((state) => state.search.feature);

  const dispatch = useDispatch();

  const clearAll = (e) => {
    e.preventDefault();
    dispatch(searchActions.clearFilterValue());
    const data = getSearchPayload();
    dispatch(searchRequest(data));
  };

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col w-full  sm:w-60 border border-gray-100 bg-gray-100 rounded sm:bg-none">
        <div className="sm:inline-flex sm:justify-between p-2 sm:p-0">
          <h4 className="h-9 mt-2 flex-none  bg-gray-100 text-center sm:w-min text-xs  uppercase px-5 py-2 rounded block leading-normal m-2 tracking-widest sm:block hidden">
            {t("search:label.filters")}
          </h4>
          {/* <div className="sm:hidden flex justify-between ">
            <button
              onClick={onShowDivClick}
              className="bg-white inline-flex items-center
 relative focus:outline-none border w-28 border-gray-200 uppercase font-Montserrat h-10 sm:hidden 
 rounded-md shadow-xs px-4 text-sm"
            >
              {t("search:label.filter")}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={onShowClick}
              className="bg-white inline-flex items-center
 relative focus:outline-none border w-28 border-gray-200 uppercase font-Montserrat h-10 sm:hidden 
 rounded-md shadow-xs px-2 text-sm"
            >
              {t("search:label.sortBy")}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
          <button
            className="h-9 mt-2 flex-none md:bg-gray-100  text-center w-28 lg:w-min text-xs whitespace-nowrap uppercase px-2 py-2 rounded block leading-normal md:m-2 tracking-widest focus:outline-none border-2"
            onClick={clearAll}
          >
            {t("search:buttonTxt.clearAll")}
          </button>
        </div>

        <div className=" justify-between  hidden sm:block">
          {brand &&
            brand.map((br, i) => (
              <div
                key={i}
                className="whitespace-nowrap border border-gray-400 rounded w-min m-1 p-1 inline-flex space-x-3 mr-2"
              >
                <h6 className=" uppercase text-center px-4 pt-1">
                  <span key={i}>{getBrandSlnoToName(br)}</span>{" "}
                </h6>
              </div>
            ))}

          {feature &&
            feature.map((ssf, i) => (
              <div
                key={i}
                className="whitespace-nowrap border border-gray-400 rounded w-min m-1 p-1 inline-flex space-x-3 mr-2"
              >
                <h6 className="uppercase text-center px-4 pt-1 ">{ssf} </h6>
              </div>
            ))}
          {categoryType && (
            <div className="whitespace-nowrap border border-gray-400 rounded w-min m-1 p-1 inline-flex space-x-3 mr-2">
              <h6 className="uppercase text-center px-4 pt-1">
                {getCategoryCodeToValue(categoryType)}
              </h6>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
