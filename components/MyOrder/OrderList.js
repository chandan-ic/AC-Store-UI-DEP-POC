import React from "react";
import { useTranslation } from "next-i18next";
import { Button } from "components/Common/Controls";
import { OrderItems } from "components/MyOrder/OrderItems";

export const OrderList = () => {
  const { t } = useTranslation(["common", "myorder"]);

  return (
    <div className="shadow-lg border-2 border-b-0 p-5">
      <div className="flex justify-between items-start flex-wrap border-b-2 pb-3">
        <div>
          <h3
            className="bg-gray-100 p-3 rounded-full font-bold pl-5 flex flex-wrap"
            style={{ width: "fit-content" }}
          >
            {t("myorder:labels.orderNumber")}
            <a href="#" className="text-blue-600 underline pl-5 pr-5">
              #0987654
            </a>
          </h3>
          <h3 className="pl-5 mt-3">
            {t("myorder:labels.paymentstatus")} :{"   "}
            <span className="text-green-500 font-bold">
              {t("myorder:labels.done")}
            </span>
            {"   "}
            <span className="text-red-500 font-bold">
              {t("myorder:labels.waiting")}
            </span>
            {"   "}
            <span className="text-red-500 font-bold">
              {t("myorder:labels.pending")}
            </span>
            {"   "}
            <span className="text-yellow-500 font-bold">
              {t("myorder:labels.partialPaid")}
            </span>
          </h3>
        </div>
        <div>
          <p className=" pl-5 text-gray-400 mt-3">
            {t("myorder:labels.orderPlaced")}: Thu 17, November 2021
          </p>

          <Button
            theme={"  ml-4 border-b-2 border-yellow-400  pl-1 pr-1"}
            themeType="icon"
            handleClick={() => {}}
          >
            {t("myorder:btnText.makePayment")}
          </Button>
        </div>
      </div>
      <div>
        <OrderItems />
      </div>
    </div>
  );
};
