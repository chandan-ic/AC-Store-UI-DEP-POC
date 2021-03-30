import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setTestRideDate, setTestRideTime } from "../../store/testRide/actions/testRide";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';




const Schedule = ({ setForm, formData, navigation }) => {
  
    const testRideTime = useSelector((state) => state.testRide.testRideTime)
    const testRideDate = useSelector((state) => state.testRide.testRideDate)
    const displayDate = testRideDate;

    
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());


    const { type, date, address, location, time } = formData;

    const { previous, next } = navigation;
    dispatch(setCurrentPage("bikeSchedule"));

    const callDate = (date) => {
      
        dispatch(setTestRideDate(date))
      
    }

    const callTime = (e) => {
        dispatch(setTestRideTime(e.target.value))
    }

    return (
        <section className="flex items-start h-full " >
            <div className="container w-full md:w-4/5 h-full pt-10 bg-white">
                <div className=" flex flex-col md:flex-row w-full h-full mt-10 sm:space-x-2 ">
                    <div className="w-full md:w-1/2 ">
                        <div >
                            <div className="flex flex-row">
                                <h4 className="trFET">Preferred Date</h4>
                                <span className="text-xs text-gray-400">(required)</span>
                            </div>

                            <div className="mt-1  block p-2 px-3 text-sm bg-white  focus:outline-none ">
                                <DatePicker className="border border-gray-300 focus:outline-none w-72 focus:ring-2 focus:ring-yellow-300 h-9"
                                    placeholderText="Select date"
                                    dateFormat="dd-MM-yyyy"
                                    onChange={callDate}
                                    selected={displayDate ? displayDate :null}
                                    minDate={moment().toDate()}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-1/2 md:mt-0 mt-10 ">
                        <div>
                            <div className="flex flex-row">
                                <h4 className="trFET">Preferred Time</h4>
                                <span className="text-xs text-gray-400">(required)</span>
                            </div>
                            <div className="mt-1 block p-2 px-3 text-sm bg-white  focus:outline-none ">
                                <select className="w-72 md:w-4/5 block p-2 px-3  text-sm 
 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300 border border-gray-300"
                                    value={testRideTime} onChange={callTime} >
                                    <option className="bg-white" >Select Time</option>
                                    <option className="bg-white" value="M">9:00AM-12:00PM</option>
                                    <option className="bg-white" value="A">1:00PM-3:00PM</option>
                                    <option className="bg-white" value="E">4:00PM-6:00PM</option>
                                </select>
                            </div>
                        </div>

                    </div>


                </div>

                <div className=" flex flex-wrap justify-between sm:items-end sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-40
  space-x-10">
                    <button className="w-33 border-1 border-transparent rounded hover:border-gray-500 mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase"
                        onClick={previous}>Back</button>
                    <button className="disabled:opacity-50 
w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
                        disabled={!(testRideDate && testRideTime)} onClick={next}>Next</button>
                </div>

            </div>
        </section>

    );
};
export default Schedule;