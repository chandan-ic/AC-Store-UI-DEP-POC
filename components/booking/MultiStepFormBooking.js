import React from "react";
import { useForm, useStep } from "react-hooks-helper";


import SelectBike from './selectBike'
import SelectColor from './selectColor'
import BookingLocation from './bookingLocation'
import SelectPayment from './selectPayment'
import OrderReview from "./orderReview";


const steps = [
  { id: "selectbike" },
  { id: "selectcolor" },
  { id: "location" },
  { id: "selectpayment"},
  { id: "orderreview" },
  { id: "submit" }
];

const defaultData = {
  selectColor: "Select Color",
  selectVariant: "Select Variant",
  pinCode: "Enter pin-code",
  city: "Enter City",
  type: "long/short",
  date: "Enter Date",
  time: "Enter Time",
  location: "Enter Location",
  address: "Enter Address",
  name: "Enter Name",
  email: "Enter Email",
  dl: "Enter DL Number",
  phone: "Enter Mobile Number",
otp:"Enter OTP"
};

const MultiStepFormBooking = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  switch (id) {

    case "selectbike":
      return <SelectBike {...props} />;
    case "selectcolor":
      return <SelectColor {...props} />;
      case "location":
     return <BookingLocation {...props} />;

      case "selectpayment":
      return <SelectPayment {...props} />;
      case "orderreview" :
      return <OrderReview {...props} />;

     default:
      return null;
  }
};

export default MultiStepFormBooking;