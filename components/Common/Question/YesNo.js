import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../Controls';
import { suggestiveDataActions } from '../store/suggestiveData/suggestiveData-slice';

export const YesNo = () => {
    const dispatch = useDispatch();
    return (
        <div className="m-2 pl-3 relative pr-5">
            <div className="flex flex-row">
                <div className="pr-5">Do you want to test ride in your place?</div>
                   <button onClick={()=>{ dispatch(suggestiveDataActions.setIsShow(false))}}> 
                       <div className="modal-close cursor-pointer z-50 absolute top-0 right-0 pl-3" >
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                       </div>
                    </button>
                 </div>
            
            <div className="flex flex-row">
                <div className="mr-3">
                    <Button theme="yellow-contained">Yes</Button>
                </div>
                <Button theme="yellow-outlined border border-yellow-400"> No</Button>
            </div>
            
        </div>
    )
}