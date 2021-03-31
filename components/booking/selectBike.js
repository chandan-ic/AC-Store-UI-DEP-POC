import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { server } from '../../config'
import { setSelectedProductVariant ,setBookingCurrentStep } from '../../store/booking/actions'


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const url = 'http://localhost:3000/api/booking'

export default function SelectBike({ setForm, formData, navigation }) {
    const productVariant = useSelector((state) => state.booking.productVariant)
 const { previous, next } = navigation;

    const dispatch = useDispatch();

dispatch(setBookingCurrentStep("1"))

    //api
    console.log("url=", url);

    const { data, error } = useSWR(url, fetcher);
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    console.log("data=", data.responseData);

    const variants = data.responseData.variants;
    console.log("variants=", variants);

const dispVariantCode = (e) => {
        e.preventDefault();
        dispatch(setSelectedProductVariant(e.target.value))
    }

    //selectedbikeImage
    const bikeSelect = () => (

        <div className="">
            <img className="w-full sm:w-4/5 sm:m-auto" src="/images/bookingImg.png" />
            <h4 className=" headHero font-bold text-center">Dominar-250</h4>
        </div>
    )

    //Details
    const bikeDetails = () => (
        <div className="sm:p-4 ">
            <div className="sm:mt-10 mt-5">
                <h3 className="font-semibold w-full border-t-2 border-b-2 sm:border-b-0 sm:border-t-0 border-gray-200">Selected Bike</h3>
                <h1 className="font-bold mt-5  w-full ">Dominar-250</h1>
                <h6 className="mt-5 w-full ">Power, Agility, Control and Technology. Designed to redefine riding,
             this sophisticated beast is truly unstoppable.</h6>
            </div>
            {variants.map((v, i) => (
                <div className="sm:mt-10 mt-5 divide-y-2 divide-gray-200">
                    <div className="w-full pb-5 sm:pb-0">
                        <label className="inline-flex ">
                            <input type="radio" className="mt-1 h-5 w-5 "
                                value={v.VariantCode} checked={v.VariantCode === productVariant } onChange={(e) => dispVariantCode(e)} />
                            <div className="flex flex-col ml-5">
                                <h4 className="font-bold">{v.Variant}</h4>
                                <h5>Ex-Showroom Price Rs.{v.UnitPrice}</h5>
                                <h6 className="text-red-600">View offers here...</h6></div>
                        </label>
                    </div>
                </div>
            ))}
        </div>
    )
    const selectBtn = () => (
        <div className="mt-5 inline-flex">
            <button onClick={next} className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">NEXT</button>
        </div>

    )

    return (
        <section className="flex items-center min-h-screen sm:min-h-0 pt-28 sm:pt-0">
            <div className="container sm:h-46">
                {/*<div className="w-0">
                    <RangeSlider Value = {value} />
    </div> */}
                <div className="w-full flex-col ">
                    <div className="flex flex-col sm:flex-row sm:ring-2 ring-gray-200 shadow-sm sm:divide-x-4
 divide-gray-200">
                        <div className="sm:w-4/5 w-full ">{bikeSelect()}</div>
                        <div className="sm:w-1/5 w-full ">{bikeDetails()}</div>
                    </div>
                    <div className="flex py-5 sm:py-0 justify-end sm:mr-20"> {selectBtn()}</div>
                </div>


            </div>
        </section>
    )

}










































{/*import React, { useState } from 'react';
import { Slider } from '@material-ui/core'

const SelectBike = ({ setForm, formData, navigation }) => {
  const { previous, next } = navigation;


  const [val,setVal]=useState ([0,33])
  //selectedbikeImage
    const bikeSelect = () => (
        <div className="">
            <img className="w-4/5" src="/images/bookingImg.png" />
            <h4 className=" headHero font-bold text-center">Dominar-250</h4>
        </div>
    )

    //Details
    const bikeDetails = () => (
        <div className="p-4">
            <div className="mt-10">
                <h3 className="font-semibold">Selected Bike</h3>
                <h1 className="font-bold mt-5">Dominar-250</h1>
                <h6 className="mt-5">Power, Agility, Control and Technology. Designed to redefine riding,
             this sophisticated beast is truly unstoppable.</h6>
            </div>
            <div className="mt-10">
                <div className="">
                    <label className="inline-flex ">
                        <input type="radio" className="mt-1 form-radio h-5 w-5 text-yellow-300"
                            name="radio-colors" value="" checked />
                        <div className="flex flex-col ml-5"><h4 className="font-bold ">Dominar-250</h4>
                            <h5>(2021)</h5>
                            <h6 className="text-red-600">View offers here...</h6></div>
                    </label>
                </div>
                <div className="mt-10">
                    <label className="inline-flex ">
                        <input type="radio" className="mt-1 form-radio h-5 w-5 text-yellow-300"
                            name="radio-colors" value="" />
                        <div className="flex flex-col ml-5"><h4 className="font-bold ">Dominar-400</h4>
                            <h5>(2021)</h5>
                            <h6 className="text-red-600">View offers here...</h6></div>
                    </label>
                </div>
            </div>
        </div>
    )
    const selectBtn = () => (
        <div className="mt-5">
            <button onClick={next} className="text-theme-inverse bg-yellow-300 w-20 h-8">Next</button>
        </div>

    )

    return (
        <section className="acSec">
            <div className="container ">
                <div>
                    <h1>Slider</h1>
                </div>
                <div className="w-full flex-col ">
                    <div className="flex flex-row  ring-2 ring-gray-400 shadow-sm divide-x-4
 divide-gray-400">
                        <div className="w-4/5 ">{bikeSelect()}</div>
                        <div className="w-1/5 ">{bikeDetails()}</div>
                    </div>
                    <div className="flex justify-end mr-20"> {selectBtn()}</div>
                </div>


            </div>
        </section>
    )

}
 
export default SelectBike









import React, { useState } from 'react';
import { Slider } from '@material-ui/core'

export default function SelectBike({ setForm, formData, navigation }) {

    const { previous, next } = navigation;

    const [val, setVal] = useState([0])
    //selectedbikeImage
   

    //Details
    return (
        <section className="pt-20">
            <div className="container ">
                <div className="flex flex-col sm:flex-row ">
                    <div className="w-full md:w-4/5 flex flex-col ">
                        <img className="w-full" src="/images/navImg.png" />
                        <div className="text-center"><h2>Dominar-250</h2><h1>Charcoal Black</h1></div>
                    </div>
                    <div className="mt-10 sm:mt-0 border-t-2 border-b-2 border-gray-300 "><h2>Select Color</h2></div>
                    <div className="mt-10 flex items-center justify-center sm:mt-0">

                        <div className="inline-flex  w-10 h-10 mb-1 rounded-full bg-red-600
                        focus:outline-none  ">
                        </div>
                        <div className="inline-flex ml-5 w-10 h-10 mb-1 rounded-full bg-black
                        focus:outline-none  ">
                        </div>
                    </div>
                    <div className="mt-14 inline-flex ">
                        <button className="bg-default text-theme-inverse md:mr-10 h-9 w-40
 focus:outline-none text-xs border-2 border-theme"
                            >BACK</button>
                        <button className="bg-theme text-theme-inverse md:mr-10 h-9 w-40 focus:outline-none text-xs"
                            onClick={next}>NEXT</button>
                    </div>
                </div>
            </div>
        </section>

    )
} */}




