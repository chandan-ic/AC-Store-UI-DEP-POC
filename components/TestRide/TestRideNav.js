import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
// import { moment } from "moment";
import {
  getDealerName,
  getModalName,
  getTestRideLocationValue,
} from "utils/helper/storeHelper";

export const TestRideNav = () => {
  const { t } = useTranslation(["testRide", "common"]);
  const {
    currentPage,
    bikeVariant,
    testRideLocation,
    testRideDate,
    testRideTime,
    customerName,
    testRideType,
    dealerCode,
  } = useSelector((state) => state.testRide);
  const displayDate = new Date(testRideDate);
  const selModel = getModalName(bikeVariant);
  const selLocation = getTestRideLocationValue(testRideLocation);
  const selDealer = getDealerName(Number(dealerCode));

  const getText = () => {
    switch (currentPage) {
      case "bikeSelect":
        return t("testRide:heading.bikeSelectHeading");
      case "selectLocation":
        return t("testRide:heading.locationHeading");
      case "bikeSchedule":
        return t("testRide:heading.scheduleHeading");
      case "bikeContact":
        return t("testRide:heading.contactHeading");
      case "verifyotp":
        return t("testRide:heading.verifyOtpHeading");
      default:
        return t("testRide:submittedMessage");
    }
  };

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
            {selModel ? selModel : t("testRide:tab.selectBike")}
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
              : t("testRide:tab.selectLocation")}{" "}
            {selDealer ? selDealer : ""}
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
            <div>
              {testRideDate &&
                displayDate &&
                ("0" + displayDate.getDate()).slice(-2) +
                  "-" +
                  ("0" + (displayDate.getMonth() + 1)).slice(-2) +
                  "-" +
                  displayDate.getFullYear()}
            </div>
            {testRideTime === "M"
              ? "9:00AM-12:00PM"
              : testRideTime === "A"
              ? "1:00PM-3:00PM"
              : testRideTime === "E"
              ? "4:00PM-6:00PM"
              : ""}

            {!testRideDate && t("testRide:tab.selectSchedule")}
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
            {customerName ? customerName : t("testRide:tab.yourDetail")}
          </span>
        </li>
      </ul>
      <div className="mb-3 mt-6">
        <h2 className="dpTRH4 text-center sm:mb-6">{getText()} </h2>
      </div>
    </div>
  );
};
