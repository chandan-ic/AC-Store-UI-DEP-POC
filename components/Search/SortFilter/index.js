import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "components/Search/store/search-slice";
import { TextBox, DropDownList } from "components/Common/Controls";

export const SortFilter = () => {
  const { sortBy, searchText, pageSize } = useSelector((state) => state.search);
  const { t } = useTranslation(["search"]);

  const dispatch = useDispatch();

  const callSortBy = (value) => {
    dispatch(searchActions.setSelectedSort(value));
  };

  const page = [
    { id: 10, value: 10 },
    { id: 20, value: 20 },
    { id: 30, value: 30 },
  ];

  const sort = [
    { id: "Price-asc", value: t("search:label.priceLow") },
    { id: "Price-desc", value: t("search:label.priceHigh") },
    { id: "Enginecc-asc", value: t("search:label.engineLow") },
    { id: "Enginecc-desc", value: t("search:label.engineHigh") },
  ];

  const changeSearchText = (value) => {
    dispatch(searchActions.setSearchText(value));
  };

  const changePageSize = (value) => {
    dispatch(searchActions.setPageSize(value));
  };

  return (
    <div>
      <div className="flex flex-row border border-gray-100 py-2 justify-between flex-wrap px-2">
        <div className="flex flex-row items-center flex-wrap ">
          <div className="flex flex-row py-2 ">
            <TextBox
              placeholder={""}
              value={searchText}
              handleChange={changeSearchText}
              name="search-text"
              error={""}
              reference={null}
              disabled={false}
              theme="-mt-3"
            />
            <svg
              width="20"
              height="18"
              fill="currentColor"
              className="mx-2 text-gray-400 mr-5"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </div>
          <div className="flex py-2">
            <DropDownList
              value={pageSize}
              list={page}
              idKey="id"
              valueKey="value"
              width="w-18"
              onChange={changePageSize}
            />
            <span className="w-40 ml-2">{t("search:label.perPage")}</span>
          </div>
        </div>
        <div className="flex items-center justify-end  mt-2">
          <h4 className="text-sm 32xl:tracking-widest sm:pl-0 text-black items-center md:pt-1 lg:pt-0.5 font-bold pr-2">
            {t("search:label.sortBy")}:{" "}
          </h4>
          <DropDownList
            value={sortBy}
            list={sort}
            idKey="id"
            valueKey="value"
            width="w-18 h-10"
            onChange={callSortBy}
          />
        </div>
      </div>
    </div>
  );
};
