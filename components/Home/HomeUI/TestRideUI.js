import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";

import { BikeBrand, BikeModel } from "components/Common/Component";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { TEST_RIDE } from "utils/constant/routerPath";
import { useTranslation } from "next-i18next";

export default function TestRideUI(props) {
  const { t } = useTranslation(["home", "common"]);
  const [isChanged, setChanged] = useState(false);
  const dispatch = useDispatch();
  const { bikeVariant, bikeBrand, preSelected } = useSelector(
    (state) => state.testRide
  );
  const {
    TestrideHeading,
    TestrideTittleOne,
    TestrideTittleTwo,
    TestrideTittleThree,
    testride,
    Ride,
    Schedule,
  } = props;

  useEffect(() => {
    dispatch(testRideActions.setSubmitStatus(false));
  }, []);

  useEffect(() => {
    if (bikeVariant && bikeBrand) {
    }
  }, [bikeBrand, bikeVariant]);

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage("bikeSelect"));
    dispatch(testRideActions.setSubmitStatus(false));
  }, []);

  const onBrandChanged = (selectedBrand) => {
    dispatch(testRideActions.setBikeBrand(selectedBrand));
    dispatch(testRideActions.setBikeVariant(''));
    setChanged(!isChanged);
  };

  const onModelChanged = (selectedModel) => {
    dispatch(testRideActions.setBikeVariant(selectedModel));
    setChanged(!isChanged);
  };
  
    const handleTestRide =() => {
      Router.push(TEST_RIDE);
      console.log("handletestride");
    }
  
  return (
    <section className="ACEXP-Outer"  >
      <div className="ACEXP-Inner"  >
        <div className="ACEXP-Main">
          <div className=" flex rounded-xl md:flex bg-center md:bg-right-top bg-cover" style={{ backgroundImage: 'url("/images/home-testRideUI/ktmbike.jpg")' }}>
          <div className=" sm:w-11/12 p-14">
            <div className="flex justify-between items-start">
              <div>
                <h1 className=" font-bold tracking-wide text-hero-primary pt-10"> {t("home:testride-head")} </h1>
              </div>
              <div className="text-3xl font-bold  pt-10  text-gray-100  text-opacity-25">
              {t("home:trbgLabel1")} <br /> {t("home:trbgLabel2")}
              </div>
            </div>

            <div className="mb-6 ">
              <div className=" flex flex-col ">
                <div className="sm:pl-6 ">
                  <ul className="text-white">
                  <li className="pt-2 flex text-xl"><span className="px-2 bg-blue-900 text-base mr-2 text-yellow-500 rounded-full">1.</span><p className="text-white">{t("home:TestrideTittleOne")}</p></li>
                    <li className="pt-2 flex text-xl"><span className="px-2 bg-blue-900 text-base mr-2 text-yellow-500 rounded-full">2.</span><p className="text-white">{t("home:TestrideTittleTwo")}</p></li>
                    <li className="pt-2 flex text-xl"><span className="px-2 bg-blue-900 text-base mr-2 text-yellow-500 rounded-full">3.</span><p className="text-white">{t("home:TestrideTittleThree")}</p></li>
                  </ul>
                </div>
              </div>

              <div className="get-app flex space-x-5  justify-center md:justify-start">
                <div className="flex lg:mt-10  mt-6 justify-center sm:justify-start text-center
                        sm:flex-row" >
                  <div className=" bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
                    <Image width={300} height={300} src="/images/ride.png" />
                    < h5 className="pt-3 font-semibold tracking-wide text-white">{t("home:Select")}</h5>
                  </div>
                  <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
                  <div className=" bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full text-center shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
                    <Image width={200} height={200} src="/images/home-testRideUI/bagIcon.png" />
                    < h5 className="pt-3 font-semibold tracking-wide text-white">{t("home:Schedule")}</h5>
                  </div>
                  <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
                  <div className="bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-2xl 
sm:mr-0 sm:ml-0 mr-2 ml-5 p-2 bg-transparent border-2 border-theme ">
                    <Image width={300} height={300} src="/images/ride.png" />
                    <h5 className="pt-3 font-semibold tracking-wide text-white">{t("home:Ride")}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:items-end mt-16 flex sm:space-x-4 flex-col sm:flex-row">
              <BikeBrand bikeBrand={bikeBrand} onBrandChanged={onBrandChanged} />
              <BikeModel
                bikeBrand={bikeBrand}
                bikeVariant={bikeVariant}
                onModelChanged={onModelChanged}
              />
              <button className="mt-12 modelButtonInverse" 
              onClick={(e) => {
                        handleTestRide(e);
                      }}>{t("home:Go")}</button>
            </div>
          </div>
          </div>
          </div>
          </div>
    </section>

        );
}


