import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import BookingDealers from './bookingDealer';
import { setBookingCurrentStep  } from "../../store/booking/actions";

const Location = ({ setForm, formData, navigation }) => {
    const selectedDealerCode = useSelector((state) => state.booking.selectedDealerCode)

    const { previous, next } = navigation;



    const dispatch = useDispatch();

dispatch(setBookingCurrentStep("3"))

    const selectBtn = () => (
        <div className="mt-3 inline-flex space-x-10">
            <button onClick={previous} className="w-33 border-1 border-transparent rounded hover:border-gray-500 mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase">Back</button>
            <button onClick={next} className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">NEXT</button>
        </div>

    )

    return (
        <section className="">
            <div className="container h-screen ">

                <div className="ml-6 w-full bg-color-black px-3 pt-4  ">
                    <div>
                        <div className="flex sm:flex-row h-full w-full flex-col  sm:ring-2
 ring-gray-400 shadow-sm sm:divide-x-4
divide-gray-400">
                            <div className="w-full h-full sm:w-4/5 sm:ml-5 sm:pt-10">
                                <BookingDealers />
                            </div>

                            <div className="w-full sm:w-1/5 flex flex-col"><h5>
                                Selected Dealer store</h5>
                                <div>
                                    {selectedDealerCode && Object.keys(selectedDealerCode).map((s, i) => (<div key={i}>
                                        <div className="flex flex-col">
                                            <div>
                                                <ul className="bg-white p-6 h-auto m-b-2 m-t-2">
                                                    <li className="flex pb-2 align-middle">

                                                        <svg className="block  align-middle w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                        </svg>
                                                        <h4 className="align-middle dpL uppercase text-sm tracking-wider pt-2 pb-4 font-bold">{selectedDealerCode[s].DealerName}  </h4>
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
                                                            khivraj@gmail.com </span>
                                                    </li>
                                                    <li className="flex pb-2">
                                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span className="pl-3 text-sm tracking-wide">
                                                            {selectedDealerCode[s].Address1}
                                                            {selectedDealerCode[s].Address2}
                                                            {selectedDealerCode[s].Address3}
                                                            <br /> {selectedDealerCode[s].City} -{selectedDealerCode[s].PinCode}, {selectedDealerCode[s].State}.
                                                 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end"> {selectBtn()}</div>

                    </div>
                </div>
            </div>
        </section>
    )

}


export default Location;

/* <div className="w-full sm:w-1/5 flex flex-col"><h5>
                                    Selected Dealer store</h5>
                                    <div>
                                        {selectedDealerCode && Object.keys(selectedDealerCode).map((s, i) => (<div key={i}>
                                            <div className="flex flex-col">
                                                <div>
                                                    <ul className="bg-white p-6 h-auto m-b-2 m-t-2">
                                                        <li className="flex pb-2 align-middle">

                                                            <svg className="block  align-middle w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                            </svg>
                                                            <h4 className="align-middle dpL uppercase text-sm tracking-wider pt-2 pb-4 font-bold">{selectedDealerCode[s].DealerName}  </h4>
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
                                                                khivraj@gmail.com </span>
                                                        </li>
                                                        <li className="flex pb-2">
                                                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            <span className="pl-3 text-sm tracking-wide">
                                                                {selectedDealerCode[s].Address1}
                                                                {selectedDealerCode[s].Address2}
                                                                {selectedDealerCode[s].Address3}
                                                                <br /> {selectedDealerCode[s].City} -{selectedDealerCode[s].PinCode}, {selectedDealerCode[s].State}.
                                                 </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
*/