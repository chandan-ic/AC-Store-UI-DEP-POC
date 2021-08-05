import React, { useEffect, useState } from "react";
import { ProfileAddress } from "components/Common/Component";
import { useTranslation } from "react-i18next";
import { CustomerAddressAddNew } from "components/Profile";
import { getProileAddrDataRequest } from "./store/profileData-action";
import { useDispatch } from "react-redux";

export const CustomerAddress = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation(["profile", "common"]);
  const [isAddNew, setAddNew] = useState(false);

  const handleAddNew = () => {
    setAddNew(!isAddNew);
  };

  useEffect(() => {
    let data = {
      customHeader: true,
    };
    dispatch(getProileAddrDataRequest(data));
  }, []);
  return (
    <div className="relative">
      <div>
        {!isAddNew ? (
          <div className="flex flex-col ml-20 mt-10 w-full">
            <div className="w-4/5">
              <div className="flex justify-between pb-2 border-b-2 border-yellow-200">
                <div className="font-bold text-xl tracking-wider text-blue-900">
                  {" "}
                  Your Address
                </div>

                <button
                  className="focus:outline-none m-1 border border-yellow-400 rounded-md  border-2 px-2 text-yellow-400 text-xs font-bold"
                  onClick={() => {
                    handleAddNew();
                  }}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {!isAddNew ? (
          <div className="flex flex-col ">
            <div className="w-4/5 md:w-1/3 ml-10 md:ml-20">
              <div className="mt-3 py-6 font-bold text-normal tracking-wider text-gray-600">
                Default
              </div>
              <div>
                <ProfileAddress />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-5 ">
              <div className="w-4/5 md:w-1/3 ml-10 md:ml-20">
                <div className="mt-5 py-6"></div>
                <div>
                  <ProfileAddress />
                </div>
              </div>

              <div className="w-4/5 md:w-1/3  ml-10 md:ml-0">
                <div className="mt-5 py-6"></div>
                <div>
                  <ProfileAddress />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <CustomerAddressAddNew />
          </div>
        )}
      </div>
    </div>
  );
};
