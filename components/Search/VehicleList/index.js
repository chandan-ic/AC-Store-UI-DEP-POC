import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "components/Pagination/Pagination";

import Router from "next/router";
import { searchRequest } from "components/Search/store/search-action";
import { getSearchPayload } from "utils/helper/storeHelper";
import Link from "next/Link";
import { SortFilter } from "components/Search/SortFilter";
import { useTranslation } from "next-i18next";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { TEST_RIDE,BOOKING } from "utils/constant/routerPath";
import {
  getBrandSno,
  getModelSno,
} from "utils/helper/storeHelper/masterDataHelper";
import { bookingActions } from "components/Booking/store/booking-slice";

export const VehicleList = () => {
  const {
    modelResData,
    brand,
    categoryType,
    minPrice,
    maxPrice,
    minEngineCC,
    maxEngineCC,
    specialFeatures,
    sortBy,
    totalCount,
    searchText,
    pageSize,
    active,
  } = useSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const dispatch = useDispatch();
  const [brandData, setBrandData] = useState([]);
  const { t } = useTranslation(["search"]);

  useEffect(() => {
    const data = getSearchPayload();
    dispatch(searchRequest(data));
  }, [
    brand,
    categoryType,
    minPrice,
    maxPrice,
    minEngineCC,
    maxEngineCC,
    specialFeatures,
    sortBy,
    searchText,
    pageSize,
    active,
  ]);

  const handleTestRide = (e) => {
    e.preventDefault();

    dispatch(
      testRideActions.setBikeVariant(getModelSno(Number(e.target.value)))
    );
    dispatch(testRideActions.setBikeBrand(getBrandSno(Number(e.target.id))));
    dispatch(testRideActions.setPreselected(true));
    Router.push(TEST_RIDE);
  };

  const handleBooking = (e) => {
    e.preventDefault();

    dispatch(
      bookingActions.setSelectedModel(Number(e.target.value))
    );
    dispatch(bookingActions.setSelectedBrand(Number(e.target.id)));
    Router.push(BOOKING);
  };

  useEffect(() => {
    setBrandData(modelResData);
    setCurrentPage(1);
  }, [modelResData]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="">
      <SortFilter />
      <div className="flex flex-col ">
        <div>
          {brandData && (
            <h5 className="text-sm sm:pl-8 tracking-widest sm:mt-0 mt-3 pl-2">
              {" "}
              {t("search:label.yourSearchResult")}{" "}
              <span className="text-sm pl-1 font-bold">
                {brandData.length}{" "}
              </span>{" "}
              {t("search:label.matchingBikes")}
            </h5>
          )}
        </div>
        <div className="flex flex-wrap justify-around items-end ">
          {modelResData
            ? modelResData.map((mD, i) => (
                <div
                  key={i}
                  className=" flex sm:m-4 flex-col  mt-4  shadow-sm border-2 border-gray-100 sm:w-72 w-full "
                >
                  <div className="flex flex-col sm:p-2">
                    <div className=" flex justify-center ">
                      <Link href={`/bikes/${mD.bikeUri}`}>
                        <a>
                          <img
                            className="sm:w-72 sm:h-44 w-full"
                            src={mD.pictureUri}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="text-center py-1">
                      <h4 className="font-bold text-xl ">{mD.model}</h4>
                      <h5 className="font-bold text-lg">
                        Rs. {mD.maxUnitPrice}/-
                      </h5>
                      <h6 className="text-xs text-gray-400">
                        *Ex Showroom price
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-row align-baseline">
                    <div className="flex flex-col border-2 bg-gray-200 w-1/2 sm:w-40 ">
                      <button
                        className="uppercase text-gray-700 font-bold text-sm text-center focus:outline-none"
                        value={mD.modelSlno}
                        id={mD.brandSlno}
                        onClick={(e) => handleTestRide(e)}
                      >
                        {" "}
                        <img
                          className="w-7 h-7 m-auto"
                          src="/images/ride.png"
                        />
                        TEST RIDE
                      </button>
                    </div>

                    <div className="flex flex-col  bg-yellow-300 w-1/2 sm:w-40">
                    <button
                        className="uppercase text-gray-700 font-bold text-sm text-center focus:outline-none mt-4"
                        value={mD.modelSlno}
                        id={mD.brandSlno}
                        onClick={(e) => handleBooking(e)}
                      >
                       
                        BOOK
                      </button>
                      
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="flex justify-center items-end mt-20 m-auto lg:block">
          {brandData.length ? (
            <Pagination
              cardsPerPage={cardsPerPage}
              totalCards={totalCount}
              paginate={paginate}
              currentPageNo={currentPage}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
