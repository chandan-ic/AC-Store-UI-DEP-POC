import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const { product } = useSelector((state) => state.booking);

  return (
    <div className="mt-5">
      <h2>{t("booking:labels.ProductDetails")}</h2>
      <h3 className="my-2 text-center font-bold mt-5">
        {product?.productName}
      </h3>

      <div className="h-96 relative w-full">
        <Image
          layout="fill"
          objectFit="contain"
          src="/images/BAJAJ/DOMINAR400/dominar400-img-05-big.jpg"
        />
      </div>
    </div>
  );
};
