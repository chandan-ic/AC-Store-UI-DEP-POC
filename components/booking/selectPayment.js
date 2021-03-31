import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingCurrentStep } from "../../store/booking/actions";
import Link from 'next/link';
//import extendWarranty from './extendWarranty'
import PaymentForm from './paymentForm'
import Include from './include'
import Insurance from './insurance'
import ExtendWarranty from './extendedWarranty';
import Rto from './rto'



const SelectPayment = ({ setForm, formData, navigation }) => {

  const { previous, next } = navigation;
  const dispatch = useDispatch();


  dispatch(setBookingCurrentStep("4"))



  //selectedbikeImage
  const paymentOption = () => (
    <div>
      <h1 className="mt-2 ml-8 font-semibold text-4xl">Payment Options</h1>
      <div className="flex flex-col mt-6">
        <div className="flex sm:flex-row flex-col">

          <div className="flex sm:flex-col flex-row ">
            <h4 className="ml-8 font-bold text-2xl">Finance</h4>
            <h6 className="mt-2 ml-8 text-small">Our recommended financer: Bajaj (24hrs) </h6>
          </div>
          <div className="ml-4 mt-8 p-1 inline-flex border-2 border-gray-300">
            <input className="w-4 h-4 mt-2 ml-2" type="radio" checked />
            <span className="mt-1 pl-1">Cash</span>
            <input className="ml-3 w-4 mt-2 h-4" type="radio" />
            <span className="mt-1 pl-1">Finance by Dealership</span>
            <input className="ml-3 mt-2 w-4 h-4" type="radio" />
            <span className="mt-1 pl-1">Finance by Customer</span>
          </div>
        </div>
        <div className="text-center mt-4 pb-2">
          {/*<Link href="" className="border-yellow-400 border-b-2">Check Eligibility</Link>*/}
          <span className="sm:font-bold border-b-2  border-yellow-400">Check Eligibility</span>
        </div>
      </div>
    </div>
  )

  //Details
  const bikeDetails = () => (
    <div className="pt-2 ml-3 flex flex-col">
      <div className="border-b-2 border-gray-200"> <h1 className="text-2xl mt-2 bold-4">Your Selection</h1>
        <div className="inline-flex mt-2">
          <h2 className="font-bold text-xl">Dominar-250</h2>
          <h2 className="font-normal text-sm ml-36">remove x</h2>
        </div>
        <h5 className="mt-5">Power, Agility, Control and Technology<br />
              Designed to redefine riding.</h5>
        <div className="pt-6">
          <h4 className="text-md">Selected Color : <b>Charcoal Black</b></h4>
        </div>
        <div className="pt-6">
          <h4 className="text-md">Ex Showroom Price : Rs.1,67,718</h4>
        </div>
        <div className="pt-2">
          <h4 className="text-md ">On Road Price  <span className="ml-10">: Rs.2,01,712</span></h4>
        </div>
      </div>
      <div>
        <div className="pt-6">
          <h4 className="text-md ">Booking Amount  <span className="ml-6">: Rs.2,01,712</span></h4>
        </div>

      </div>
    </div>


  )

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
    <section className="sm:min-h-screen">
      <div className="container">
        <div className="w-full flex sm:flex-col  flex-row">
          <div className="flex  flex-col md:flex-row  ring-2 ring-gray-400 shadow-sm divide-x-4
 divide-gray-400">
            <div className="w-full ">
              <div className="mt-4">
                {paymentOption()}
                <div className="flex flex-col border-t-2 border-gray-300 justify-self-between">
                  <div className="pt-8"> <PaymentForm /></div>
                  <div className="pt-8"> <Include /></div>
                  <div className="pt-8"><Insurance /></div>
                  <div className="pt-8"> <Rto /></div>
                  <div className="pt-8"><ExtendWarranty /></div>
                </div>
              </div>
            </div>

            <div className="sm:w-2/5 flex flex-col w-full">{bikeDetails()}</div>
          </div>
          <div className="flex justify-center md:justify-end "> {selectBtn()}</div>
        </div>

      </div>
    </section>

  )

}

export default SelectPayment;




















