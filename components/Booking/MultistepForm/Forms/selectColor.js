import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from "../../store/booking-slice";
import {
  submitBikeVariantColor,
  getBikeImgUrlsFromApi,
} from "../../store/booking-actions";
import SelectColorUI from "../../Booking-UI/selectColorUI";

export default function SelectColor({ navigation, bike }) {
  const { bookingBike, preOrderNo, buttonType, productVariant, currentActive } =
    useSelector((state) => state.booking);
  const { previous, next } = navigation;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookingActions.setButtonType(bike.Colors_1));
    dispatch(bookingActions.setBookingCurrentStep("2"));
    dispatch(getBikeImgUrlsFromApi(productVariant));
  }, []);

  const handleSlectColor = (value) => {
    dispatch(bookingActions.setButtonType(value));
    dispatch(bookingActions.setCurrentActive(value));
  };

  const sendBikeClr = () => {
    const data = JSON.stringify({
      basedOn: "CLR",
      modelCode: bookingBike,
      variantCode: productVariant,
      colorCode: buttonType,
      locationCode: null,
      financeType: "",
      financierName: null,
      financierAddress: null,
      financierCode: null,
      exchangeRequired: false,
      phone: "9036940842",
      preOrderNo: preOrderNo,
      additionalServices: [],
    });
    dispatch(submitBikeVariantColor(data));
  };

  return (
    <SelectColorUI
      bike={bike}
      buttonType={buttonType}
      handleColor={(val) => handleSlectColor(val)}
      handlePrevious={previous}
      handleNext={() => (next(), sendBikeClr())}
    />
  );
}

//  //Details
//   const bikeColor = () => {
//     return (
//       <div className="w-full sm:p-4 overflow-y-auto ">
//         <div className="">
//           <h3 className="font-LibreFranklin w-full py-3 px-2 font-semibold border-t-2 border-b-2 sm:border-b-0 sm:border-t-0 border-gray-200 text-xs tracking-widest uppercase">Selected Bike</h3>
//           <h1 className="text-lg tracking-widest uppercase  w-full font-bold p-2">{bike.ACName}</h1>
//           <div className="flex md:flex-col md:justify-start flex-row justify-around">
//             <div className="flex flex-col md:text-left text-center px-4  pt-10 " onClick={() => toggleMe(bike.Colors_1)} >
//               <img className={`${btnType === `${bike.Colors_1}` ? "border-4  border-gray-800 inline-flex w-12 p-0.5 mb-1 h-12 rounded-full focus:outline-none" : " inline-flex w-10 h-10 mb-1 rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${bike.Color1_Code}`} />
//               {/* <button className={`${bike.Color1_Code}  border-2 ml-6 border-gray-400 inline-flex w-10 h-10 md:w-9 md:h-9 rounded-full items-center
//                                     focus:outline-none`}>
//                 {btnType === bike.Color1_Code && <div className={`${bike.Color1_Code}  p-2 w-8 h-8 border-2 border-gray-50 rounded-full absolute`}
//                   style={{ boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.3)' }}> </div>}
//               </button> */}
//               <h5 className=" font-semibold ">
//                 {bike.Colors_1}
//               </h5>
//             </div>
//             <div className=" flex  flex-col">
//               {bike.Color2_Code &&
//                 <div className="flex flex-col md:text-left text-center px-4  pt-10" onClick={() => toggleMe(bike.Colors_2)}>
//                   <img className={`${btnType === `${bike.Colors_2}` ? "border-4 p-0.5 border-gray-800 inline-flex w-12 mb-1 h-12 rounded-full focus:outline-none" : " inline-flex w-10 h-10 mb-1 rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${bike.Color2_Code}`} />
//                   {/* <button className={`${bike.Color2_Code} border-2 border-gray-400 inline-flex w-10 h-10 md:w-9 md:h-9 rounded-full
//                                               ml-6  focus:outline-none`}>
//                     {btnType === bike.Color2_Code && <div className={`${bike.Color2_Code}  p-2 w-8 h-8 border-2 border-gray-50 rounded-full absolute `}
//                       style={{ boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.3)' }}> </div>}x
//                   </button>*/}
//                   <h5 className=" font-semibold ">
//                     {bike.Colors_2}
//                   </h5>
//                 </div>
//               }
//             </div>
//             <div className=" flex  flex-col ">
//               {bike.Color3_Code &&
//                 <div className=" text-center px-4" onClick={() => toggleMe(bike.Colors_3)}>
//                   {/* <button className={`${bike.Color3_Code} border-2 border-gray-400 inline-flex w-10 h-10 md:w-9 md:h-8 rounded-full focus:outline-none`}>
//                     {btnType === bike.Color3_Code && <div className={`${bike.Color3_Code}  p-2 w-8 h-8 rounded-full absolute `}
//                       style={{ boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.3)' }}> </div>}
//                   </button> */}
//                   <img className={`${btnType === `${bike.Colors_3}` ? "border-4 p-0.5 border-gray-800 inline-flex w-12 mb-1 h-12 rounded-full focus:outline-none" : " inline-flex w-10 h-10 mb-1 rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${bike.Color3_Code}`} />
//                   <h5 className=" font-semibold ">
//                     {bike.Colors_3}
//                   </h5>
//                 </div>
//               }
//             </div>
//           </div>
//         </div>
//       </div >
