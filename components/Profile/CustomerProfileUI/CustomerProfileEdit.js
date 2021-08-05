import React from "react";
import { Button, TextBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

export const CustomerProfileEdit = () => {
  const { t } = useTranslation(["profile", "common"]);
  return (
    <div className="flex flex-col ">
      <div className="w-5/6 md:w-4/5 ml-10">
        <div className="flex pb-2 border-b-2 border-yellow-200 ">
          <div className="font-bold text-xl tracking-wider text-blue-900 ">
            Edit Profile
          </div>
        </div>

        <div>
          <div className="w-full md:w-2/3 h-56 border bg-gray-100 border-yellow-200 rounded-lg mt-8">
            <div className="ml-10">
              <p className="py-4 font-bold text-gray-700">Your Profile photo</p>
              <div className=" w-40 h-36 border border-gray-400 py-16 text-center bg-gray-100 ">
                <button className=" flex-1 flex-col  rounded-full bg-yellow-300 focus:outline-none justify-center">
                  <img className=" w-4 h-4 m-6" src="/images/plus.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 md:w-4/6  h-auto  border border-gray-200 bg-gray-100 mt-8 rounded-lg ml-10 md:ml-10">
        <div className=" md:w-1/5 ml-6 pt-4 border-b-2 border-yellow-200 ">
          About You
        </div>
        <div className="p-6 ">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1 text-gray-500">
              {t("profile:label.firstName")} (required)
              <TextBox />
            </div>
            <div className="flex-1 text-gray-500">
              {t("profile:label.lastName")} (required)
              <TextBox />
            </div>
          </div>

          <div className="w-1/2 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
            <div className="flex-1 text-gray-500 mr-4">
              {t("profile:label.mobile")} (required)
              <TextBox />
            </div>
          </div>
          <div className="w-1/2 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
            <div className="flex-1 text-gray-500 mr-4">
              {t("profile:label.email")} (required)
              <TextBox />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 ml-10">
        {/* 
        <div className=" pt-4 ml-6 w-32">
          Verify OTP
          <TextBox />
        </div> */}

        <Button theme="yellow-contained mt-6 ml-6">Submit</Button>
      </div>
    </div>
  );
};
