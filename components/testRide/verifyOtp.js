import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from "../../store/testRide/actions/testRide";
import axios from 'axios';
import { server } from '../../config';


const VerifyOtp = ({ navigation }) => {
 
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const customerPhone = useSelector((state) => state.testRide.customerPhone);
  const requestNo = useSelector((state) => state.testRide.requestNo);
  const [otp, setOtp] = useState();


  const { go } = navigation;
  const dispatch = useDispatch();
  dispatch(setCurrentPage(""));

  const callOtp = (e) => {
    console.log(e.target.value)
    setOtp(e.target.value)
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });



  const submitOtp = () => {
    console.log("otp=", otp)
    var data = JSON.stringify({ requestNo: requestNo, phone: customerPhone, otp: otp })
    var config = {
      method: 'post',
      url: `${server}/Testride/api/v1/testride/bookingrequest/otp/verify`,
      headers: { 'Content-Type': 'application/json' },
      data: data,

    };
    axios(config)
      .then(function (response) {
        if (response.data.isSuccess) {
          console.log(JSON.stringify(response.data));
          go('submit')
        } else {
          console.log(error);
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  const subRegenarateClick = () => {
    setMinutes(1)
    setSeconds(30)
    var data = JSON.stringify({ requestNo: requestNo, phone: customerPhone })
    var config = {
      method: 'post',
      url: `${server}/Testride/api/v1/testride/bookingrequest/otp/regenerate`,
      headers: { 'Content-Type': 'application/json' },
      data: data,

    };
    axios(config)
      .then(function (response) {
        if (response.data.isSuccess) {
          console.log(JSON.stringify(response.data));
          go('submit')
        } else {
          console.log(error);
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }


  const subBtn = () => (
    <div className="flex justify-center  mt-10 sm:pb-10">
      <button className="disabled:opacity-50 
w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
        onClick={subRegenarateClick} >Regenarate otp</button>
    </div>
  )
  return (
    <section className="flex items-start h-full " >
      <div className=" container w-4/5 h-full mt-10 bg-white ">
        <div className=" flex justify-center w-full h-full mt-10 space-x-2 flex-col items-center">
          <div className="w-full md:w-96">
            <div className="flex flex-row">
              <h4 className="trFET">Otp</h4>
              <span className="text-xs text-gray-400">(required)</span>
            </div>
            <input className="mt-1 w-full block p-2 px-3 border-2 text-sm rounded-md
                              border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
              onChange={callOtp} defaultValue="Enter Otp"
              placeholder="Enter Otp"
            />

          </div>
          <div >
            {minutes <= 0 && seconds <= 0 ? subBtn() : (
              <h4 className="text-sm mt-2 text-center">

                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                {    <button className="disabled:opacity-50 
w-33 border-1 hover:border-transparent rounded border-gray-500 mt-12 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase  sm:mb-10"
                  onClick={submitOtp} >SUBMIT</button>}
              </h4>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


export default VerifyOtp;


