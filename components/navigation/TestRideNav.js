import { useSelector, useDispatch } from 'react-redux';
import { getNamefromId, getRideLocation } from '../../utils/getnamefromid';


export default function TestRideNav1() {
    const currentPage = useSelector((state) => state.testRide.currentPage);
    const master = useSelector((state) => state.master);
    const bikeVariant = useSelector((state) => state.testRide.bikeVariant); //Getting selected bike from Redux
    const testRideLocation = useSelector((state) => state.testRide.testRideLocation); //Getting selected bike from Redux
    const testRideDate = useSelector((state) => state.testRide.testRideDate); //Getting selected bike from Redux
    const displayDate = new Date(testRideDate);
    const testRideTime = useSelector((state) => state.testRide.testRideTime); //Getting selected bike from Redux
    const customerName = useSelector((state) => state.testRide.customerName); //Getting selected bike from Redux

    console.log("redux1 masterData=", master.masterData);
    console.log("redux1 masterDataModel=", master.masterData.Model);
    const selModel = getNamefromId(master.masterData.Model, bikeVariant);
    const selLocation = getRideLocation(master.masterData.TestridePreferredLocation, testRideLocation);



    // const dateFormatted = `${testRideDate.getDate()}-${testRideDate.getMonth()+1}-${testRideDate.getFullYear()}`;

    return (

        <div className="mt-2">
            <ul className="justify-center flex ">
                <li className={`${currentPage === "bikeSelect" ? "testRideActive" : "testRideInActive"}
                text-center w-1/5 text-xs  uppercase px-5 py-2 rounded block leading-normal m-2 tracking-widest` }>
                    <svg className="block  m-auto w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="mt-2">
                        {selModel ? selModel : "Select Bike"}
                    </span>
                </li>
                <li className={`${currentPage === "selectLocation" ? "testRideActive" : "testRideInActive"}
                text-center w-1/5 text-xs  uppercase px-5 py-2 rounded block leading-normal m-2 tracking-widest` }>
                    <svg className="block  m-auto w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="mt-2">
                        {selLocation ? selLocation : "Select Location"}
                    </span>
                </li>
                <li className={`${currentPage === "bikeSchedule" ? "testRideActive" : "testRideInActive"}
                text-center w-1/5 text-xs  uppercase px-5 py-2 rounded block leading-normal m-2 tracking-widest` }>
                    <svg className="block  m-auto w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="mt-2">
                        {testRideDate && displayDate && displayDate.getDate()} {testRideDate && displayDate ? "-" : null}
                        {testRideDate && displayDate && displayDate.getMonth() + 1} {testRideDate && displayDate ? "-" : null}
                        {testRideDate && displayDate && displayDate.getFullYear()}
                        {testRideDate && <br />}
                        {testRideTime === "M" ? "9:00AM-12:00PM" : testRideTime === "A" ? "1:00PM-3:00PM" : testRideTime === "E" ? "4:00PM-6:00PM" : ""}

                        {!testRideDate && "Select Schedule"}
                    </span>
                </li>
                <li className={`${currentPage === "bikeContact" ? "testRideActive" : "testRideInActive"}
                text-center w-1/5 text-xs  uppercase px-5 py-2 rounded block leading-normal m-2 tracking-widest` }>
                    <svg className="block  m-auto w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="mt-2">
                        {customerName ? customerName : "Enter your details"}
                    </span>
                </li>
                
            </ul>
            <div className="mt-6">
                {
                    currentPage === "bikeSelect" ? <h2 class="dpTRH4 text-center sm:mb-6">Select a bike for your Test Ride</h2> :
                        currentPage === "selectLocation" ? <h2 class="dpTRH4 text-center sm:mb-6">Select Location</h2> :
                            currentPage === "bikeSchedule" ? <h2 class="dpTRH4 text-center sm:mb-6">Select schedule</h2> :
                                currentPage === "bikeContact" ? <h2 class="dpTRH4 text-center sm:mb-6">Update Contact details</h2> :
                                    <h2 class="dpTRH4 text-center sm:mb-6">Verify otp </h2>
                }
            </div>
        </div>
    )


}
