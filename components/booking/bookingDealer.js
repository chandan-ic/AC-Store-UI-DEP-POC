import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setBookingPinCode } from "../../store/booking/actions";
import BookingDealerResult from "./bookingDealerRes";

const BookingDealers = () => {
    const [dealers, setDealers] = useState([])
    const [ShowDealerResults, setShowDealerResults] = useState(false)
    const pinCode = useSelector((state) => state.booking.pinCode);

    const dispatch = useDispatch();

    const shDealerResult = () => {
        setShowDealerResults(true);
    }

    const disPin = (e) => {
        if (e.target.value === "") {
            dispatch(setBookingPinCode(null))
            setShowDealerResults(false)
        }
        else dispatch(setBookingPinCode(e.target.value));

    }


    return (
        <div>
            <div>
                <div className="flex flex-row">
                    <h4 className="trFET">Please enter your pincode</h4>
                    <span className="text-xs text-gray-400">(required)</span>
                </div>
                <div className="w-full ">
                    <div className="flex flex-row">
                        <form>
                            <input className="mt-1 w-60 md:w-72 block p-2 px-3 border-2 text-sm
            border-gray-100 bg-white shadow-sm focus:outline-none  focus:ring-1 focus:ring-yellow-300"
                                name="pinCode"
                                placeholder="Pincode"
                                value={pinCode}
                                onChange={(e) => { disPin(e) }}
                            />
                        </form>
                        <button onClick={shDealerResult} className="mt-1 bg-theme text-theme-inverse p-2 px-4 focus:outline-none focus:ring-1 focus:ring-yellow-300 shadow-sm">Go</button>
                    </div>
                </div>
            </div>
            <div className=" w-full h-full mt-3 bg-white ">
                {pinCode && ShowDealerResults && < BookingDealerResult />}
            </div>
        </div>
    );
};

export default BookingDealers;
