import React, { useState } from "react";
import { CustomerProfileUI,CustomerProfileEdit } from "components/Profile";


export const CustomerProfile = () => {

  const [isAddNew, setAddNew] = useState(false);

  const handleAddNew = () => {
    setAddNew(!isAddNew);
  };

  return (
    <div className="relative">
      <div>
        {!isAddNew ? (
          <div className="flex flex-col ml-10 md:ml-20 mt-10 w-full">
            <div className="w-5/6 md:w-4/5">
              <div className="flex justify-between pb-2 border-b-2 border-yellow-200">
              <div className="font-bold text-xl tracking-wider text-blue-900 ">
              Your Profile
            </div>

                <button
                  className="focus:outline-none m-1 border border-yellow-400  border-2 px-2 text-yellow-400 text-xs font-bold"
                  onClick={() => {
                    handleAddNew();
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {!isAddNew ? (
          <div className="flex flex-col ">
            <div className="">
             
              <div>
                <CustomerProfileUI />
              </div>
            </div>
          </div>
        ) : (
          <div><CustomerProfileEdit/></div>
        )}
      </div>
    </div>
  );
};
