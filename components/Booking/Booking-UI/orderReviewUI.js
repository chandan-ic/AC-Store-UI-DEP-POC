import React from 'react';
import {useTranslation} from 'next-i18next'

export default function OrderReviewUI({ callPayment, handlePrevious, handlePayOption }) {

 const { t } = useTranslation(['booking', 'error','common'])
    const callRazrPay = () => {
        callPayment()
    }
    const callPrevious = () => {
        handlePrevious()
    }

    const handlePgOption = (e) => {
        handlePayOption(e.target.value)
    }

    return (
        <>

            <section className=" container">
                <div className=" ">
                    <div >
                        <h1 className="font-bold text-left py-2 md:py-4 md:px-8 px-2">{t('booking:labels.or-reveiw')}</h1>
                    </div>
                    <div className="border-t-2 border-gray-300  ">
                        <h2 className="font-LibreFranklin font-semibold py-4 md:px-10" >{t('booking:labels.customer-details')}</h2>

                        <div className="flex  flex-col  w-full ">
                            <div className=" w-full md:items-center pb-3 border-b-2 border-gray-300">
                                <div className="w-full flex flex-row md:px-14">
                                    <div className="">
                                        <h4 className="md:text-base whitespace-nowrap text-xs py-1  md:mx-4  mx-2 ">{t('booking:labels.cus-name')} </h4>
                                        <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-2 ">{t('booking:labels.cus-email')} </h4>
                                        <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-2 "> {t('booking:labels.cus-phone')}</h4>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="md:py-1  md:mx-4  mx-1">:</span>
                                        <span className="md:py-1  md:mx-4  mx-1 ">:</span>
                                        <span className="md:py-1 md:mx-4  mx-1 ">:</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="md:text-base  text-xs  md:mx-4  mx-0  py-1">Roshini</h4>
                                        <h4 className="md:text-base  text-xs  md:mx-4  mx-0  py-1">Roshini@inarvo.com</h4>
                                        <h4 className="md:text-base  text-xs  md:mx-4  mx-0  py-1">9090800705</h4>
                                    </div>
                                </div>
                            </div>
                            <div> <h2 className="font-LibreFranklin font-semibold py-4 md:px-10" >{t('booking:labels.bk-details')}</h2>
                                <div className=" w-full md:items-center pb-3 border-b-2 border-gray-300">
                                    <div className="w-full flex flex-row md:px-14">

                                        <div className="">
                                            <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-0 ">{t('booking:labels.selected-bike')} </h4>
                                            <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-0 ">{t('booking:labels.select-color')} </h4>
                                            <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-0 ">{t('booking:labels.pay-fin')} </h4>
                                            <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-0">{t('booking:labels.pay-insurance')}</h4>
                                            <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-0">{t('booking:labels.pay-Rto')}</h4>
                                            <h4 className="md:text-base  text-xs py-1  md:mx-4  mx-0">{t('booking:labels.bk-amount')}</h4>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="md:py-1  md:mx-4  mx-1 ">:</span>
                                            <span className="md:py-1  md:mx-4  mx-1 ">:</span>
                                            <span className="md:py-1 md:mx-4  mx-1 ">:</span>
                                            <span className="md:py-1 md:mx-4  mx-1 ">:</span>
                                            <span className="md:py-1 md:mx-4  mx-1 ">:</span>
                                            <span className="md:py-1 md:mx-4  mx-1 ">:</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="md:text-base  text-xs  md:mx-4  mx-0  py-1">Dominar 250</h4>
                                            <h4 className="md:text-base  text-xs  md:mx-4  mx-0  py-1">{currentActive ? currentActive : "Color"}</h4>
                                            <h4 className="md:text-base  text-xs md:mx-4  mx-0  py-1">{selPayment === "CSH" ? "CASH" : selPayment === "DLR" ? "FINANCE BY DEALER" : selPayment === "CUS" ? "FINANCE BY CUSTOMER" : "Payment"}</h4>
                                            <h4 className="md:text-base  text-xs md:mx-4  mx-0  py-1">ICIC Lombard</h4>
                                            <h4 className="md:text-base  text-xs md:mx-4  mx-0  py-1">Permanent</h4>
                                            <h4 className="md:text-base  text-xs md:mx-4  mx-0  py-1">Rs. x,xxx,xx</h4> </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="">
                        <button className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 md:text-base  text-xs py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Edit</button>
                    </div> */}

                <div className="md:border border-gray-200 md:h-56 mt-6">
                    <div className="flex flex-col ">
                        <h1 className="font-bold px-3 font-LibreFranklin pb-2">{t('booking:pay-via')}</h1>
                        <div className="m-2 border-2 border-gray-300 h-8 md:h-12 flex flex-row justify-between w-full md:w-96  mt-2">
                            <div className="m-1 flex flex-row items-center">
                                <input checked type="radio" value="HDFC" onChange={handlePgOption} className="form-radio  border-2 border-gray-200 text-yellow-400"
                                    name="PgOption" />
                                <h5 className="md:mt-2 ml-1">{t('booking:hdfc-txt')}</h5>
                            </div>
                            <img className="w-20 " src="/images/hdfcPay.png" />
                        </div>
                        <div className="m-2 border-2 border-gray-300 h-8 md:h-12 flex flex-row justify-between w-full md:w-96 mt-8">
                            <div className="m-1 flex flex-row items-center"> <input value="razorpay" onChange={handlePgOption} type="radio" className="form-radio  border-2 border-gray-200 text-yellow-400"
                                name="PgOption" />
                                <h5 className="md:mt-2  ml-1">{t('booking:icici-txt')}</h5></div>
                            <img className="w-20" src="/images/razorPay.png" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-around md:justify-start py-6">
                    <div className="md:mx-6 mx-2">
                        <button onClick={callPrevious} className=" w-33 border-1 border-transparent rounded hover:border-gray-500 focus:outline-none text-yellow-500 text-xs md:text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase" >{t('common:btn-prev')}</button>
                    </div>
                    <button className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-xs md:text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase" onClick={callRazrPay} >{t('booking:make-pay')}</button>

                </div>

            </section>
        </>
    )
}

