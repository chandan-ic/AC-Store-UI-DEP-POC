import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    setCurrentPage, setTestRideCustomerName, setTestRideCustomerPhone,
    setTestRideCustomerEmail, setTestRideCustomerDlnumber, setTestRideCustomerAltPhone, setRequestNumber
} from "../../store/testRide/actions/testRide";
import { useForm } from 'react-hook-form'
import { server } from '../../config';

import axios from 'axios'

const Contact = ({ formData, navigation }) => {
    const bikeVariant = useSelector((state) => state.testRide.bikeVariant);
    const testRideType = useSelector((state) => state.testRide.testRideType);
    const testRideLocation = useSelector((state) => state.testRide.testRideLocation);
    const testRideTime = useSelector((state) => state.testRide.testRideTime)
    const testRideDate = useSelector((state) => state.testRide.testRideDate)
    const customerName = useSelector((state) => state.testRide.customerName);
    const customerPhone = useSelector((state) => state.testRide.customerPhone);
    const customerEmail = useSelector((state) => state.testRide.customerEmail);
    const drivingLicenceNo = useSelector((state) => state.testRide.drivingLicenceNo);
    const customerAlternatePhone = useSelector((state) => state.testRide.customerAlternatePhone);
    const dealerCode = useSelector((state) => state.testRide.dealerCode);
    const [resError, setResError] = useState([]);
    const { register, handleSubmit, errors } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

    const dispatch = useDispatch();

    dispatch(setCurrentPage("bikeContact"));
    const { name, email, dl, phone } = formData;
    const { previous, next, go } = navigation;

    const callName = (e) => {
        dispatch(setTestRideCustomerName(e.target.value))
    }
    const callEmail = (e) => {
        dispatch(setTestRideCustomerEmail(e.target.value))
    }
    const callDl = (e) => {
        dispatch(setTestRideCustomerDlnumber(e.target.value))
    }
    const callPhone = (e) => {
        dispatch(setTestRideCustomerPhone(e.target.value))
    }
    const callAlt = (e) => {
        dispatch(setTestRideCustomerAltPhone(e.target.value))
    }


    const onSubmit = (values) => {
        console.log(values)
    }


    const handleSubmitData = () => {
        var data = JSON.stringify({

            modelCode: bikeVariant,
            locationCode: dealerCode,
            testrideType: testRideType,
            preferredLocation: testRideLocation,
            preferredDate: testRideDate,
            preferredTime: null,
            preferredPeriod: testRideTime,
            customerAddress: "#123 1st main opposite to XYZ tower Bangalore 560068",
            customerName: customerName,
            customerPhone: customerPhone,
            customerEmail: customerEmail,
            drivingLicenceNo: drivingLicenceNo,
            customerAlternatePhone: customerAlternatePhone

        })
        var config = {
            method: 'post',
            url: `${server}/Testride/api/v1/testride/bookingrequest/create`,
            headers: { 'Content-Type': 'application/json' },
            data: data,

        };
        axios(config)
            .then(function (response) {
                if (response.data.isSuccess) {
                    console.log(JSON.stringify(response.data));
                    dispatch(setRequestNumber(response.data.responseData.requestNo))
                    go('verifyotp')
                } else {
                    console.log(error);
                }
            })
            .catch(function (error) {
                if (error.response && error.response.data)
                    console.log(error.response.data.errorList);
                    setResError(error.response.data.errorList)

            });
    }

    return (
        <section className="flex items-start h-full " >

            <div className=" container w-full sm:w-4/5 h-full pt-10 bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex flex-col md:flex-row w-full h-full mt-10 sm:space-x-2 ">

                        <div className=" w-full md:w-1/2 ">
                            <div>
                                <div className="flex flex-row">
                                    <h4 className="trFET">Your Name</h4>
                                    <span className="text-xs text-gray-400">(required)</span>
                                </div>
                                <input className="mt-1 w-full block p-2 px-3 border text-sm rounded-md
                              border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                    defaultValue={customerName} onChange={callName} name="name"
                                    placeholder={name} ref={register({ required: true })}
                                />

                            </div>
                            {errors.name && <span className="text-red-600 text-xs">Name is required</span>}
                        </div>

                        <div className=" w-full md:w-1/2 sm:mt-0 mt-6">
                            <div>
                                <div className="flex flex-row">
                                    <h4 className="trFET">Your Mobile Number </h4>
                                    <span className="text-xs text-gray-400">(required)</span>
                                </div>
                                <input className="mt-1 w-full  block p-2 px-3 border text-sm rounded-md
           border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                    defaultValue={customerPhone}
                                    onChange={callPhone}
                                    name="Mobile"
                                    ref={register({
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[6789]\d{9}$/,
                                            message: "invalid phone number.",
                                        }
                                    })}
                                />
                            </div>
                            {errors.Mobile && <span className="text-red-600 text-xs">{errors.Mobile.message}</span>}
                        </div>
                    </div>

                    <div className=" flex flex-col md:flex-row w-full h-full  sm:mt-10 mt-6 sm:space-x-2 ">
                        <div className=" w-full md:w-1/2 ">
                            <div>
                                <div className="flex flex-row">
                                    <h4 className="trFET">Your Email</h4>
                                    <span className="text-xs text-gray-400">(required)</span>
                                </div>
                                <input className="mt-1 w-full block p-2 px-3 border text-sm rounded-md
                                border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                    defaultValue={customerEmail} onChange={callEmail}
                                    name="email"
                                    placeholder={email} ref={register({
                                        required: "Email is required",
                                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "invalid email address.", }
                                    })}
                                />
                            </div>
                            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
                        </div>


                        <div className=" w-full md:w-1/2 sm:mt-0 mt-6">
                            <div>
                                <div className="flex flex-row">
                                    <h4 className="trFET">Your Driving License Number </h4>
                                    <span className="text-xs text-gray-400">(required)</span></div>
                                <input className="mt-1 w-full block p-2 px-3 border text-sm rounded-md
           border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                    defaultValue={drivingLicenceNo} onChange={callDl} name="dl"
                                    placeholder={dl} ref={register({ required: true })}
                                />
                            </div>
                            {errors.dl && <span className="text-red-600 text-xs">drivingLicenceNumber cannot be empty</span>}
                        </div>
                    </div>


                    <div className=" flex flex-col md:flex-row w-full h-full sm:mt-10  mt-6 sm:space-x-2 ">
                        <div className=" w-full md:w-1/2 ">
                            <div>
                                <div className="flex flex-row">
                                    <h4 className="trFET">Your Alternate Phone Number </h4>

                                    <span className="text-xs text-gray-400">(optional)</span> </div>
                                <input className="mt-1 w-full block p-2 px-3 border text-sm rounded-md
           border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                    defaultValue={customerAlternatePhone} onChange={callAlt} name="phone"
                                    placeholder={phone} ref={register({ required: true })}
                                />
                            </div>

                        </div>

                        <div className=" w-full md:w-1/2 ">


                        </div>
                    </div>
<div className="text-red-600 text-xs  mt-5 w-96 p-2 " role="alert">
<h6 className="text-center">{resError}</h6>
</div>

                    <div className="flex flex-wrap justify-between sm:items-end sm:justify-end mt-10 sm:mt-20
  space-x-10 ">

                        <button className="w-33 border-1 border-transparent rounded hover:border-gray-500 mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase"
                            onClick={previous}>Back</button>
                        <button disabled={!(customerName && customerPhone && customerEmail && drivingLicenceNo)}
                            className="disabled:opacity-50 
w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
                            type="button" onClick={handleSubmitData} >Submit</button>

                    </div>
                </form>
                <div className="text-center flex flex-row justify-end ml-6  pb-5 sm:pb-5 pt-1">
                    <h6 className="text-yellow-300 text-xs">By clicking submit you agree to our TermsAndConditions</h6>
                </div>
            </div>

        </section >
    )
}


export default Contact;
