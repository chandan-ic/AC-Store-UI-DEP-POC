import React from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";

export default function SelectBike({
  bike,
  variants,
  handleNext,
  handleChange,
  bookingBike,
  productVariant,
}) {
  const { t } = useTranslation(["booking", "error", "common"]);
  const handleRadioChange = (e) => {
    handleChange(e.target.value);
  };
  const callNext = () => {
    handleNext();
  };
  //selectedbikeImage
  const bikeSelect = () => {
    return (
      <div className="relative flex flex-col h-full">
        <div className=" ">
          {
            <Image
              layout="fill"
              objectFit="contain"
              src={bike.Features_Group_Main_Image}
            />
          }
        </div>
        {/* <div className=" mt-10">
                    <h1 className="text-lg tracking-widest uppercase font-bold w-full ">{bike.ACName}</h1>
                </div> */}
      </div>
    );
  };

  const showVariants = () => {
    return (
      <div className="md:h-60  border-t-2 border-gray-300 overscroll-contain p-2">
        {variants &&
          variants.map((v, i) => (
            <div className="sm:mt-5  md:divide-y-2 md:divide-gray-200">
              <div className="w-full pb-5 sm:pb-0">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="radio"
                    name="bikeVariant"
                    checked={v.VariantCode === productVariant}
                    className="border-2 border-gray-500 form-radio h-5 w-5 text-yellow-300"
                    value={v.VariantCode}
                    onChange={(e) => handleRadioChange(e)}
                  />
                  <span className="ml-2 text-yellow-700">{v.Variant}</span>
                </label>
                <h6 className="pl-8 tracking-wide">
                  {t("booking:labels.ExShowroomText")}{" "}
                  <span className="font-semibold text-sm">
                    {" "}
                    Rs.{v.UnitPrice}{" "}
                  </span>{" "}
                </h6>
              </div>
            </div>
          ))}
      </div>
    );
  };

  //Details
  const bikeDetails = () => (
    <div className=" sm:p-4 overflow-y-auto">
      <div className="mt-2">
        <h3 className="font-LibreFranklin w-full py-3 px-2 font-semibold border-t-2 border-b-2 sm:border-b-0 sm:border-t-0 border-gray-200 text-xs tracking-widest uppercase">
          {t("booking:labels.selected-bike")}
        </h3>
        <h1 className="text-lg tracking-widest uppercase font-bold w-full  p-2">
          {bike.ACName}
        </h1>
        <h6 className=" w-full text-sm tracking-wide p-2">
          {bike.description}
        </h6>
      </div>
      <div className="overflow-y-auto">{variants && showVariants()}</div>
    </div>
  );

  const selectBtn = () => (
    <div className="inline-flex items-center pr-4">
      <button
        onClick={callNext}
        className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
      >
        {t("booking:buttonLabels.btn-next")}
      </button>
    </div>
  );

  return (
    <section className=" h-full w-full  items-center">
      <div className="flex flex-col h-full w-full">
        {!bookingBike && <div>{t("booking:labels.bike-not-selected")}</div>}
        <div className="h-5/6 flex md:flex-row flex-col  w-full md:divide-x-2 md:divide-yellow-100">
          <div className="w-full md:w-4/6 h-full">
            {bookingBike && bikeSelect()}{" "}
          </div>
          <div className="w-full md:w-2/6">{bookingBike && bikeDetails()}</div>
        </div>
        <div className="border-t-2 border-yellow-100 h-1/6 flex w-full justify-end">
          {selectBtn()}
        </div>
      </div>
    </section>
  );
}
