import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button, TextBox } from "../Controls";

export const ProfileAddress = () => {
  const { t } = useTranslation(["profile", "common"]);
  const [isEdit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(!isEdit);
  };

  return (
    <div className="relative">
            <div className="w-full  border border-yellow-200 bg-gray-100 pl-8 rounded-lg">
           
            <div className="flex flex-col pt-8">
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.addressLine1')}: </div>
                    {!isEdit ? <div className="flex-1">Address 1</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.addressLine2')} </div>
                    {!isEdit ? <div className="flex-1">Address 2</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.city')} </div>
                    {!isEdit ? <div className="flex-1">City</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.state')} </div>
                    {!isEdit ? <div className="flex-1">State</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.country')} </div>
                    {!isEdit ? <div className="flex-1">Country</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.pincode')} </div>
                    {!isEdit ? <div className="flex-1">Pincode</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.landmark')} </div>
                    {!isEdit ? <div className="flex-1">Landmark</div> : <TextBox/>}
                </div>
                {!isEdit? <div className="relative self-end">
                <button className="focus:outline-none m-1 border border-yellow-400 rounded-md border-2 px-2 text-yellow-400 text-xs font-bold" onClick={()=>{handleEditClick()}}>Edit</button>
            </div>: null}

            <div className="mt-5">
                    {isEdit ?<Button theme="yellow-contained rounded-md float-right">Submit</Button>:null}
                </div>
               
                </div>
                
            </div>
           
        </div>
  );
};
