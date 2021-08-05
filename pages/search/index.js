import React, { useEffect, useState } from "react";
import { SearchFilter } from "components/Search/SearchFilter";
import { SearchSideBar } from "components/Search/SearchSideBar";
import { VehicleList } from "components/Search/VehicleList";

import { VehicleCard } from "components/Search/SearchVehicle";
import { SearchTopBar } from "components/Search/SearchTopBar";
import { useDispatch } from "react-redux";
import { server } from "config";
import { searchRequest } from "components/Search/store/search-action";
import { searchActions } from "components/Search/store/search-slice";
import { getSearchPayload } from "utils/helper/storeHelper";
import { Button } from "components/Common/Controls";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Search(searchMasterData) {
  const { t } = useTranslation(["search"]);
  const dispatch = useDispatch();
  const [isLoaded, setLoaded] = useState(false);
  const [filters, setFilters] = useState(false);

  useEffect(() => {
    dispatch(
      searchActions.setSearchMasterData(
        searchMasterData.searchMasterData.responseData.data
      )
    );
    setLoaded(true);
  }, []);

  useEffect(() => {
    const data = getSearchPayload();
    console.log("search payload = ",data)
    dispatch(searchRequest(data));
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="pt-20">
          <div className=" w-full sm:border-l-0 shadpow-inner  ">
            <SearchTopBar />
          </div>
          <div className=" w-full flex sm:flex-row flex-col ">
            <div className="border border-gray-100 m-2 p-2 ">
              <div className="sm:block hidden">
                <SearchFilter />
              </div>
              <div className="sm:hidden block ">
                <Button
                  themeType="icon"
                  handleClick={() => {
                    setFilters(!filters);
                  }}
                  theme={`bg-gray-100 whitespace-nowrap  focus:outline-none  sm:w-min text-xs  uppercase block leading-normal py-5 px-2 tracking-widest  w-full sm:w-auto text-left sm:text-center`}
                >
                  <span className="flex flex-row items-center justify-between sm:block pointer-events-none">
                    <span className="pointer-events-none">
                      {t("search:label.filters")}
                    </span>
                    <span className={`pointer-events-none`}>
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
                    </span>
                  </span>
                </Button>

                {filters ? <SearchSideBar /> : null}
              </div>

              <div className="sm:block hidden ">
                <SearchSideBar />
              </div>
            </div>
            <div className="container sm:p-2">
              {/* <SearchHeader /> */}
              <div className="sm:pt-2">
                <VehicleList />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(`${server}/Master/api/v1/master/get/variantSearch`);
  const searchMasterData = await res.json();
  if (searchMasterData.isSuccess) {
    return {
      props: {
        searchMasterData,
        ...(await serverSideTranslations(locale, ["search", "common"])),
      },
    };
  }
};
