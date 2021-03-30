import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setDealer, setPinCode } from "../../store/testRide/actions";
import DealerResult from "./DealerResult";
import { useForm } from 'react-hook-form';



const Dealers = () => {
  const [dealers, setDealers] = useState([])
  const [ShowDealerResults, setShowDealerResults] = useState(false)
  const pinCode = useSelector((state) => state.testRide.pinCode);
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();



  const disPin = (e) => {
    if (e.target.value === "") {
      dispatch(setPinCode(null))
      setShowDealerResults(false)
    }
    else dispatch(setPinCode(e.target.value));
    const pincode = e.target.value
    shDealerResult(pincode)
    setShowDealerResults(false)
  }
  const shDealerResult = (e) => {
    setShowDealerResults(true);
  }
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <div>
      <div>
        <div className="flex flex-row">
          <h4 className="trFET">Please enter your pincode</h4>
          <span className="text-xs text-gray-400">(required)</span>
        </div>
        <div className="w-full flex flex-row">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="mt-1 w-60 md:w-60 block p-2 px-3 border text-sm
            border-gray-300 bg-white shadow-sm focus:outline-none  focus:ring-1 focus:ring-yellow-300"
                value={pinCode}
                onChange={(e) => { disPin(e) }}
                name="Pincode"
                ref={register({
                  required: "Pincode is required",
                  pattern: {
                    value: /^(\d{6})$/,
                    message: "Invalid pincode.",
                  }
                })}
              />
              {errors.Pincode && <span className="text-red-600 text-xs pt-2">{errors.Pincode.message}</span>}
            </form>
          </div>
          <div>
            <button onClick={(e) => { shDealerResult(e) }} className="mt-1  bg-theme text-theme-inverse p-2 px-4 focus:outline-none focus:ring-1 focus:ring-yellow-300 shadow-sm">Go</button>
          </div>
        </div>
      </div>
      <div className=" w-full h-full mt-3 bg-white ">
        {pinCode && ShowDealerResults && <DealerResult />}
      </div>
    </div>
  );
};

export default Dealers;
