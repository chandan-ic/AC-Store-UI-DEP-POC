import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { server } from '../../config'
import {
    setBikeBrand, setBikeVariant, setCurrentPage, setTestRideType,
    setTestRideLocation, setDealerCode, setPinCode, setTestRideDate, setTestRideTime,
    setTestRideCustomerPincode, setTestRideAddress
} from "../../store/testRide/actions/testRide";




const SelectBike = ({ setForm, formData, navigation }) => {
    const master = useSelector((state) => state.master);
    const bikeBrand = useSelector((state) => state.testRide.bikeBrand);
    const bikeVariant = useSelector((state) => state.testRide.bikeVariant);//Getting selected bike from Redux
    const [brandModels, setbrandModels] = useState([])


    // This is to load data on back button 
    useEffect(() => {
        console.log("bkike brand==", bikeBrand)
        bikeBrand && getModels(bikeBrand)
    }, [])


    const dispatch = useDispatch();





    const brands = master.masterData.Brand;
    const models = master.masterData.Model;
    let bMs = [];

    const { next } = navigation;


    dispatch(setCurrentPage("bikeSelect"));

    //onchange 
    const callDisp = (e) => {
        e.preventDefault();
        dispatch(setBikeBrand(e.target.value));
        dispatch(setBikeVariant(""))
        getModels(e.target.value);
        dispatch(setTestRideType(null))
        dispatch(setTestRideLocation(null))
        dispatch(setPinCode(null))
        dispatch(setTestRideCustomerPincode(null))
        dispatch(setDealerCode(null))
        dispatch(setTestRideDate(null))
        dispatch(setTestRideTime(null))
        dispatch(setTestRideAddress(null))
    }

    const getModels = (bikeBrand) => {

        bMs = models.filter(model => model.BrandCode === bikeBrand)

        setbrandModels(bMs)
    }



    const setModel = (e) => {

        dispatch(setBikeVariant(e.target.value));
        dispatch(setTestRideType(null))
        dispatch(setTestRideLocation(null))
        dispatch(setPinCode(null))
        dispatch(setTestRideCustomerPincode(null))
        dispatch(setDealerCode(null))
        dispatch(setTestRideDate(null))
        dispatch(setTestRideTime(null))
    }


    return (
        <section id="selectbike" className="flex items-start h-full " >
            <div className="container w-full sm:w-4/5 h-full mt-10 bg-white">
                <div className="flex flex-col md:flex-row w-full h-full mt-10  ">
                    <div className="w-full md:w-1/2 " >
                        <form >
                            <div className="flex flex-row items-center">
                                <h4 className="trFET">SELECT A BRAND</h4>
                                <span className="text-xs text-gray-400">(required)</span>
                            </div>
                            <div className="w-full mt-4" >
                                {
                                    <select name="brand" value={bikeBrand} className="mt-1 w-full md:w-4/5 
                                     block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                        onChange={(e) => { callDisp(e), setForm }}  >
                                        <option value="">Select Brand</option>

                                        {brands.map((b, i) => (
                                            <option key={i} value={b.BrandCode}
                                                className="bg-white w-4"
                                            > {b.Brand}</option>
                                        ))}
                                    </select>
                                }
                            </div>
                        </form>

                    </div>


                    <div className="w-full md:w-1/2 md:mt-0 mt-8">
                        <form>
                            <div className="flex flex-row align-middle">
                                <h4 className="trFET">SELECT A Model</h4>
                                <h4 className="text-xs text-gray-400">(required)</h4>
                            </div>
                            <div className="w-full mt-4">
                                <select name="model" value={bikeVariant} className="mt-1 w-full md:w-4/5  block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                                    onChange={(e) => { setModel(e), setForm }} >
                                    <option value="">Select Model</option>
                                    {brandModels.map((bM, i) => (
                                        <option key={i} value={bM.ModelCode}
                                            className="bg-white w-4"
                                        > {bM.Model}</option>
                                    ))}
                                </select>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap items-end justify-end mt-10 pb-5 sm:pb-5 sm:mt-40
  space-x-10">
                    <button disabled={bikeVariant === ""}
                        className="disabled:opacity-50 
w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase
"
                        onClick={next}>Next</button>
                </div>
            </div>
        </section>
    );
};

export default SelectBike;



















