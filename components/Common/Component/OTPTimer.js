import { errorActions } from "components/Common/store/error/error-slice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OTP_TIME } from "utils/constant/common";
import { secConvertToHhMmSs } from "utils/timerFunc";
import { Button, TextBox } from "../Controls";
import { ErrorList } from "./ErrorList";

export default function Timer({
  defaultValue,
  handleRegenarate,
  handleOnClick,
  onValChange,
  otp,
  disabled = false,
}) {
  const [seconds, setSeconds] = useState(OTP_TIME);
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("seconds")) !== null) {
      setSeconds(JSON.parse(window.localStorage.getItem("seconds")));
    }
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("seconds") !== null) {
      window.localStorage.setItem("seconds", seconds);
    } else {
      window.localStorage.setItem("seconds", OTP_TIME);
      setSeconds(OTP_TIME);
    }
  }, [seconds]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  const handleClick = () => {
    handleOnClick();
  };

  const callSeconds = () => {
    setSeconds(OTP_TIME);
    handleRegenarate();
  };

  const subBtn = () => (
    <div className="mt-2">
      <Button
        handleClick={callSeconds}
        theme="capitalize text-blue-700 underline"
      >
        Regenerate OTP
      </Button>
    </div>
  );
  const callChange = (val) => {
    onValChange(val);
    dispatch(errorActions.resetErrors());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-44 ">
        <TextBox
          title="OTP"
          option="(required)"
          defaultValue={defaultValue}
          placeholder="Enter OTP"
          value={otp}
          handleChange={(val) => callChange(val)}
          name="otp"
        />
      </div>
      <div className="mt-5">
        <ErrorList />
      </div>
      <div className="mt-6 flex flex-col items-center w-44">
        <h4 className="text-sm  text-center">
          {seconds > 0 ? `Time Left: ${secConvertToHhMmSs(seconds)}` : null}
        </h4>
        <Button
          handleClick={handleClick}
          width="w-full"
          theme="yellow-contained mt-2 "
          disabled={!otp || disabled}
        >
          Submit
        </Button>
        {seconds <= 0 ? subBtn() : null}
      </div>
    </div>
  );
}
