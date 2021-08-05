import { Button } from "components/Common/Controls";
import React from "react";

export const BookingSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="flex flex-col items-center justify-center ">
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none">
          <path
            d="M52.5 91.875C74.2462 91.875 91.875 74.2462 91.875 52.5C91.875 30.7538 74.2462 13.125 52.5 13.125C30.7538 13.125 13.125 30.7538 13.125 52.5C13.125 74.2462 30.7538 91.875 52.5 91.875Z"
            stroke="#F9AE1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.7344 49.2188C40.4527 49.2188 42.6562 47.0152 42.6562 44.2969C42.6562 41.5786 40.4527 39.375 37.7344 39.375C35.0161 39.375 32.8125 41.5786 32.8125 44.2969C32.8125 47.0152 35.0161 49.2188 37.7344 49.2188Z"
            fill="#F9AE1E"
          />
          <path
            d="M67.2656 49.2188C69.9839 49.2188 72.1875 47.0152 72.1875 44.2969C72.1875 41.5786 69.9839 39.375 67.2656 39.375C64.5473 39.375 62.3438 41.5786 62.3438 44.2969C62.3438 47.0152 64.5473 49.2188 67.2656 49.2188Z"
            fill="#F9AE1E"
          />
          <path
            d="M69.5541 62.3438C67.8255 65.337 65.3394 67.8226 62.3458 69.5507C59.3522 71.2788 55.9566 72.1886 52.5 72.1886C49.0434 72.1886 45.6477 71.2789 42.6541 69.5508C39.6605 67.8228 37.1744 65.3372 35.4457 62.344"
            stroke="#F9AE1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-center my-5">Congratulations Chandan!</h2>
      <h5 className="text-center mb-20">
        You have Succesfully booked your Dominar 250{" "}
      </h5>
      <Button
        handleClick={() => {}}
        theme="yellow-outlined border-2 border-yellow-400"
      >
        View Order Details
      </Button>
    </div>
  );
};