{/*import React, { useState } from 'react';
import { Slider } from '@material-ui/core'

const SelectPayment = ({ setForm, formData, navigation }) => {

    const { previous, next } = navigation;


    const [val,setVal]=useState ([33.33,33.33,33.33])

    //selectedbikeImage
    const paymentOption = () => (
  <div className="flex flex-row w-full">
            <div className="w-full md:w-1/2 pt-10">
              <h1 className="ml-12 font-bold text-4xl">Payment Options</h1>
              <h4 className="ml-12 mt-6 font-bold text-xl">Finance</h4>
              <div className="flex flex-row w-full  mt-4">
              <h1 className="font-normal">Our recommended financer: Bajaj (24 hrs)</h1>
              <div className="ml-6 w-1/2 border-2 border-gray-700 px-6">
                  <div className="inline-flex w-full">
                        <input type="radio" className="mt-1 form-radio text-yellow-300"
                            name="radio-colors" value="" checked  />
                            <h6>Cash</h6>
                            <input type="radio" className="mt-1 form-radio text-yellow-300"
                            name="radio-colors" value="" checked  />
                            <h6>Finance by Dealership</h6>
                            <input type="radio" className="mt-1 form-radio text-yellow-300"
                            name="radio-colors" value="" checked  />
                            <h6>Finance by Customer</h6>
                            </div>x
                            
                            </div>
                        </div>
               <div className="mt-10 ml-96 font-bold border-b-2 border-yellow-400">Check Eligibility</div>
            </div>

        </div>
    )

    //Details
    const bikeDetails = () => (


        <div className="p-4">

            <div className="mt-2">
                <h2 className="font-semibold">Your Selection</h2>
                <div className="inline-flex"> <h1 className="font-bold text-2xl">Dominar-250   </h1>
                    <h2 className="font-normal text-xl ml-5 ">remove X</h2>
                </div>
                <h6 className="mt-5">Power, Agility, Control and Technology. Designed to redefine riding.</h6>
            </div>

            <div className="mt-10">
                <div className="">
                    <label className="inline-flex ">
                        <input type="radio" className="mt-1 form-radio h-5 w-5 text-yellow-300"
                            name="radio-colors" value="" checked />
                        <div className="inline-flex"><h4 className="font-normal">Selected Color</h4>
                            <h3 className="font-semibold ml-5">Charcoal Black</h3>
                        </div>
                    </label>
                </div>
                <div className="mt-10">
                    <div className="inline-flex ">
                        <h4 className="font-bold ">Ex:Showroom Pric:</h4>
                        <h4 className="font-semibold">Rs 1,67,718</h4>
                    </div>
                    <div className="mt-3">
                        <div className="inline-flex border-b-2 border-gray-400">
                            <h4 className="ml-10 pb-3 font-bold">On Road Price:</h4>
                            <h4 className="font-semibold pb-3 ">Rs 2,01,712</h4>
        
                            </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="">
                    <div className="inline-flex mt-6">
                    
                     <h4 className="font-bold">Booking Amount</h4>
                        <h4 className="font-semibold ml-6">Rs X,XX,XXX</h4>

                    </div>
                    
                    <div className="mt-12">
                        <h1 className="font-bold pt-4">Pay via</h1>
                        <div>
                        <div className="inline-flex mt-4 border-2 border-gray-500">
                        <input type="radio" className="mt-1 ml-2 form-radio h-3 w-3 text-yellow-300"
                            name="radio-colors" value="" checked />
                            <h6 className="ml-2 h-8">HDFC</h6>
                            <img className="ml-28 w-1/4" src="images/hdfc.png" height="16" />
                        </div>
                        <div className="mt-2 inline-flex border-2 border-gray-500">
                        <input type="radio" className="mt-1 ml-2 form-radio h-3 w-3 text-yellow-300"
                            name="radio-colors" value="" unchecked />
                            <h6 className="ml-2 h-8">Razorpay</h6>
                            <img className="ml-24 w-1/4 h-8" src="images/razor.png" />
                        </div>
                      
                          </div>
                          
                            
                    </div>
                </div>
            </div>
        </div>

    )
    const selectBtn = () => (
        <div className="mt-5">
            <button onClick={next} className="text-theme-inverse bg-yellow-300 w-20 h-8 focus:outline-none">Next</button>
        </div>

    )

    return (
        <section className="acSec">
            <div className="container">
             <div className="w-full  border-2 border-gray-100" >
                    <h1 className="w-full h-36"></h1> <div className="inline-flex"> <h1 className="font-bold text-4xl">Bike</h1>
        <h1 className="ml-60 font-bold text-4xl">Color</h1>
        <h1 className="ml-48 font-bold text-4xl">Location</h1>
        <h1 className="ml-48 font-bold text-4xl">Payment</h1>   </div>
                    <div className="w-4/5 mb-24 bg-color-black"><Slider value={val}
                    
                     /></div>
    </div> 
                <div className="w-full flex-col ">
                    <div className="flex  flex-col md:flex-row  ring-2 ring-gray-400 shadow-sm divide-x-4
 divide-gray-400">
                        <div className="md:w-4/5 w-full ">{paymentOption()}</div>
                        <div className="md:w-1/5 w-full ">{bikeDetails()}</div>
                    </div>
                    <div className="flex justify-center md:justify-end md:mr-20"> {selectBtn()}</div>
                </div>


            </div>
        </section>
    )

}


export default SelectPayment; */}




//  <div className="pt-8">
//           <h4 className="font-semibold">Pay via</h4>
//           <div className="border-2 border-gray-200 h-10 inline-flex w-full mt-2">
//             <input checked type="radio" className="form-radio mt-2 border-2 border-gray-200 text-yellow-400"
//               name="hdfc" /><h5 className="mt-2 ml-1">HDFC</h5>
//             <img className="h-8" src="/images/hdfcPay.png" />
//           </div>
//           <div className="border-2 border-gray-200 h-10 inline-flex w-full mt-2">
//             <input type="radio" className="form-radio mt-2 border-2 border-gray-200 text-yellow-400"
//               name="razorpay" /><h5 className="mt-2 ml-1">Razorpay</h5>
//             <img className="h-8" src="/images/razorPay.png" />
//           </div>
//         </div>