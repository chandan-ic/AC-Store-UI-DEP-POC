import { bookingActions } from "components/Booking/store/booking-slice";
import { useTranslation } from "next-i18next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProductColor = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const dispatch = useDispatch();

  const { product, selectedColor } = useSelector((state) => state.booking);

  console.log(product, "msg")

  return (
    <div className="mt-10">
      <h2>{t("booking:labels.SelectColor")}</h2>
      <hr className="my-2" />
      <div className="flex">
        {product?.color &&
          product?.color.map((color, i) => (
            <button
              className="focus:outline-none"
              onClick={() => {
                dispatch(bookingActions.setSelectedColor(color?.colorSlno));
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                key={i}
                className={`h-8 w-8 m-5 mt-2 rounded-full   ${
                  color?.colorSlno === selectedColor
                    ? "border-4 border-yellow-500"
                    : ""
                }`}
              >
                <ellipse cx="10" cy="10" rx="10" ry="10" fill="#F087E2" />
              </svg>
              <p>{color.colorName}</p>
            </button>
          ))}
      </div>
      <hr />
    </div>
  );
};
