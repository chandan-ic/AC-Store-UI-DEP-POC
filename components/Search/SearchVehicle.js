import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Router from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Pagination from "../Pagination/Pagination";

import { testRideActions } from "components/TestRide/store/testRide-slice";
import { bookingActions } from "components/Booking/store/booking-slice";

export const VehicleCard = () => {
  const modelResData = useSelector((state) => state.search.modelResData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(30);
  const { t } = useTranslation(["search"]);

  const dispatch = useDispatch();

  const brandData = modelResData.data;
  let brands;


  const handleTestRide = (e) => {
    e.preventDefault();
    dispatch(testRideActions.setBikeVariant(e.target.value));
    callBrand(e.target.value);
    dispatch(testRideActions.setPreselected(true));
    dispatch(testRideActions.setSelectedFunction("testRide"));
    Router.push(TEST_RIDE);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    dispatch(bookingActions.setBikeModel(e.target.value));
    brands = brandData.find((bD) => bD.ModelCode === bikeVariant);
    dispatch(bookingActions.setBikeBrand(brands.BrandSlno));
    Router.push("/booking");
  };

  const callBrand = (bikeVariant) => {
    brands = brandData.find((bD) => bD.ModelCode === bikeVariant);
    dispatch(testRideActions.setBikeBrand(brands.BrandCode));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [modelResData]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards =
    brandData && brandData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="">
      <div className="flex flex-col ">
        <div>
          {brandData && (
            <h5 className="text-sm sm:pl-8 tracking-widest sm:mt-0 mt-3 pl-2">
              {" "}
              Your Search Results:{" "}
              <span className="text-sm pl-1 font-bold">
                {brandData.length}{" "}
              </span>{" "}
              Matching Bikes
            </h5>
          )}
        </div>
        <div className="flex flex-wrap justify-around items-end ">
          {currentCards &&
            currentCards.map((mD, i) => (
              <div className=" flex sm:m-4 flex-col  mt-4  shadow-sm border-2 border-gray-100 sm:w-72 w-full ">
                <div className="flex flex-col sm:p-2">
                  <div className=" flex justify-center ">
                    <Link href={`/bikes/${mD.BikeUri}`}>
                      <a>
                        <img
                          className="sm:w-72 sm:h-44 w-full"
                          src={mD.PictureUri}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="text-center py-1">
                    <h4 className="font-bold text-xl ">{mD.Model}</h4>
                    <h5 className="font-bold text-lg">
                      Rs. {mD.MaxUnitPrice}/-
                    </h5>
                    <h6 className="text-xs text-gray-400">
                      {t("search:label.exShowRoomPrice")}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-row align-baseline">
                  <div className="flex flex-col border-2 bg-gray-200 w-1/2 sm:w-40 ">
                    <button
                      className="uppercase text-gray-700 font-bold text-sm text-center focus:outline-none"
                      value={mD.ModelCode}
                      onClick={(e) => handleTestRide(e)}
                    >
                      {" "}
                      <img className="w-7 h-7 m-auto" src="/images/ride.png" />
                      {t("search:buttonTxt.testRide")}
                    </button>
                  </div>

                  <div className="flex flex-col  bg-yellow-300 w-1/2 sm:w-40">
                  <button
                      className="uppercase text-gray-700 font-bold text-sm text-center focus:outline-none"
                      value={mD.ModelCode}
                      onClick={(e) => handleBooking(e)}
                    >
                      {t("search:buttonTxt.book")}
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-end mt-20 m-auto lg:block">
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={brandData && brandData.length}
            paginate={paginate}
            currentPageNo={currentPage}
          />
        </div>
      </div>
    </section>
  );
};
