import React, { useState } from "react";
import { ProfileContact } from "components/Common/Component";
import { CustomerContactAddNew } from "components/Profile";
import { useTranslation } from "react-i18next";

export const CustomerContact = () => {
  const { t } = useTranslation(["profile", "common"]);
  const [isAddNew, setAddNew] = useState(false);

  const handleAddNew = () => {
    setAddNew(!isAddNew);
  };

  return (
    <div className="relative">
      <div>
        {!isAddNew ? (
          <div className="flex flex-col ml-20 mt-10 w-full">
            <div className="w-4/5">
              <div className="flex justify-between pb-2 border-b-2 border-yellow-200">
                <div className=" font-bold text-xl tracking-wider text-blue-900">
                  {" "}
                  Your Contacts
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
            <div className=" w-4/5 ml-10 md:ml-20 md:w-2/5">
              <div className="mt-3 py-6 font-bold text-normal tracking-wider text-gray-600">
                Default
              </div>
              <div>
                <ProfileContact />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-5 pt-8 ">
              <div className="w-4/5 ml-10 md:ml-20 md:w-2/5">
                <div className="mt-5"></div>
                <div>
                  <ProfileContact />
                </div>
              </div>

              <div className="w-4/5 ml-10 md:ml-0  md:w-2/5">
                <div className="mt-5"></div>
                <div>
                  <ProfileContact />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <CustomerContactAddNew />
          </div>
        )}
      </div>
    </div>
  );
};
