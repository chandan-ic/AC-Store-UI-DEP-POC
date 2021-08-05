import React, { useState, useEffect } from "react";
import { server } from "../../../../config";
import axios from "axios";
import { getPayButtonFromAPI, getPayButton } from "../../../../utils/apicalls";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from "../../store/booking-slice";
import OrderReviewUI from "../../Booking-UI/orderReviewUI";
import { getPaymentButtonDtls } from "../../store/booking-actions";

export default function OrderReview_1({ navigation }) {
  const {
    productVariant,
    paymentNo,
    paymentGatewayReferenceNo,
    currentActive,
    selectedDealerCode,
    bookingDTLS,
    clientKey,
    currency,
    transactionToName,
    customerName,
    customerPhone,
    razorPaySignature,
    customerEmail,
    bookingAmount,
    preOrderNo,
    razorPayOrderId,
    razorPaypaymentId,
  } = useSelector((state) => state.booking);

  const { previous, next } = navigation;

  const [payVia, setPayVia] = useState(null);
  const dispatch = useDispatch();

  const getPaymentBtnDtls = (payVia) => {
    const data = JSON.stringify({
      preOrderNo: bookingDTLS.preOrderNo,
      payVia: payVia,
    });
    dispatch(getPaymentButtonDtls(data));
    // var config = {
    //     method: 'post',
    //     url: `${server}/Booking/api/v1/Booking/payment`,
    //     headers: { 'Content-Type': 'application/json' },
    //     data: data
    // };
    // axios(config)
    //     .then(function (response) {
    //         if (response.data.isSuccess) {

    //             dispatch(setPaymentNo(response.data.responseData.paymentNo))
    //             dispatch(setPaymentGatewayRefNo(response.data.responseData.razorpay.paymentGatewayReferenceNo))
    //             dispatch(setClientKey(response.data.responseData.razorpay.clientKey))
    //             dispatch(setCurrency(response.data.responseData.razorpay.currency))
    //             dispatch(setTransactionToName(response.data.responseData.razorpay.transactionToName))
    //             dispatch(setCustomerName(response.data.responseData.razorpay.customerName))
    //             dispatch(setCustomerPhone(response.data.responseData.razorpay.customerPhone))
    //             dispatch(setCustomerEmail(response.data.responseData.razorpay.customerEmail))

    //         } else {
    //         }
    //     })
    //     .catch(function (error) {
    //         if (error.response && error.response.data)

    //     });
  };

  /* Send Razor Pay Failure message to backend */
  const sendRazorPayFailure = (rzrPayFailResp) => {
    const rzrPayFailData = JSON.stringify({
      preOrderNo: bookingDTLS.preOrderNo,
      paymentNo: paymentNo,
      razorpay: {
        success: {},
        failure: {
          code: rzrPayFailResp.code,
          description: rzrPayFailResp.description,
          source: rzrPayFailResp.source,
          step: rzrPayFailResp.step,
          reason: rzrPayFailResp.reason,
          metadata: {
            payment_id: rzrPayFailResp.metadata.payment_id,
            order_id: rzrPayFailResp.metadata.order_id,
          },
        },
      },
    });
    var rzrFailconfig = {
      method: "post",
      url: `${server}/Booking/api/v1/booking/payment/save`,
      headers: { "Content-Type": "application/json" },
      data: rzrPayFailData,
    };
    axios(rzrFailconfig)
      .then(function (response) {})
      .catch(function (error) {});
  };

  /* Send Razor Pay success message to backend */
  const sendRazorPaySuccess = (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    const rzrPaySaveData = JSON.stringify({
      preOrderNo: bookingDTLS.preOrderNo,
      paymentNo: paymentNo,
      razorpay: {
        success: {
          razorpay_payment_id: razorpay_payment_id,
          razorpay_order_id: razorpay_order_id,
          razorpay_signature: razorpay_signature,
        },
        failure: {},
      },
    });
    var rzrSaveconfig = {
      method: "post",
      url: `${server}/Booking/api/v1/booking/payment/save`,
      headers: { "Content-Type": "application/json" },
      data: rzrPaySaveData,
    };
    axios(rzrSaveconfig)
      .then(function (response) {})
      .catch(function (error) {});
  };

  const handlePayment = () => {
    let options = {
      key: clientKey, // Enter the Key ID generated from the Dashboard
      amount: bookingAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: transactionToName,
      description: "Test Transaction",
      image: null,
      backdropclose: true,
      retry: false,
      order_id: paymentGatewayReferenceNo, // payment gateway ref no from save This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        dispatch(
          bookingActions.setRazorPaySignature(response.razorpay_payment_id)
        );
        dispatch(bookingActions.setRazorPayorderId(response.razorpay_order_id));
        dispatch(bookingActions.setRazorPaymentId(response.razorpay_signature));
        sendRazorPaySuccess(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );
      },
      prefill: {
        name: customerName,
        email: customerEmail,
        contact: customerPhone,
      },
      notes: {
        AutocomPaymentNo: paymentNo,
      },
      theme: {
        color: "#3399cc",
      },
    };
    let rzp1 = new Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      sendRazorPayFailure(response);
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
  };

  const handleSelectOption = (e) => {
    setPayVia(e.target.value);
    getPaymentBtnDtls(e.target.value);
  };

  return (
    <>
      <OrderReviewUI
        handlePrevious={previous}
        handlePayOption={(val) => handleSelectOption(val)}
        callPayment={() => handlePayment()}
      />
    </>
  );
}
