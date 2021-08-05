import React from 'react';
import Exchange from '../PaymentForm/exchange'
import RSA from '../PaymentForm/rsa'
import Insurance from '../PaymentForm/insurance'
import ExtendWarranty from '../PaymentForm/extendedWarranty';
import RTO from '../PaymentForm/rto'
import { useTranslation } from 'next-i18next';

const SelectPaymentUI = ({ bike, bookingMaster, handleNext, handlePrevious, handleFinanceType,
    handleFinancer, handleFinancierName, handleFinancierAddress, bookingDTLS, finTp }) => {
    const { t } = useTranslation(['booking', 'error', 'common'])
    const callNext = () => {
        handleNext()
    }
    const callPrevious = () => {
        handlePrevious()
    }
    const handleFType = (e) => {
        handleFinanceType(e.target.value)
    }
    const handleFin = (e) => {
        handleFinancer(e.target.value)
    }
    const handleFinName = (e) => {
        handleFinancierName(e.target.value)
    }
    const handleFinAddress = (e) => {
        handleFinancierAddress(e.target.value)
    }
    // dispatch(setINS({...INS,referenceCode:bookingMaster.Insurance.InsurerCode}))

    const financeOption = () => (
        <div className="md:p-4">
            <h4 className="mt-2 uppercase tracking-wide font-bold px-6">{t('booking:labels.pay-opt')}</h4>
            <div className="">

                <div className="flex flex-col border-t-2 border-gray-200">
                    <div className="px-3">
                        <h4 className=" md:ml-4 md:text-xl mt-2 ">{t('booking:labels.pay-fin')}</h4>
                        <div className="py-1 text-sm md:ml-6">{t('booking:labels.pay-financer')}</div>
                    </div>
                    <div className="md:p-2 p-1 md:border-2 md:border-gray-200 rounded-sm ">
                        <div className="p-1 inline-flex border-2 border-gray-200 w-full justify-between">
                            <div className="flex flex-col md:flex-row">
                                <input className="ml-2 w-4 h-4 mt-2" name="financeType" type="radio" value="CSH" checked={finTp === "CSH"} onChange={handleFType} defaultChecked />
                                <span className="mt-1 pl-0 md:pl-1 md:text-base text-xs ">{t('booking:labels.pay-cash')}</span>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <input className="md:ml-0 ml-10 w-4 mt-2 h-4" name="financeType" value="DLR" checked={finTp === "DLR"} onChange={handleFType} type="radio" />
                                <span className="mt-1 pl-0 md:pl-1 md:text-base text-xs">{t('booking:labels.fin-Bydealer')}</span>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <input className="md:ml-0 ml-10 mt-2 w-4 h-4" name="financeType" value="CUS" checked={finTp === "CUS"} onChange={handleFType} type="radio" />
                                <span className="mt-1 pl-0 md:pl-1 md:text-base text-xs">{t('booking:labels.fin-Bycustomer')}</span>
                            </div>
                        </div>
                        <div className={finTp === "CUS" ? "flex flex-col" : "hidden"}>
                            {bookingDTLS.financierName} {bookingDTLS.financierAddress}
                            <input placeHolder={t('booking:labels.financer-name')} onChange={handleFinName} type="text" name="financierName" value={financierName ? financierName : ""} />
                            <input type="text" onChange={handleFinAddress} placeHolder={t('booking:labels.financer-Adr')} name="financierAddress" value={financierAddress ? financierAddress : ""} />
                        </div>
                        <div className={finTp === "DLR" ? "flex" : "hidden"}>
                            <div className="flex">
                                <input className="ml-3 w-4 mt-2 h-4" checked={financierCode === "HDFC"} onChange={handleFin} value="HDFC" name="DLRFin" type="radio" />
                                <span className="mt-1 pl-1">{t('booking:labels.hdfc-txt')}</span>
                            </div>
                            <div className="flex">
                                <input className="ml-3 w-4 mt-2 h-4" checked={financierCode === "ICICI"} onChange={handleFin} value="ICICI" name="DLRFin" type="radio" />
                                <span className="mt-1 pl-1">{t('booking:labels.icici-txt')}</span>
                            </div>
                        </div>

                        <div className="text-center mt-3"> <span className="sm:font-bold border-b-2  border-yellow-400 text-sm">{t('booking:labels.check-eligibilty')}</span></div>
                    </div>
                </div>
            </div>
        </div>

    )

    //Details
    const bikeDetails = () => (
        <div className="p-4 flex flex-col">
            <div className="border-b-2 border-gray-200">
                <h4 className="mt-2 uppercase tracking-wide">{t('booking:labels.your-select')}</h4>
                <div className="inline-flex mt-2">
                    <h2 className="font-bold text-xl tracking-wide">{bike.ACName}</h2>
                </div>
                <h5 className="mt-1">{bike.Description}</h5>
                <div className="pt-2">
                    <h4 className="">{t('booking:labels.select-color')} : <b>{ }</b></h4>
                </div>

                <div className="pt-6 text-right">
                    <h4 className="">{t('booking:labels.ExShowroomText')} : <span className="text-xs">{t('booking:labels.rupee-rs')}</span> {bikePrice.exshowroomPrice} </h4>
                </div>
                <div className="text-right">
                    <h4 className=" ">{t('booking:labels.on-road-price')} : <span className="text-xs"> {t('booking:labels.rupee-rs')}</span> {bikePrice.onroadPrice} </h4>
                </div>
            </div>
            <div>
                <div className="pt-4 text-right">
                    <h4 className=" ">{t('booking:labels.bk-amount')} :   <span className="text-xs">{t('booking:labels.rupee-rs')}</span> {bookingDTLS.bookingAmount} </h4>
                </div>
            </div>
        </div>
    )



    const selectBtn = () => (
        <div className="inline-flex justify-end space-x-4 md:pr-8 pr-4 w-full mt-4">

            <button onClick={callPrevious} className=" w-33 border-1 border-transparent rounded hover:border-gray-500 focus:outline-none text-yellow-500 text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">{t('booking:buttonLabels.btn-prev')}</button>

            <button onClick={callNext} className="w-33 border-1 hover:border-transparent rounded border-gray-500 focus:outline-none hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">{t('booking:buttonLabels.btn-next')}</button>
        </div>


    )


    return (
        <section className="h-full w-full flex items-center">
            <div className="flex flex-col h-full w-full">
                <div className="md:h-5/6 flex flex-col md:flex-row w-full divide-x-2 divide-yellow-100">
                    <div className="w-full md:w-4/6 ">
                        {financeOption()}
                        <div className="mt-4 ml-4 md:mb-4">
                            <div className="py-1 md:py-2 border-b-2 border-gray-100"> <Exchange /></div>
                            {/* <div className=" "> <RSA /></div> */}
                            <div className="py-1 md:py-2 border-b-2 border-gray-100"> <Insurance options={bookingMaster.Insurance} /></div>
                            <div className="md:py-2  py-1 "> <RTO /></div>
                            {/* <div className=" "><ExtendWarranty /></div> */}
                        </div>

                    </div>
                    <div className="w-full md:w-2/6 hidden md:block">{bikeDetails()}</div>
                </div>
                <div className="border-t-2 mt-2 border-yellow-100 md:h-1/6 ">
                    {selectBtn()}
                </div>
            </div>
        </section>
    )
}

export default SelectPaymentUI;
