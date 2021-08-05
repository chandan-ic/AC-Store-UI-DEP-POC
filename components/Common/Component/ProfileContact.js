import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Button, TextBox } from '../Controls';

export const ProfileContact = () => {
    const { t } = useTranslation(['profile', 'common']);
    const [ isEdit, setEdit ] = useState(false);

    const handleEditClick = () => {
        setEdit(!isEdit);
    }

    return (
        <div className="relative">
            <div className="w-full  border border-yellow-200 bg-gray-100 pl-6 rounded-lg">
           
            <div className="flex flex-col pt-4">
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.name')}: </div>
                    {!isEdit ? <div className="flex-1">FullName</div> : <TextBox/>}
                </div>
                
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.email')} </div>
                    {!isEdit ? <div className="flex-1">Email</div> : <TextBox/>}
                </div>
                <div className="flex flex-row flex-wrap mt-2 items-center">
                    <div className="flex-1 text-gray-500">{ t('profile:label.phone')} </div>
                    {!isEdit ? <div className="flex-1">12356577879</div> : <TextBox/>}
                </div>
                {!isEdit? <div className="relative self-end">
                <button className="focus:outline-none m-1 border rounded-md border-yellow-400  border-2 px-2 text-yellow-400 text-xs font-bold" onClick={()=>{handleEditClick()}}>Edit</button>
            </div>: null}

            <div className="mt-5">
                    {isEdit ?<Button theme="yellow-contained float-right">Submit</Button>:null}
                </div>
               
                </div>
                
            </div>
           
        </div>
        
    )
}