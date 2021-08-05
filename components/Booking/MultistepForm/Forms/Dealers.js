import { Button } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React,{ useEffect} from "react";
import { DealerAvailable, DealerSearch, DealerSelected } from ".";
import { bookingActions } from "components/Booking/store/booking-slice";
import { dealerDataActions } from "components/Common/store/dealerData/dealerData-slice";
import { useDispatch } from "react-redux";

export const Dealers = ({ navigation }) => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const dispatch = useDispatch();
  const { previous, next } = navigation;

  useEffect(()=>{
    dispatch(dealerDataActions.setDealerData(null));
    dispatch(bookingActions.setSelectedDealer(0));
  },[])

  return (
    <div className="container">
      <div className="flex flex-grow flex-wrap">
        <div className="w-full md:w-1/2">
          <DealerSearch />

          <DealerSelected />
        </div>
        <div className=" w-full md:w-1/2 border-l-2">
          <DealerAvailable />
        </div>
      </div>

      <div
        className="flex flex-wrap justify-between sm:items-end  sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-10
  space-x-10"
      >
        <Button
          handleClick={() => {
            dispatch(bookingActions.setCurrentstep(0));
            previous();
          }}
          theme="yellow-outlined"
        >
          {t("booking:buttonTxt.back")}
        </Button>

        <Button
          handleClick={() => {
            dispatch(bookingActions.setCurrentstep(2));
            next();
          }}
          disabled={false}
          theme="yellow-contained"
        >
          {t("booking:buttonTxt.next")}
        </Button>
      </div>
    </div>
  );
};
