import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export const ProductAccessory = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const { accData } = useSelector((state) => state.booking);

  return (
    <div className="mt-10 ml-10 bg-gray-200 p-5">
      <h2>{t("booking:labels.accessory")}</h2>
      <div className="flex flex-row mt-5">
        {accData &&
          accData.map((acc, i) => (
            <div key={i}>
              <div>
                <Image height={100} width={100} src={acc.img} />
              </div>
              <Link href="#">
                <a className="underline text-blue-500">{acc.name}</a>
              </Link>
              <h3>₹ {acc.price}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};
