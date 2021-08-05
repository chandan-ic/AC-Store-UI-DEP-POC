import { Dealer, DealersList } from "components/Common/Component";
import { sendDealerDataRequest } from "components/Common/store/dealerData/dealerData-action";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getModalSNo,
  getSelectedDealer,
} from "utils/helper/storeHelper/masterDataHelper";

const DealerResult = () => {
  const { bikeVariant, dealerCode, pinCode, searchDealersBy, rideCity } =
    useSelector((state) => state.testRide);
  const { dealersData, isLoaded } = useSelector((state) => state.dealers);
  const [dealerData, setDealerData] = useState([]);
  const [selectedDealer, setSelectedDealer] = useState(null);

  const dispatch = useDispatch();
  const { t } = useTranslation(["testRide", "common"]);

  useEffect(() => {
    const selectDealer = getSelectedDealer(Number(dealerCode));
    setSelectedDealer(selectDealer);
  }, [dealerCode]);

  useEffect(() => {
    setDealerData(dealersData?.data);
  }, [dealersData]);

  useEffect(() => {
    var data = JSON.stringify({
      modelSlno: getModalSNo(bikeVariant),
      filterType: searchDealersBy === "CTY" ? "C" : "P",
      filterValue: searchDealersBy === "CTY" ? String(rideCity) : pinCode,
    });
    setDealerData(null);
    dispatch(sendDealerDataRequest(data));
  }, []);

  const handleDealerSelected = (value) => {
    dispatch(testRideActions.setDealerCode(value));
  };

  return (
    <div>
      {isLoaded && (
        <div className="bg-white md:border md:border-yellow-300">
          <div className=" w-full h-full mt-3  ">
            {dealerData && dealerData.length !== 0 ? (
              <p className="px-2">
                {dealerData && dealerData.length}{" "}
                {t("testRide:dealers.dealerResult")}
              </p>
            ) : (
              <p className="px-2">{t("testRide:dealers.noDealer")}</p>
            )}
          </div>

          <div className="flex flex-wrap flex-col-reverse lg:flex-row overflow-auto">
            <div className="w-full  lg:w-1/2 sm:w-100  overflow-x-visible overflow-y-auto mb-5 md:overflow-auto ">
              <DealersList
                dealerData={dealerData}
                handleDealerSelected={handleDealerSelected}
                dealerCode={dealerCode}
              />
            </div>
            {selectedDealer !== null ? (
              <div className="border border-yellow-700  lg:w-1/2 mt-5 pl-5 lg:border-none sm:w-100">
                <p className="text-yellow-700 mt-3">
                  {t("testRide:dealers.selectedDealer")}
                </p>
                <Dealer
                  dealer={selectedDealer}
                  hideSelectDealer={true}
                  dealerCode={dealerCode}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default DealerResult;
