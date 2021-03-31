import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setBookingDealerCode, setBookingSelectedDealerCode } from '../../store/booking/actions'
import { server } from '../../config'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const url = 'http://localhost:3000/api/trLocation'


const BookingDealerResult = () => {
    const dealerCode = useSelector((state) => state.booking.dealerCode);

    const dispatch = useDispatch();
    const { data, error } = useSWR(url, fetcher);
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    const dealerData = data.responseData;

    const dispDCode = (e) => {
        e.preventDefault();
        dispatch(setBookingDealerCode(e.target.value))
        const selDeal = e.target.value;
        console.log(selDeal)
        getDealer(selDeal)
    }
    let selectedDealerCode = []
    const getDealer = (selDeal) => {
        console.log("selected Dealer=", selDeal);
        selectedDealerCode = dealerData.filter(dealer => dealer.DealerCode === selDeal)
        console.log("selll=", selectedDealerCode)
        dispatch(setBookingSelectedDealerCode(selectedDealerCode))
    }

    return (
        <div className="bg-white border border-yellow-100">
            <div className=" w-full h-full mt-3  ">

                <p className="px-2">
                    There are {dealerData.length} dealers close to your pincode
                     </p>
            </div>
            <div className="">
                <div className="container" >                    <div className="w-min p-2 ">
                    <div className="flex justify-around space-x-8 ">
                        {dealerData.map((d, i) => (
                            <div className="flex flex-col">
                                <div>
                                    <ul className="bg-white p-6 h-auto m-b-2 m-t-2">
                                        <li className="flex pb-2 align-middle">

                                            <svg className="block  align-middle w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                            </svg>
                                            <h4 className="align-middle dpL uppercase text-sm tracking-wider pt-2 pb-4 font-bold">{d.DealerName}  </h4>
                                        </li>
                                        <li className="flex pb-2">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span className="pl-3 text-sm tracking-wide">
                                                +91-80-23023232  </span>
                                        </li>
                                        <li className="flex pb-2">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                            <span className="pl-3 text-sm tracking-wide">
                                                museumroad@khivrajbajaj.com </span>
                                        </li>
                                        <li className="flex pb-2">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="pl-3 text-sm tracking-wide">
                                                {d.Address1}
                                                {d.Address2}
                                                {d.Address3}
                                                <br /> {d.City} -{d.PinCode}, {d.State}.
                                                 </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className=" flex justify-end">
                                    <label class="inline-flex items-center">
                                        <span className="mr-2">Select Dealer</span>
                                        <input checked={d.DealerCode === dealerCode} onChange={(e) => dispDCode(e)}
                                            type="radio" 
className="form-radio border-2 border-gray-200 text-yellow-400" name="dealerCode" value={d.DealerCode} />
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default BookingDealerResult;
