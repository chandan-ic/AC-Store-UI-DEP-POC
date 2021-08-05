import { useTranslation } from "next-i18next";
import React from "react";

const DealerResultUI = ({ dealers, handleChange }) => {
  const { t } = useTranslation(["booking", "error", "common"]);

  const dispDCode = (val) => {
    handleChange(val);
  };

  return (
    <div className="mb-4 w-full">
      <div className=" w-full h-full">
        <p className="px-2 py-2 font-LibreFranklin">
          {t("booking:labels.select-dealer-caption")}
        </p>
      </div>
      <div className="w-full ">
        <div className=" h-96 w-full flex flex-wrap mt-2 ">
          <div className=" flex flex-wrap justify-around space-y-2 w-full ">
            {!dealers.length ? <p> {t("booking:labels.Loading-text")} </p> : ""}
            {dealers.map((d, i) => (
              <div
                key={i}
                className="mt-2   flex flex-col w-96 bg-white border-gray-200 border-2"
              >
                <div>
                  <ul className=" p-4 h-auto ">
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
                        {d.LocationName}{" "}
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
                      <span className="pl-3 text-sm tracking-wide">
                        {d.Phone}{" "}
                      </span>
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
                      <span className="pl-3 text-sm tracking-wide">
                        {d.Email}{" "}
                      </span>
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
                      <span className="pl-3 text-sm ">
                        {d.Address}
                        {d.City} -{d.PinCode}, {d.State}.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className=" flex justify-end items-end  mr-4 pb-2">
                  <label className="inline-flex items-center">
                    <span className="mr-2">{t("booking:labels.sel-Deal")}</span>
                    <input
                      checked={d.LocationCode === dealerCode}
                      onChange={dispDCode}
                      type="radio"
                      className="form-radio border-2 border-gray-200 text-yellow-400"
                      name="LocationCode"
                      value={d.LocationCode}
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerResultUI;
