import { Button } from "components/Common/Controls";
import { myOrderAction } from "components/MyOrder/store/myOrder-slice";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export const OrderItems = () => {
  const { t } = useTranslation(["common", "myorder"]);
  const dispatch = useDispatch();

  return (
    <div>
      {[1, 2, 3].map((item, i) => (
        <div
          className="block justify-between items-center flex-wrap border-b-2 py-3 px-5 md:flex w-full"
          key={i}
        >
          <div className="h-60 w-56 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/images/BAJAJ/DOMINAR400/dominar400-img-05-big.jpg"
            />
          </div>
          <div className="flex-grow w-80 max-w-full p-5 pl-0 pr-0 sm:pl-5 sm:pr-10">
            <h2 className=" w-full ">
              DOMINAR 250 Limited Edition | Canyon Red with black Stripes | 2021
              | Manual | Petrol | ABS | BS VI
            </h2>
            <h4 className="font-normal">
              {t("myorder:labels.soldBy")} : Khivraj
            </h4>
            <h4 className="font-normal">{t("myorder:labels.qty")} : 1</h4>
            <h3 className="font-medium">
              {t("myorder:labels.itemTotal")} ₹ 2,55,000
            </h3>
          </div>
          <div className=" mr-0 sm:mr-14">
            <h4 className="font-normal">{t("myorder:labels.status")}</h4>
            <div className="text-green-500 font-bold">
              {t("myorder:labels.delivered")}
            </div>

            <div className="text-yellow-500 font-bold">
              {t("myorder:labels.transit")}
            </div>

            <div className="flex items-end ">
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                className="mb-2 mr-1"
              >
                <path
                  d="M15.25 7.91602C15.25 13.4577 8.125 18.2077 8.125 18.2077C8.125 18.2077 1 13.4577 1 7.91602C1 6.02635 1.75067 4.21408 3.08686 2.87788C4.42306 1.54168 6.23533 0.791016 8.125 0.791016C10.0147 0.791016 11.8269 1.54168 13.1631 2.87788C14.4993 4.21408 15.25 6.02635 15.25 7.91602Z"
                  stroke="#F7A30B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.375 10.75C9.68668 10.75 10.75 9.68668 10.75 8.375C10.75 7.06332 9.68668 6 8.375 6C7.06332 6 6 7.06332 6 8.375C6 9.68668 7.06332 10.75 8.375 10.75Z"
                  stroke="#F7A30B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Button
                theme={"pb-0 border-b-2 border-yellow-400  pl-1  pr-1  "}
                themeType="icon"
                handleClick={() => {}}
              >
                {t("myorder:labels.track")}
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-normal">
              {t("myorder:labels.deliveryExcept")}
            </h4>
            <h4>24 December 2021</h4>
          </div>
        </div>
      ))}
      <div class="flex flex-col-reverse justify-between items-center mt-3 flex-wrap sm:flex-row ">
        <Button
          theme={" flex "}
          handleClick={() => {
            dispatch(myOrderAction.setOpenModal(true));
          }}
        >
          <svg x="0px" y="0px" viewBox="0 0 492 492" className="h-3 pr-2 mt-1">
            <g>
              <g>
                <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z" />
              </g>
            </g>
          </svg>
          {t("myorder:btnText.cancelOrder")}
        </Button>
        <h3 className="font-medium">
          {t("myorder:labels.orderTotal")} : ₹ 2,55,000
        </h3>
      </div>
    </div>
  );
};
