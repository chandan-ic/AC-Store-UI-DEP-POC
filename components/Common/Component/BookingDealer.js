import { useTranslation } from "next-i18next";
import React from "react";
import { Radio } from "../Controls";

export const BookingDealer = ({
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
    <div className="flex flex-row mt-3  ">
      <div>
        {!hideSelectDealer ? (
          <div>
            <div>
              <div className=" flex flex-row items-center justify-end mt-2 ">
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
      <div>
        <ul className="bg-white  p-2 w-96  h-auto m-b-2 m-t-2  lg:w-80 ">
          <li className="mb-2">
            <h4>{dealer.LocationName}</h4>
          </li>
          <li >
            <div className="flex ">
              <div className="w-4">
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" className=" w-4"> 
              <path
                d="M15.25 7.91602C15.25 13.4577 8.125 18.2077 8.125 18.2077C8.125 18.2077 1 13.4577 1 7.91602C1 6.02635 1.75067 4.21408 3.08686 2.87788C4.42306 1.54168 6.23533 0.791016 8.125 0.791016C10.0147 0.791016 11.8269 1.54168 13.1631 2.87788C14.4993 4.21408 15.25 6.02635 15.25 7.91602Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.375 10.75C9.68668 10.75 10.75 9.68668 10.75 8.375C10.75 7.06332 9.68668 6 8.375 6C7.06332 6 6 7.06332 6 8.375C6 9.68668 7.06332 10.75 8.375 10.75Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </div>
            <span className="md:pl-3 text-sm pl-1 tracking-wide">
              {dealer.Address}
              <br /> {dealer.City} -{dealer.PinCode}, {dealer.State}.
            </span>
            </div>
            
          </li>
          <li className="flex pb-2 mt-2">
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
          <li className="flex pb-2 mt-1">
            <svg className="h-5" viewBox="0 0 50 50">
              <path d="M 0 7 L 0 43 L 50 43 L 50 7 Z M 2 9 L 48 9 L 48 11.53125 L 25 29.71875 L 2 11.53125 Z M 2 14.09375 L 24.375 31.78125 C 24.742188 32.074219 25.257813 32.074219 25.625 31.78125 L 48 14.09375 L 48 41 L 2 41 Z"></path>
            </svg>
            <span className="pl-3 text-sm tracking-wide">{dealer.Email} </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
