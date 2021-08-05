import Router from "next/router"
import CancelRequest from './cancelRequest';
import { useSelector, useDispatch } from 'react-redux';
import { myRequestActions } from "./store/myRequest-slice";


export default function RequestButtons(status) {
    const showCancel = useSelector((state) => state.myRequest.showCancel)
    const dispatch = useDispatch();
    const callTestRide = () => {
        Router.push("/test-ride")
    }
    const callCancel = () => {
        dispatch(myRequestActions.setShowCancel(true))
    }
    return (
        <div>
            {showCancel ? <CancelRequest /> : <div className="flex justify-around md:justify-center pt-8 mb-4 md:mb-4 lg:mb-0  lg:pt-24">
                <h3 className="font-LibreFranklin font-semibold md:py-4 " ></h3>
                <div className="flex flex-row justify-around lg:flex-col md:w-24 lg:space-x-0 space-x-10  lg:h-8 lg:space-y-6 lg:pt-10">
                    {status.status === "PEN" && <button onClick={callTestRide} className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-sm py-1.5 px-7 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Edit</button> }
                    <button onClick={callCancel} className=" w-33 border-1 border-transparent rounded hover:border-gray-500 focus:outline-none text-yellow-500 text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Cancel</button>
                </div>
            </div>}
        </div>
    )
}