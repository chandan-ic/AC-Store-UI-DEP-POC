import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTestRideLocation, setCurrentPage, setTestRideAddress, setTestRideCustomerPincode, setDealerCode, setPinCode } from "../../store/testRide/actions";

const TestRideLocation = () => {
  const [tls, setTls] = useState([])

  const testRideType = useSelector((state) => state.testRide.testRideType);
  const testRideLocation = useSelector((state) => state.testRide.testRideLocation);
  const masterTestRideLcns = useSelector((state) => state.master.masterData.TestridePreferredLocation);
  const dispatch = useDispatch();

  dispatch(setCurrentPage("selectLocation"));

  // This is to load data on back button 
  useEffect(() => {

    setRideLocations(testRideType)
  }, [testRideType])

  const setRideLocations = (testRideType) => {
    
    const trls = masterTestRideLcns.filter(tl => tl.TestrideTypeFixedCategory === testRideType)

    setTls(trls);
  }


  const dispRideLocn = (e) => {

    dispatch(setTestRideLocation(e.target.value));
    if (testRideLocation === "DLR") dispatch(setTestRideAddress(null))
    if (testRideLocation === "DLR") dispatch(setTestRideCustomerPincode(null))
    if (testRideLocation === "CUS") dispatch(setDealerCode(null))
    if (testRideLocation === "CUS") dispatch(setPinCode(null))
  }
  return (
    <div>
      <div className="flex flex-row">
        <h4 className="trFET">SELECT Test Ride Location</h4>
        <span className="text-xs text-gray-400">(required)</span>
      </div>
      <div className="w-full mt-4">

        {<select name="testRideLocation" value={testRideLocation}
 className="mt-1 w-full md:w-4/5  block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
          onChange={(e) => { dispRideLocn(e) }}
        >
          <option>Select Ride Location</option>
          {tls.map((rl, i) => (
            <option key={i} value={rl.TestridePreferredLocationFixedCategory}
              className="bg-white w-4"
            > {rl.TestridePreferredLocation}</option>
          ))}
        </select>}

      </div>
    </div>
  );
};

export default TestRideLocation;
