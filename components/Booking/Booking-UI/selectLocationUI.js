import { Radio } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React from "react";
import { TR_SEARCHBY_DEALER } from "utils/constant/testRide/testRide";
import BookingDealers from "../bookingDealer";
import BookingCityDealers from "../cityDealers";

const LocationUI = ({
  handleNext,
  handlePrevious,
  handleChange,
  selectedDealerCode,
  searchDealersBy,
  searchBy,
}) => {
  const { t } = useTranslation(["booking", "error", "common"]);

  const handleRadioChange = (selectedOptionValue) => {
    handleChange(selectedOptionValue);
  };
  const callNext = () => {
    handleNext();
  };
  const callPrevious = () => {
    handlePrevious();
  };

  const selectedDealer = () =>
    selectedDealerCode &&
    selectedDealerCode.map((s, i) => (
      <div key={i}>
        <div className="flex flex-col">
          <div>
            <ul className="bg-white p-6 h-auto m-b-2 m-t-2">
              <li className="flex pb-2 align-middle">
                <svg
                  className="block -ml-2 align-middle w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="align-middle dpL ml-1 uppercase text-sm tracking-wider pt-2 pb-4 font-bold">
                  {s.LocationName}{" "}
                </h4>
              </li>
              <li className="flex pb-2">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="pl-3 text-sm tracking-wide">{s.Phone} </span>
              </li>
              <li className="flex pb-2">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span className="pl-3 text-sm tracking-wide">{s.Email} </span>
              </li>
              <li className="flex pb-2">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="pl-3 text-sm tracking-wide">
                  {s.Address}
                  <br /> {s.City} -{s.PinCode}, {s.State}.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));

  const selectBtn = () => (
    <div className="inline-flex justify-end space-x-4 md:pr-8 pr-4 w-full mt-4">
      <button
        onClick={callPrevious}
        className=" w-33 border-1 border-transparent rounded hover:border-gray-500 focus:outline-none text-yellow-500 text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
      >
        {t("common:buttonLabels.btn-prev")}
      </button>
      <button
        onClick={callNext}
        className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
      >
        {t("booking:buttonLabels.btn-next")}
      </button>
    </div>
  );

  return (
    <section className=" h-full w-full flex flex-col md:flex-row items-center">
      <div className=" flex flex-col h-full w-full ">
        <div className=" h-5/6 flex flex-col md:flex-row w-full divide-x-2 divide-yellow-100">
          <div className="w-full md:w-4/6 overflow-y-auto">
            <div className="flex sm:flex-row h-full w-full flex-col shadow-sm sm:divide-x-4 divide-gray-400">
              <div className="w-full h-full  m:ml-5 ">
                <div>
                  <div className="flex flex-row ">
                    <h4 className="trFET">
                      {t("booking:labels.search-dealers-by")}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {t("booking:labels.opt-required")}
                    </span>
                  </div>
                  <Radio
                    value={searchDealersBy}
                    options={TR_SEARCHBY_DEALER}
                    name="dealer-search"
                    handleChange={handleRadioChange}
                    textKey="text"
                    valueKey="value"
                  />
                  {searchBy === "CTY" && <BookingCityDealers />}
                  {searchBy === "PIN" && <BookingDealers />}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/6">
            <h5 className="p-4 trFET font-bold">
              {t("booking:labels.selected-Dealer")}
            </h5>
            <div>{selectedDealer()}</div>
          </div>
        </div>
        <div className="border-t-2 border-yellow-100 h-1/6 ">{selectBtn()}</div>
      </div>
    </section>
  );
};
export default LocationUI;
