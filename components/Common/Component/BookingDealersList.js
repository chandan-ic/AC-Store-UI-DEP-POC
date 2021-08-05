import React from "react";
import { BookingDealer } from "./BookingDealer";

export const BookingDealersList = ({
  dealerData,
  handleDealerSelected,
  dealerCode,
}) => {
  return (
    <div className=" w-full pl-5 ">
      <div className=" pr-3">
        {dealerData &&
          dealerData.map((dealer, i) => (
            <div key={i}>
              <BookingDealer
                dealer={dealer}
                handleDealerSelected={(val) =>handleDealerSelected(val)}
                dealerCode={dealerCode}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
