import { Button } from "components/Common/Controls";
import React from "react";

export const BookingFailure = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="flex flex-col items-center justify-center ">
        <svg width="106" height="106" viewBox="0 0 106 106" fill="none">
          <path
            d="M53 92.75C74.9533 92.75 92.75 74.9533 92.75 53C92.75 31.0467 74.9533 13.25 53 13.25C31.0467 13.25 13.25 31.0467 13.25 53C13.25 74.9533 31.0467 92.75 53 92.75Z"
            stroke="#F9AE1E"
            strokeWidth="2"
            stroke-miterlimit="10"
          />
          <path
            d="M38.0938 49.6875C40.8379 49.6875 43.0625 47.4629 43.0625 44.7188C43.0625 41.9746 40.8379 39.75 38.0938 39.75C35.3496 39.75 33.125 41.9746 33.125 44.7188C33.125 47.4629 35.3496 49.6875 38.0938 49.6875Z"
            fill="black"
          />
          <path
            d="M67.9062 49.6875C70.6504 49.6875 72.875 47.4629 72.875 44.7188C72.875 41.9746 70.6504 39.75 67.9062 39.75C65.1621 39.75 62.9375 41.9746 62.9375 44.7188C62.9375 47.4629 65.1621 49.6875 67.9062 49.6875Z"
            fill="black"
          />
          <path
            d="M38.0938 49.6875C40.8379 49.6875 43.0625 47.4629 43.0625 44.7188C43.0625 41.9746 40.8379 39.75 38.0938 39.75C35.3496 39.75 33.125 41.9746 33.125 44.7188C33.125 47.4629 35.3496 49.6875 38.0938 49.6875Z"
            fill="#F9AE1E"
          />
          <path
            d="M67.9062 49.6875C70.6504 49.6875 72.875 47.4629 72.875 44.7188C72.875 41.9746 70.6504 39.75 67.9062 39.75C65.1621 39.75 62.9375 41.9746 62.9375 44.7188C62.9375 47.4629 65.1621 49.6875 67.9062 49.6875Z"
            fill="#F9AE1E"
          />
          <path
            d="M70.2165 72.8761C68.4714 69.8543 65.9616 67.3451 62.9395 65.6005C59.9174 63.856 56.4894 62.9375 52.9999 62.9375C49.5104 62.9375 46.0824 63.8559 43.0602 65.6004C40.0381 67.3449 37.5284 69.8541 35.7832 72.8759"
            stroke="#F9AE1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-center my-5">We are Really Sorry Chandan!</h2>
      <h5 className="text-center mb-20">Somthing went Wrong!</h5>
      <Button
        handleClick={() => {}}
        theme="yellow-outlined border-2 border-yellow-400"
      >
        Try Again
      </Button>
    </div>
  );
};
