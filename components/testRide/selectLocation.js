import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';


import { setTestRideType, setTestRideLocation } from "../../store/testRide/actions/testRide";
import TestRideLocation from "./TestRideLocation";
import Dealers from "./Dealers";
import CustomerLocation from "./CustomerLocation";

const SelectLocation = ({ setForm, formData, navigation }) => {
  const [trLocations, setTrLocations] = useState([])
  const master = useSelector((state) => state.master);
  const testRideType = useSelector((state) => state.testRide.testRideType);
  const testRideLocation = useSelector((state) => state.testRide.testRideLocation);
  const pinCode = useSelector((state) => state.testRide.pinCode);
  const dealerCode = useSelector((state) => state.testRide.dealerCode);
  const customerPincode = useSelector((state) => state.testRide.customerPincode)
const testRideAddress = useSelector((state) => state.testRide.testRideAddress)

  const { previous, next } = navigation;



  console.log("reduxLoc masterData=", master.masterData.TestrideType);

  const dispatch = useDispatch();

  const trt = master.masterData.TestrideType;
  const trl = master.masterData.TestridePreferredLocation;

  const setTRType = (e) => {
    dispatch(setTestRideType(e.target.value));
    dispatch(setTestRideLocation(null));
  }

  return (
    <section id="selectLocation" className="flex items-start h-full">
      <div className="container w-full sm:w-4/5   h-full mt-3 bg-white  ">
        <div className="flex flex-col md:flex-row w-full h-full mt-10  ">

          <div className="w-full md:w-1/2 ">
            <div className="flex flex-row">
              <h4 className="trFET">SELECT TEST RIDE TYPE</h4>
              <span className="text-xs text-gray-400">(required)</span>
            </div>
            <div className="w-full mt-4" >
              {
                <select name="testrideType" value={testRideType} className="mt-1 w-full md:w-4/5 
                                     block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                  onChange={(e) => { setTRType(e), setForm }} >
                  <option>Select Testride Type</option>
                  {trt.map((t, i) => (
                    <option key={i} value={t.TestrideTypeFixedCategory}
                      className="bg-white w-4"
                    > {t.TestrideType}</option>
                  ))}
                </select>
              }
            </div>
          </div>

          <div className="w-full md:w-1/2  sm:mt-0 mt-8">
            {testRideType === 'CTY' && <TestRideLocation />}
          </div>

        </div>
        <div className="flex md:flex-row w-full h-full mt-10  ">

          <div className="w-full">
            {testRideLocation === "DLR" && <Dealers />}
            {testRideLocation === "CUS" && <CustomerLocation />}

          </div>
        </div>

        <div className="flex flex-wrap justify-between sm:items-end  sm:justify-end mt-10 pb-5 sm:pb-5 sm:mt-10
  space-x-10">
          <button className="w-33 border-1 border-transparent rounded hover:border-gray-500 mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase"
            onClick={previous}>Back</button>
          <button disabled={(!testRideType || testRideType === 'CTY') && (pinCode === null || dealerCode === null ) }
            className="disabled:opacity-50 
w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
            onClick={next}>Next</button>
        </div>

      </div>
    </section >
  )
};

export default SelectLocation;
//|| testRideAddress === null || customerPincode === null