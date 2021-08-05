import { server } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import {
  setOnRoadPrice,
  setselectedVariantBike,
  setSelectedBike,
  setSelectedFunction,
  setSelectedOnRoadBike,
} from "../../store/user/actions";
import { vehicles } from "../../bike";
import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { setOnroadShow } from "../../store/financeCheck/actions";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { financeActions } from "components/FinanceEligibility/store/financeSlice";
import { getBrand } from "utils/helper/storeHelper";
import { TEST_RIDE, FINANCE_CHECK, LOGIN, SIGNUP } from "utils/constant/routerPath";
import { useTranslation } from "next-i18next";


export default function BikeActions({ vehicle }) {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const selectedBike = useSelector((state) => state.user.selectedBike);
  const selectedFunc = useSelector((state) => state.user.selectedFunc);

  const { t } = useTranslation(["bike", "common"]);
  const dispatch = useDispatch();

  const handleOnRoad = (e) => {
    e.preventDefault();
    const selOnBike = vehicle.ModelCode;
    dispatch(setSelectedBike(vehicle.ModelCode));
    const onRoadBike = e.target.value;
    // callOnRoadBike(onRoadBike);
    dispatch(setSelectedFunction("onRoadprice"));
    if (loggedIn) {
      var data = JSON.stringify({ locationCode: "KR", modelCode: selOnBike });
      var config = {
        method: "post",
        url: `${server}/Pricing/api/v1/variant/price/onroad/model`,
        headers: { "Content-Type": "application/json" },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.isSuccess) {
            dispatch(setOnroadShow(true));
            dispatch(
              setOnRoadPrice(response.data.responseData.DefaultOnRoadPrice)
            );
          } else { console.log("error in api on roadprice") }
        })
        .catch(console.log("error catch"))
      } else {Router.push(SIGNUP)}
    }


  let selOnRoadBike = [];

  const callOnRoadBike = () => {
    // selOnRoadBike = vehicles.find((v) => v.ModelCode === onRoadBike);
    console.log('callonroadbike');
    dispatch(setSelectedOnRoadBike(vehicle.ModelCode));
  };

  const callTestRide = (e) => {
    e.preventDefault();
    dispatch(testRideActions.resetValues());
    dispatch(testRideActions.setBikeVariant(vehicle.ModelCode));
    dispatch(testRideActions.setBikeBrand(vehicle.Brand));
    dispatch(testRideActions.setPreselected(true));
    Router.push(TEST_RIDE);
  };

  // const handleFinanceCheck = (e) => {
  //   e.preventDefault();
  //   dispatch(setSelectedBike(e.target.value));
  //   const selFinBike = e.target.value;

  //   callFinBike(selFinBike);
  //   dispatch(setSelectedFunction("financeEligibilityCheck"));

  //   Router.push(FINANCE_CHECK);
  // };

  let selBike = [];
  const callFC = () => {
    // selBike = vehicles.find((v) => v.ModelCode === selFinBike);
    dispatch(financeActions.resetValues());
    dispatch(financeActions.setModelSlno(vehicle.ModelCode));
    dispatch(financeActions.setBrandSlno(vehicle.Brand));
    Router.push(FINANCE_CHECK);
    // dispatch(setSelectedFunction("financeEligibilityCheck"));
    // dispatch(setselectedVariantBike(vehicle.ModelCode));
  };

  return (
    <section id="Explore" className=" ACEXP-Outer bg-white">
      <div
        className={`${vehicle.theme}  ACEXP-Inner`}
      >
        <div className="ACEXP-Main">
          <div className=" relative pt-4 h-auto ">
            {/* <h1 className={`${vehicle.Hero_Text_Theme} `}> */}
            <h1 className={`${vehicle.Hero_Text_Theme} tracking-widest leading-loose pt-8`}>
              {t("bike:BKExploreTitle")}</h1>
            <div class="flex flex-wrap">
              <div class="sm:w-1/3 w-full px-4 py-6">
                <div className=" bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
                  <Image width={300} height={300} src="/images/buy.png" />
                </div>

                <h2 class="text-lg sm:text-xl text-theme font-medium title-font mb-2">
                  <span className="text-md text-yellow-500 pr-1"> 
        >
                  </span> {t("bike:BKORPriceHeading")}</h2>
                <p class="leading-relaxed text-theme text-base mb-4">{t("bike:BKORPriceText")}<br /> &nbsp; </p>
                <button className="mt-8 md:mt-10 bg-blue-900 text-white px-6 py-1 text-base leading-loose" onClick={handleOnRoad}>{t("bike:BKORButtonLabel")}
                  <span className="text-md text-yellow-500 pl-4"> 
        > </span></button>

              </div>
              <div class="sm:w-1/3 w-full  px-4 py-6 border-t-2 sm:border-l-2 sm:border-t-0 border-gray-200 border-opacity-60">
                <div className=" bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
                  <Image width={300} height={300} src="/images/ride.png" />
                </div>
                <h2 class="text-lg sm:text-xl text-theme font-medium title-font mb-2">
                  <span className="text-md text-yellow-500 pr-1">  >  </span>
                  {t("bike:BKORHeading")}</h2>
                <p class="leading-relaxed text-base text-theme mb-4">{t("bike:BKORText")}</p>
                <button className="mt-8 md:mt-10 bg-blue-900 text-white px-6 py-1 text-base leading-loose" onClick={callTestRide}>{t("bike:BKTRButtonLabel")}
                  <span className="text-md text-yellow-500 pl-4"> > </span>
                </button>
              </div>
              <div class="sm:w-1/3 w-full px-4 py-6 border-t-2 sm:border-l-2 sm:border-t-0 border-gray-200 border-opacity-60">
                <div className=" bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-3 bg-transparent ">
                  <Image width={100} height={100} src="/images/home-finance/checkEligibility.png" />
                </div>
                <h2 class="text-lg sm:text-xl text-theme font-medium title-font mb-2">
                  <span className="text-md text-yellow-500 pl-4"> 
        >
                  </span> {t("bike:BKFCheckLabel")}</h2>
                <p class="leading-relaxed text-base text-theme mb-4">{t("bike:BKFCText")}</p>
                <button className="mt-8 md:mt-10 bg-blue-900 text-white px-6 py-1 text-base leading-loose" onClick={callFC}>
                  {t("bike:BKFCButtonLabel")}
                  <span className="text-md text-yellow-500 pl-4">  >  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

