import Router from "next/router"
import { useSelector, useDispatch } from 'react-redux';
import { myRequestActions } from "./store/myRequest-slice";
import { useTranslation } from "next-i18next";
export default function CancelRequest() {

    const { t } = useTranslation(['myrequests', 'common', 'error'])
    const showCancel = useSelector((state) => state.myRequest.showCancel)
    const dispatch = useDispatch();

    const callBackReq = () => {
        dispatch(myRequestActions.setShowCancel(false))
    }

    return (

        <div>
            {showCancel ?
                <div className="">

                    <div className="w-full mt-4 ml-4">
                        <h4 className="font-LibreFranklin font-semibold py-2 whitespace-nowrap" >{t('myrequests:labels.cancel-reason')}</h4>
                        <select className="mt-3 w-4/5 block p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300">
                            <option>Select Reason</option>
                            <option>Select Reason</option>
                            <option>Select Reason</option>
                        </select>
                    </div>
                    <div className="mt-6 bg-gray-50 w-4/5 ml-4 px-3 ">
                        <h5 className="font-LibreFranklin font-semibold py-2 whitespace-nowrap"> {t('myrequests:labels.other-reason')}</h5>

                        <div>
                            <textarea className=" p-4 m-1 border-2 border-black" name="tt" placeholder="Enter reason here...">
                            </textarea>
                        </div>
                    </div>
                    <div className="flex justify-center md:ml-20 mt-6 mb-4 md:mb-0 md:mt-2">
                        <button onClick={callBackReq} className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-sm py-1.5 px-7 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Submit</button>
                    </div>

                </div> : null
            }
        </div >
    )
}