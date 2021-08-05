import { useSelector } from "react-redux";
import { getNamefromId, getRideLocation } from "../../utils/getnamefromid";

export default function TestRideNav1() {
  const master = useSelector((state) => state.master.masterData.data);

  const {
    currentPage,
    bikeVariant,
    testRideLocation,
    testRideDate,
    testRideTime,
    customerName,
    testRideType,
  } = useSelector((state) => state.testRide);

  const displayDate = new Date(testRideDate);

  const selModel = getNamefromId(master.masterData.Model, bikeVariant);
  const selLocation = getRideLocation(
    master.masterData.TestridePreferredLocation,
    testRideLocation
  );

  return (
    <div className="mt-2 theme-autocomm">
      <ul className="justify-center flex ">
        <li
          className={`${
            currentPage === "bikeSelect" ? "testRideActive" : "testRideInActive"
          }
                text-center w-1/5 text-xs  uppercase px-2 lg:px-5 py-2 rounded block leading-normal m-2 lg:tracking-widest`}
        >
          <svg
            className="block  m-auto w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="mt-2 text-left lg:text-center">
            {selModel ? selModel : "Select Bike"}
          </span>
        </li>
        <li
          className={`${
            currentPage === "selectLocation"
              ? "testRideActive"
              : "testRideInActive"
          }
                text-center w-1/5 text-xs   uppercase md:px-5 py-2 rounded block md:leading-normal m-2 tracking-tighter break-words md:tracking-widest`}
        >
          <svg
            className="block  m-auto w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="mt-2 text-left lg:text-center">
            {testRideType === "HWY"
              ? "HIGHWAY"
              : selLocation
              ? selLocation
              : "Select Location"}
          </span>
        </li>
        <li
          className={`${
            currentPage === "bikeSchedule"
              ? "testRideActive"
              : "testRideInActive"
          }
                text-center w-1/5 text-xs  uppercase px-0 lg:px-5 py-2 rounded block leading-normal m-2 lg:tracking-widest`}
        >
          <svg
            className="block  m-auto w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="mt-2">
            {testRideDate && displayDate && displayDate.getDate()}{" "}
            {testRideDate && displayDate ? "-" : null}
            {testRideDate && displayDate && displayDate.getMonth() + 1}{" "}
            {testRideDate && displayDate ? "-" : null}
            {testRideDate && displayDate && displayDate.getFullYear()}
            {testRideDate && <br />}
            {testRideTime === "M"
              ? "9:00AM-12:00PM"
              : testRideTime === "A"
              ? "1:00PM-3:00PM"
              : testRideTime === "E"
              ? "4:00PM-6:00PM"
              : ""}
            {!testRideDate && "Select Schedule"}
          </span>
        </li>
        <li
          className={`${
            currentPage === "bikeContact"
              ? "testRideActive"
              : "testRideInActive"
          }
                text-center w-1/5 text-xs  uppercase lg:px-5 py-2 rounded block leading-normal m-2 tracking-widest`}
        >
          <svg
            className="block  m-auto w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="mt-2">
            {customerName ? customerName : "Enter your details"}
          </span>
        </li>
      </ul>
      <div className="mt-6">
        {currentPage === "bikeSelect" ? (
          <h2 className="dpTRH4 text-center sm:mb-6">
            Select a bike for your Test Ride
          </h2>
        ) : currentPage === "selectLocation" ? (
          <h2 className="dpTRH4 text-center sm:mb-6">Select Location</h2>
        ) : currentPage === "bikeSchedule" ? (
          <h2 className="dpTRH4 text-center sm:mb-6">Select schedule</h2>
        ) : currentPage === "bikeContact" ? (
          <h2 className="dpTRH4 text-center sm:mb-6">Update Contact details</h2>
        ) : currentPage === "verifyotp" ? (
          <h2 className="dpTRH4 text-center sm:mb-6">Verify otp </h2>
        ) : (
          <h2 className="dpTRH4 text-center sm:mb-6">
            Your request has been successfully submitted{" "}
          </h2>
        )}
      </div>
    </div>
  );
}
