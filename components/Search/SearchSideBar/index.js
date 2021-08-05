import React, { useState } from "react";
import { SearchByBrands } from "./SearchByBrands";
import { SearchByPrice } from "./SearchByPrice";
import { SearchByEngine } from "./SearchByEngine";
import { SearchByFeature } from "./SearchByFeature";
import { SearchByFuel } from "./SearchByFuel";

export const SearchSideBar = () => {
  return (
    <div className="">
      <div className="w-full border border-gray-100 bg-gray-50 mb-3 rounded ">
        <SearchByBrands />
      </div>
      <div className="w-full border border-gray-100 bg-gray-50  mb-3 rounded ">
        <SearchByPrice />
      </div>
      <div className="w-full border border-gray-100 bg-gray-50  mb-3 rounded ">
        <SearchByEngine />
      </div>
      <div className="w-full border border-gray-100 bg-gray-50  mb-3 rounded ">
        <SearchByFeature />
      </div>
      <div className="w-full border border-gray-100 bg-gray-50  mb-3 rounded ">
        <SearchByFuel />
      </div>
    </div>
  );
};
