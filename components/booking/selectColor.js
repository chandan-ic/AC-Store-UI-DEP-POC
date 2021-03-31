import useSWR from 'swr';
import { server } from '../../config'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentActive,setBookingCurrentStep  } from '../../store/booking/actions'
const vehicleProductRed = '/images/bookingImgColor.png'
const vehicleProductBlack = '/images/bookingImg2.png'

const dominarBikes = { vehicleProductRed, vehicleProductBlack }

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const url = 'http://localhost:3000/api/booking/colorindex'

export default function SelectColor({ setForm, formData, navigation }) {
  const currentActive = useSelector((state) => state.booking.currentActive)

  const dispatch = useDispatch();
   const { previous, next } = navigation;
  const [selected, setSelected] = useState(dominarBikes.vehicleProductBlack);

dispatch(setBookingCurrentStep("2"));

  //api
  console.log("url=", url);

  const { data, error } = useSWR(url, fetcher);
  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>
  console.log("data=", data.responseData);

  const variantColors = data.responseData.colors;
  console.log("variantColors=", variantColors);


  //selectedbikeImage
  const bikeSelect = () => (
    <div className="">
      <img className="sm:w-3/5 m-auto w-full h-full" src={selected} />
      <h1 className=" font-bold sm:p-1 text-center">DOMINAR-250</h1>
      <h1 className="sm:text-3xl text-gray-700 sm:p-4 font-bold 
text-center border-b-2 border-gray-200 ">Charcoal Black</h1>
    </div>
  )
  const handleClickBlack = () => {
    setSelected(dominarBikes.vehicleProductBlack),
      dispatch(setCurrentActive("black"))
  }
  const handleClickRed = () => {
    setSelected(dominarBikes.vehicleProductRed),
      dispatch(setCurrentActive("red"))
  }
  //Details
  const bikeColor = () => (
    <div className="mt-6">
      <div className="">
        <h1 className="font-bold pl-6 w-full border-b-2 border-gray-200">Select Color</h1>
          <div>
            <div className="inline-flex justify-center">
              <div className={`${currentActive === "black" ? "ActiveColorBlack" : "InActiveColorBlack"}`} >
                <button className=" mt-1  sm:ml-1 
  ml-12 block w-9 h-9 rounded-full focus:outline-none bg-black"
                  onClick={handleClickBlack} ></button>
              </div>
              <img className="h-20  hidden sm:block pl-6" src="/images/bookingImg2.png" />

            </div>
           {variantColors.map((vc, i) => ( <h4 key={i} className="pl-2 hidden sm:block border-b-2 border-gray-200">{vc.Color}</h4>))}
            <div className="inline-flex mt-6">
              <div className={`${currentActive === "red" ? "ActiveColorRed" : "InActiveColorRed"}`} >
                <button className="mt-1 sm:ml-1  ml-12 block w-9 h-9 rounded-full 
focus:outline-none bg-red-500"
                  onClick={handleClickRed} ></button>
              </div>
              <img className="h-20  hidden sm:block pl-6" src="/images/bookingImgColor.png" />
            </div>
            <h4 className="sm:pl-2 hidden sm:border-t-0  sm:block border-b-2 border-gray-200">Canyon Red</h4>
          </div>
      </div>

    </div>
  )


  const selectBtn = () => (
    <div className="mt-3 inline-flex space-x-10">
      <button onClick={previous} className="w-33 border-1 border-transparent rounded hover:border-gray-500 mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase">Back</button>
      <button onClick={next}
 className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Next</button>
    </div>

  )
  return (
    <section className="flex items-center min-h-screen sm:min-h-0">
      <div className="container ">
        {/*<div className="w-0">
                  <RangeSlider Value={value} />
  </div> */}
        <div className="w-full flex-col ">
          <div className="flex sm:flex-row  w-full flex-col  sm:ring-2
 ring-gray-400 shadow-sm sm:divide-x-4
divide-gray-400">
            <div className="sm:w-4/5 w-full">{bikeSelect()}</div>
            <div className="sm:w-1/5 w-full">{bikeColor()}</div>
          </div>
          <div className="flex mt-6 sm:mt-0  sm:justify-end justify-between"> {selectBtn()}</div>
        </div>


      </div>
    </section>
  )

}

























{/*import React, { useState } from 'react';
import { Slider } from '@material-ui/core'

const SelectColor = ({ setForm, formData, navigation }) => {
  const { previous, next } = navigation;


  const [val,setVal]=useState ([0,33])
  //selectedbikeImage
  const bikeSelect = () => (
    <div className="">
      <img className="w-full md:w-1/2 m-auto" src="/images/baj1.png" />
      <h6 className=" pb-5 font-bold text-center text-black text-3xl">Dominar 250</h6>
      <h3 className="headHero  mb-2 font-bold text-gray-800 text-center ">Charcoal Black</h3>
    </div>
  )

  //Details
  const bikeDetails = () => (
    <div className="p-4">
      <div className="sm:mt-20 w-full border-t-2 sm:border-t-0 border-gray-300">
        <h2 className="sm:pb-10 font-bold w-full text-center border-b-2 sm:border-t-0 border-gray-300">Select Color</h2>
        <div className="sm:mt-10 flex flex-row">
          <div className="inline-flex justify-around">
            <div className="pb-5 border-2 border-gray-100 block w-10 h-10 rounded-full  bg-black" ></div>
            <img className="w-20 hidden sm:block" src="/images/pic1.png " />
          </div>

          <h3 className="sm:font-bold text hidden sm:block">Charcoal Black</h3>
          <div className="sm:inline-flex justify-around">
            <div className="mt-10 border-2 border-gray-100 block w-10 h-10 rounded-full  outline-2 color-black bg-red-400" > </div>
            <img className="sm:w-20 mt-10 hidden sm:block" src="/images/herobike.png" />
          </div>
          <h3 className="sm:font-bold hidden sm:block md:ml-2 ">Canyon Red</h3>
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
    <section className="">
      <div className="container h-96">
        <div className="w-full pl-3 border-2 border-gray-300 mt-32">
          
      *<div className="inline-flex"> <h1 className="font-bold text-4xl">Bike</h1>
        <h1 className="sm:ml-48 font-bold text-4xl">Color</h1>
        <h1 className="sm:ml-36 font-bold text-4xl">Location</h1>
        <h1 className="sm:ml-40 font-bold text-4xl">Payment</h1>   </div>
        <div className="sm:ml-8 w-3/5 bg-color-black pt-2"><Slider value={val} /> 
           <div className="inline-flex"> 
           <h1 className="font-bold">Dominar-250</h1>
           <h1 className="font-bold ml-24">Metallic black</h1>
           </div>
  </div> *
        </div>
        <div className="w-full">
          <div className="sm:flex  flex flex-col ring-2 ring-gray-400 shadow-sm divide-x-4
divide-gray-400">
            <div className="w-full md:w-4/5">{bikeSelect()}</div>
            <div className="w-full md:w-1/5">{bikeDetails()}</div>
          </div>
          <div className="flex justify-center md:justify-end md:mr-20"> {selectBtn()}</div>
        </div>


      </div>
    </section>
  )

}

export default SelectColor; */}