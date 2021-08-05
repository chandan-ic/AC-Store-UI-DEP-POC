import React, { useState } from "react";
import { ProfileDocuments } from "components/Common/Component";
import CustomerDocumentsAddNew from "./CustomerProfileUI/CustomerDocumentsAddNew";
import { useTranslation } from "react-i18next";

export const CustomerDocument = () => {
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
                <div className="font-bold text-xl tracking-wider text-blue-900 ">
                  {" "}
                  Your Documents
                </div>

                <button
                  className="focus:outline-none m-1 border border-yellow-400 rounded-md border-2 px-2 text-yellow-400 text-xs font-bold"
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
          <div className="flex flex-col  md:flex-row justify-between md:w-4/5 ">
            <div className="flex flex-col  w-4/5 ml-10 md:w-2/5 md:ml-20 mt-8">
              <button className="focus:outline-none text-xs self-end flex">
                remove <img className="w-6 h-6" src="/images/xcross.png" />
              </button>

              <div className=" border rounded-md border-yellow-200 p-6 ">
                <ProfileDocuments />
              </div>
            </div>

            <div className="flex flex-col  w-4/5 ml-10 md:w-2/5 md:ml-20 mt-8">
              <button className="focus:outline-none text-xs self-end flex">
                remove <img className="w-6 h-6" src="/images/xcross.png" />
              </button>

              <div className=" border rounded-md border-yellow-200 p-6 ">
                <ProfileDocuments />
              </div>
            </div>

            <div className="flex flex-col  w-4/5 ml-10 md:w-2/5 md:ml-20 mt-8">
              <button className="focus:outline-none text-xs self-end flex">
                remove <img className="w-6 h-6" src="/images/xcross.png" />
              </button>

              <div className=" border rounded-md border-yellow-200 p-6 ">
                <ProfileDocuments />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  w-4/5 mr-8 md:mr-0">
            <CustomerDocumentsAddNew />
          </div>
        )}
      </div>
    </div>
  );
};
