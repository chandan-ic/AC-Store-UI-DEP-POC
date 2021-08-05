import React from "react";
import { useTranslation } from "next-i18next";
import { Radio } from "../Controls";

export const Dealer = ({
  dealer,
  handleDealerSelected,
  dealerCode,
  hideSelectDealer = false,
}) => {
  const { t } = useTranslation(["testRide", "common"]);

 

  const dispDCode = () => {
    handleDealerSelected(dealer?.LocationSlno);
  };

  const radioInput = [
    {
      value: dealer?.LocationSlno,
      text: "",
    },
  ];

  return (
    <div className="flex flex-col border-gray-200 border-b-2 mt-3 md:mt-0  ">
      <div>
        <ul className="bg-white  p-2 w-96 lg:p-6 h-auto m-b-2 m-t-2  lg:w-80 ">
          <li className="flex  align-middle">
            <svg
              className="block  w-6 h-6"
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
            <h4 className="align-middle dpL pl-2 uppercase text-base tracking-wider pt-0 pb-1 font-bold ">
              {dealer.LocationName}{" "}
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
            <span className="pl-3 text-sm tracking-wide">{dealer.Phone} </span>
          </li>
          <li className="flex pb-2">
            <svg
              className="w-4 h-4 ml-1"
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
            <span className="pl-3 text-sm tracking-wide">{dealer.Email} </span>
          </li>
          <li className="flex pb-2">
            <svg
              className="w-8 h-8 ml-1"
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
            </svg>
            <span className="md:pl-3 text-sm pl-1 tracking-wide">
              {dealer.Address}
              <br /> {dealer.City} -{dealer.PinCode}, {dealer.State}.
            </span>
          </li>
        </ul>
      </div>
      {!hideSelectDealer ? (
        <div className="float-right">
          <div className="w-40 float-right">
            <div className=" flex flex-row items-center justify-end ">
              <div className="-mr-5 flex-grow">
                {t("testRide:dealers.selectDealer")}
              </div>
              <div className="flex-grow">
                <Radio
                  value={dealerCode}
                  options={radioInput}
                  name="dealerCode"
                  handleChange={dispDCode}
                  textKey="text"
                  valueKey="value"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
