import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { useDispatch } from "react-redux";
import {
  BookingFailure,
  BookingSuccess,
  Dealers,
  OrderReview,
  Product,
} from "./Forms";
// import SelectBike from "./Forms/selectBike";
// import SelectColor from "./Forms/selectColor";
// import BookingLocation from "./Forms/bookingLocation";
// import SelectPayment from "./Forms/selectPayment";
// import OrderReview from "./Forms/orderReview";

const steps = [
  { id: "product" },
  { id: "dealer" },
  { id: "review" },
  { id: "success" },
  { id: "failure" },
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
  otp: "Enter OTP",
};

const MultiStepFormBooking = ({ bike, variants, bookingMaster }) => {
  const [formData, setForm] = useForm(defaultData);
  const dispatch = useDispatch();
  let istep = 0;

  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { go } = navigation;

  let { id } = step;

  const props = {
    formData,
    setForm,
    navigation,
    bike,
    variants,
    bookingMaster,
  };

  switch (id) {
    // case "selectbike":
    //     return <SelectBike {...props} />;
    // case "selectcolor":
    //     return <SelectColor {...props} />;
    // case "location":
    //     return <BookingLocation {...props} />;
    // case "selectpayment":
    //     return <SelectPayment {...props} />;
    // case "orderreview":
    //     return <OrderReview {...props} />;

    case "product":
      return <Product {...props} />;
    case "dealer":
      return <Dealers {...props} />;
    case "review":
      return <OrderReview {...props} />;
    case "success":
      return <BookingSuccess {...props} />;
    case "failure":
      return <BookingFailure {...props} />;

    default:
      return null;
  }
};

export default MultiStepFormBooking;
