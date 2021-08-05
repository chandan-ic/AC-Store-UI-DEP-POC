import React from "react";
import Router from "next/router";

const SuccessFinance = () => {
  const clickContinue = () => {
    Router.push("/");
  };
  return (
    <section id="submit" className="flex items-center  pt-20">
      <div className="container  w-full  mx-auto  py-10 bg-gray-100 rounded-2xl  ">
        <div className="flex flex-col">
          <h1 class="text-xl md:text-2xl font-bold  pb-4 text-indigo-700">
            Finance Eligibility Check
          </h1>
          <div className="text-lg font-medium my-5">Thank You </div>
          <div className="text-lg font-medium ">
            We have received your request, You will hear from us shortly.
          </div>
        </div>
        <div className="flex sm:mt-20 mt-10 ">
          <button
            onClick={clickContinue}
            className="focus:outline-none border-b-2 border-theme text-theme-inverse sm:text-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessFinance;
