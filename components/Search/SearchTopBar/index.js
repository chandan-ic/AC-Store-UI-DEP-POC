import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRequest } from "components/Search/store/search-action";
import { getSearchPayload } from "utils/helper/storeHelper";
import { searchActions } from "components/Search/store/search-slice";
import { useTranslation } from "next-i18next";
import { Button } from "components/Common/Controls";

export const SearchTopBar = () => {
  const { t } = useTranslation(["search"]);
  const [showAll, setShowAll] = useState(false);

  const { categoryType, searchMasterData } = useSelector(
    (state) => state.search
  );

  const dispatch = useDispatch();
  const Category = searchMasterData?.Category;

  const allSearchData = () => {
    const data = getSearchPayload();
    dispatch(searchActions.setSeletedCategoryType(null));
    dispatch(searchRequest(data));
    if (categoryType === null) {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  };

  const dispCategoryCode = (e) => {
    dispatch(searchActions.setSeletedCategoryType(e.target.value));
    if (categoryType === e.target.value) {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  };

  const showAllCategory = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const data = getSearchPayload();
    dispatch(searchRequest(data));
  }, [categoryType]);

  return (
    <div className="shadow-inner">
      <div
        className="flex flex-col sm:flex-row justify-center 
 shadow-inner align-middle break-words flex-wrap border-gray-100 border-2 "
      >
        <div className="mt-2 px-2 lg:border-r-0 lg:border-gray-50  md:border-b-0 border-b-2 ">
          <div className="flex flex-row items-center justify-between ">
            <Button
              themeType="icon"
              value={null}
              handleClick={allSearchData}
              theme={`${
                categoryType === null || showAll
                  ? "bg-gray-100 block"
                  : "sm:block hidden"
              } mb-2 whitespace-nowrap  focus:outline-none  sm:w-min text-xs  uppercase block leading-normal py-5 px-2 tracking-widest  w-full sm:w-auto text-left sm:text-center`}
            >
              <span className="flex flex-row items-center justify-between sm:block pointer-events-none">
                <span className="pointer-events-none">
                  {t("search:label.all")}
                </span>
                <span
                  className={`${
                    categoryType === null ? "block" : "hidden"
                  } sm:hidden pointer-events-none`}
                >
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
            <span className="block sm:hidden pointer-events-none">
              {/* <Button
                handleClick={showAllCategory}
                themeType="icon"
                theme="focus:outline-none"
                tabIndex="-1"
              >
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
              </Button> */}
            </span>
          </div>
        </div>

        {Category &&
          Category.map((c, i) => (
            <div
              key={i}
              className={`${
                categoryType === c.CategoryCode || showAll
                  ? "block"
                  : "hidden sm:flex"
              }  px-2 lg:border-r-0 lg:border-gray-50  md:border-b-0 border-b-2 flex `}
            >
              <div className="flex flex-row items-center justify-between w-full">
                <Button
                  themeType="icon"
                  value={c.CategoryCode}
                  handleClick={dispCategoryCode}
                  theme={`${
                    categoryType === c.CategoryCode ? "bg-gray-100 " : ""
                  }mb-2 whitespace-nowrap  focus:outline-none  sm:w-min text-xs  uppercase block leading-normal py-5 px-2 tracking-widest w-full sm:w-auto text-left sm:text-center`}
                >
                  <span className="flex flex-row items-center justify-between sm:block pointer-events-none">
                    <span className="pointer-events-none">
                      {c.Category}
                      <h6 className="text-xs text-gray-500 32xl:tracking-widest sm:pl-0 pl-12r">
                        {c.SubTitle}
                      </h6>
                    </span>
                    <span
                      className={`${
                        categoryType === c.CategoryCode ? "block" : "hidden"
                      } sm:hidden pointer-events-none`}
                    >
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
                {/* <div className="block sm:hidden">
                  <Button
                    handleClick={showAllCategory}
                    themeType="icon"
                    theme="focus:outline-none"
                    tabIndex="-1"
                  >
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
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
