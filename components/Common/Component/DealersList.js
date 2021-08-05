import React from "react";
import { Dealer } from "./Dealer";

export const DealersList = ({
  dealerData,
  handleDealerSelected,
  dealerCode,
}) => {
  return (
    <div className=" w-full pl-5 ">
      <div className=" h-80 pr-3">
        {dealerData &&
          dealerData.map((dealer, i) => (
            <div key={i}>
              <Dealer
                dealer={dealer}
                handleDealerSelected={handleDealerSelected}
                dealerCode={dealerCode}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
