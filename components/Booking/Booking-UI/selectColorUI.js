import Image from 'next/image';
import React from "react";
import {useTranslation} from 'next-i18next'

export default function SelectColorUI({ bike, buttonType, handleNext, handlePrevious, handleColor }) {
 const { t } = useTranslation(['booking', 'error','common'])
       const toggleMe = (value) => {
        handleColor(value)
    }
    const callNext = () => {
        handleNext()
    }
    const callPrevious = () => {
        handlePrevious()
    }

    //selectedbikeImage
    const bikeSelect = () => (
        <div className="relative h-full flex flex-col justify-center">
            <img 
                src={buttonType === bike.Colors_1 ? bike.Colors_1_Image : (buttonType === bike.Colors_2 ? bike.Colors_2_Image : bike.Colors_3_Image)} alt={bike.name} />
        </div>
    )



    //Details
    const bikeColor = () => {
        return (
            <div className="w-full sm:p-4 overflow-y-auto ">
                <div className="">
                    <h3 className="font-LibreFranklin w-full py-3 px-2 font-semibold border-t-2 border-b-2 sm:border-b-0 sm:border-t-0 border-gray-200 text-xs tracking-widest uppercase">{t('booking:labels.selected-bike')}</h3>
                    <h1 className="text-lg tracking-widest uppercase  w-full font-bold p-2">{bike.ACName}</h1>
                    <div className="flex md:flex-col md:justify-start flex-row justify-around">
                        <div className="flex flex-col md:text-left text-center px-4  pt-10 " onClick={() => toggleMe(bike.Colors_1)} >
                            <img className={`${buttonType === `${bike.Colors_1}` ? "border-4  border-gray-800 inline-flex w-12 p-0.5 mb-1 h-12 rounded-full focus:outline-none" : " inline-flex w-10 h-10 mb-1 rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${bike.Color1_Code}`} />

                            <h5 className=" font-semibold ">
                                {bike.Colors_1}
                            </h5>
                        </div>
                        <div className=" flex  flex-col">
                            {bike.Color2_Code &&
                                <div className="flex flex-col md:text-left text-center px-4  pt-10" onClick={() => toggleMe(bike.Colors_2)}>
                                    <img className={`${buttonType === `${bike.Colors_2}` ? "border-4 p-0.5 border-gray-800 inline-flex w-12 mb-1 h-12 rounded-full focus:outline-none" : " inline-flex w-10 h-10 mb-1 rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${bike.Color2_Code}`} />

                                    <h5 className=" font-semibold ">
                                        {bike.Colors_2}
                                    </h5>
                                </div>
                            }
                        </div>
                        <div className=" flex  flex-col ">
                            {bike.Color3_Code &&
                                <div className=" text-center px-4" onClick={() => toggleMe(bike.Colors_3)}>
                                    <img className={`${buttonType === `${bike.Colors_3}` ? "border-4 p-0.5 border-gray-800 inline-flex w-12 mb-1 h-12 rounded-full focus:outline-none" : " inline-flex w-10 h-10 mb-1 rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${bike.Color3_Code}`} />
                                    <h5 className=" font-semibold ">
                                        {bike.Colors_3}
                                    </h5>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }



    const selectBtn = () => (
        <div className="inline-flex justify-end space-x-4 md:pr-8 pr-4 w-full mt-4">

            <button onClick={callPrevious} className=" w-33 border-1 border-transparent rounded hover:border-gray-500 focus:outline-none text-yellow-500 text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">{t('booking:buttonLabels.btn-prev')}</button>

            <button onClick={callNext} className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">{t('booking:buttonLabels.btn-next')}</button>
        </div>


    )
    return (
        <section className=" h-full w-full flex items-center">
            <div className=" flex flex-col h-full w-full ">
                <div className=" h-5/6 md:flex-row flex-col flex w-full md:divide-x-2 md:divide-yellow-100">
                    <div className="w-full md:w-4/6">{bikeSelect()} </div>
                    <div className="w-full md:w-2/6">{bikeColor()}</div>
                </div>
                <div className="border-t-2 border-yellow-100 h-1/6">{selectBtn()}</div>

            </div>
        </section>
    )
}