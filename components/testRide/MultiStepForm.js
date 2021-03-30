import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { setPreselected } from "../../store/testride/actions";
import { useDispatch, useSelector } from "react-redux";

import SelectBike from "./tesrridebikeSelect";
import SelectLocation from "./selectLocation";
import Schedule from "./schedule";
import Contact from "./contact";
import VerifyOtp from "./verifyOtp";
import Submit from "./Submit";



const steps = [
  { id: "selectbike" },
  { id: " selectlocation" },
  { id: "schedule" },
  { id: "contact" },
  { id: "verifyotp" },
  { id: "submit" }
];

const defaultData = {
  brand: "",
  state: "",
  model: "",
  pinCode: "",
  city: "Enter City",
  type: "Enter  type",
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

const MultiStepForm = () => {

  const [formData, setForm,] = useForm(defaultData);
  const preSelected = useSelector((state) => state.testRide.preSelected);
 const dispatch = useDispatch()
  console.log("preselected=", preSelected)
  let istep = 0;
  if (preSelected) {
    istep = 1;
    dispatch(setPreselected(false))
  }
  const { step, navigation } = useStep({ initialStep: istep, steps });

  const { id } = step;
 

 


  const props = { formData, setForm, navigation };
  switch (id) {
    case "selectbike":
      return <SelectBike  {...props} />;
    case " selectlocation":
      return < SelectLocation {...props} />;
    case "schedule":
      return <Schedule {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "verifyotp":
      return <VerifyOtp {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};




export default MultiStepForm;


