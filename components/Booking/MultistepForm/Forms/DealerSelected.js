import React from "react";
import { useTranslation } from "next-i18next";
import { BookingDealer } from "components/Common/Component";
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedDealer } from "utils/helper/storeHelper";



export const DealerSelected = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const { selectedDealer } = useSelector((state) => state.booking);

  const dealer = getSelectedDealer(selectedDealer);


  return (
    <div className="mt-5">
      <h2>{t("booking:labels.SelectedDealerstore")}</h2>
      <div className=" relative w-full">
      { dealer === null?
        <div className="border-2 border-yellow-400 mt-5 h-44 flex items-center justify-center font-bold">
          <p>{t("booking:labels.noDealer")}</p>  
        </div>:
       <BookingDealer
       dealer={dealer}
       handleDealerSelected={() => {}}
       dealerCode={selectedDealer}
       hideSelectDealer={true}
     />}
        
      </div>
    </div>
  );
};
