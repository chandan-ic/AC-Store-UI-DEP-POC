import React from "react";
import { Button, TextBox } from "components/Common/Controls";

export const CustomerContactAddNew = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full md:w-4/5 ml-10">
        <div className="flex justify-between pb-2 border-b-2 border-yellow-200">
          <div font-bold text-xl tracking-wider text-blue-900>
            {" "}
            ADD NEW CONTACT
          </div>
        </div>
        <div className="w-full h-auto md:w-3/5 border border-gray-200 bg-gray-100 mt-6 rounded-lg">
          <div className="p-6">
            <div className="w-1/3 pb-6 text-gray-700 flex-1 font-bold text-normal tracking-wider border-b border-yellow-200">
              New Contact
            </div>
            <div className=" w-2/3 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
              FullName (Required) <TextBox />
            </div>
            <div className="w-2/3 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
              Mobile Number (Required) <TextBox />
            </div>
            <div className="w-2/3 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
              Email Id (Required) <TextBox />
            </div>
          </div>
        </div>
        <Button theme="yellow-contained mt-6 ml-6">Submit</Button>
      </div>
    </div>
  );
};
