import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqObject } from "../../../../utils/apicalls";
import SelectPaymentUI from "../../Booking-UI/selectPaymentUI";
import {
  getOnRoadPriceAPI,
  sendPaymentRequest,
} from "../../store/booking-actions";
import { bookingActions } from "../../store/booking-slice";

const SelectPayment = ({ navigation, bike, bookingMaster }) => {
  const { previous, next } = navigation;

  const [finTp, setFinTp] = useState([]);
  const [DLRFin, setDLRFin] = useState([]);

  const dispatch = useDispatch();
  const {
    INS,
    bookingDTLS,
    financierName,
    financierAddress,
    financierCode,
    bikePrice,
  } = useSelector((state) => state.booking);

  const sendPayRequest = () => {
    const data = JSON.stringify({
      basedOn: "PAY",
      modelCode: bookingBike,
      variantCode: productVariant,
      colorCode: currentActive,
      locationCode: dealerCode,
      financeType: financeType,
      financierName: financierName,
      financierAddress: financierAddress,
      financierCode: financierCode,
      exchangeRequired: exchangeRequired,
      phone: "9036940842",
      preOrderNo: preOrderNo,
      additionalServices: [RtO, EW, INS, RsA],
    });
    dispatch(sendPaymentRequest(data));
  };

  useEffect(() => {
    dispatch(bookingActions.setBookingCurrentStep("4"));
  }, []);
  useEffect(() => {
    dispatch(getOnRoadPriceAPI(reqObject));
  }, []);

  const changeFinType = (e) => {
    setFinTp(e.target.value);
    dispatch(bookingActions.setFinanceType(e.target.value));
    if (e.target.value === "CSH") {
      dispatch(bookingActions.setFinancierCode(null));
      dispatch(bookingActions.setFinancierName(null));
      dispatch(bookingActions.setFinancierAddress(null));
    } else if (e.target.value === "DLR") {
      dispatch(bookingActions.setFinancierName(null));
      dispatch(bookingActions.setFinancierAddress(null));
    }
  };

  const changeFinancer = (e) => {
    setDLRFin(e.target.value);
    dispatch(bookingActions.setFinancierCode(e.target.value));
  };
  const changeFinName = (e) => {
    dispatch(bookingActions.setFinancierName(e.target.value));
  };
  const changefinAddress = (e) => {
    dispatch(bookingActions.setFinancierAddress(e.target.value));
  };
  // dispatch(setINS({...INS,referenceCode:bookingMaster.Insurance.InsurerCode}))

  return (
    <SelectPaymentUI
      bike={bike}
      bookingMaster={bookingMaster}
      bookingDTLS={bookingDTLS}
      finTp={finTp}
      handlePrevious={previous}
      handleNext={() => (next(), sendPayRequest())}
      handleFinanceType={(val) => changeFinType(val)}
      handleFinancer={(val) => changeFinancer(val)}
      handleFinancierName={(val) => changeFinName(val)}
      handleFinancierAddress={(val) => changefinAddress(va)}
    />
  );
};
export default SelectPayment;
