import React from "react";
import { Button, TextBox } from "components/Common/Controls";

const CustomerDocumentsAddNew = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full md:w-4/5 ml-10 ">
        <div className="flex justify-between pb-2 border-b-2 border-yellow-200">
          <div className=" font-bold text-xl tracking-wider text-blue-900">
            {" "}
            Add New Document
          </div>
        </div>
        <div className="w-full h-auto md:w-3/5 border border-gray-200 bg-gray-100 mt-6 rounded-lg">
          <div className="p-6">
            <div className=" w-2/3 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
              Document Type (Required) <TextBox />
            </div>
            <div className="w-2/3 pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
              Document Number (Required) <TextBox />
            </div>
            <div className="flex w-2/3">
              <div className=" pb-4 text-gray-700 flex-1  text-normal tracking-wider ">
                upload Document
                <div className="text-xs">
                  . Only PDF,JPG,JPEG and PNG formats allowed
                </div>
              </div>
              <img className="h-4 w-4" src="/images/upload.png" />
            </div>
          </div>
        </div>
        <Button theme="yellow-contained mt-6 ml-6">Submit</Button>
      </div>
    </div>
  );
};

export default CustomerDocumentsAddNew;
