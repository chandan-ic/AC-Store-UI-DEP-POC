import React, { useEffect, useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { setPreselected } from "../../../store/testRide/actions";
import { useDispatch, useSelector } from "react-redux";
import { SelectBike, SelectRideLocation, Schedule, Contact, VerifyOtp, Submit} from './Forms'
import { TR_STEPS, TR_FORM_DATA } from "utils/constant/testRide";

export  const MultiStepForm = () => {

  const [formData, setForm] = useForm(TR_FORM_DATA);
  const preSelected = useSelector((state) => state.testRide.preSelected);
  const [initialStep,setInitialStep] = useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
      if (preSelected) {
      setInitialStep(1);
      dispatch(setPreselected(false));
    }
  },[preSelected])

  useEffect(()=>{
      window.localStorage.setItem('seconds', 0);
  })

  const { step, navigation } = useStep({ initialStep: initialStep, steps: TR_STEPS });
  const { id } = step;
 

  const props = { formData, setForm, navigation };
  switch (id) {
    case "selectbike":
      return <SelectBike  {...props} />;
    case "selectlocation":
      return <SelectRideLocation {...props} />;
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





