import React from "react";
import { store } from "react-notifications-component";
import { getToaster } from "utils/helper/notificationHelper";
import { Button } from "../Controls";

// key_id:	rzp_test_LS7D47yHQ21cg0
// key_secret:	GLCAC9vaYH1VxXle67eNl3MD

export const Payment = ({ children, onClick, amount, user }) => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_LS7D47yHQ21cg0", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: "INR",
      name: user?.customerFullName,
      description: "Booking Payment",
      // image: { logo },
      handler: async function (response) {
        const data = {
          // orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const notificationMsg = {
          title: "Success",
          message: "Payment Successful",
          type: "success",
        };
        store.addNotification(getToaster(notificationMsg));
      },
      prefill: {
        name: user?.customerFullName,
        email: user?.customerEmailId,
        contact: user?.customerMobileNo,
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#F9AE1E",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      // alert(response.error.code);
      alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      const notificationMsg = {
        title: "Success",
        message: response.error.description,
        type: "success",
      };
      alert(notificationMsg);

      store.addNotification(getToaster(notificationMsg));
    });
  }

  return (
    <div>
       <Button
          handleClick={()=>{
            onClick();
            displayRazorpay();
          }}
          disabled={false}
          theme="yellow-contained"
        >
         {children}
        </Button>
    </div>
  );
};
