import React from "react";
import { useTranslation } from "next-i18next";
import { BookingDealersList } from "components/Common/Component";
import { useSelector, useDispatch } from 'react-redux';
import { bookingActions } from "components/Booking/store/booking-slice";


export const DealerAvailable = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const { dealersData } = useSelector((state) => state.dealers);
  const { selectedDealer } = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  
  return (
    <div className="mt-5  pl-5">
      <h2>{t("booking:labels.SuggestedDealerstores")}</h2>
      <div className=" relative w-full">
        {dealersData?.length === 0 || dealersData === null?
        <div className="border-2 border-yellow-400 mt-5 h-44 flex items-center justify-center font-bold">
          <p>{t("booking:labels.noSelectedDealer")}</p>  
        </div>:
        <BookingDealersList
          dealerData={dealersData?.data || []}
          handleDealerSelected={(val) => { 
            dispatch(bookingActions.setSelectedDealer(val))
          }}
          dealerCode={selectedDealer}
        />}
        
      </div>
    </div>
  );
};
