import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "config";
import {
  TestRideBanner,
  TestRideNav,
  MultiStepForm,
} from "components/TestRide";
import { setMasterDataRequest } from "components/Common/store/masterData/masterData-action";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function TestRide(props) {
  const dispatch = useDispatch();
  const { isLoaded } = useSelector((state) => state.master);
  const { isOtpVerified } = useSelector((state) => state.testRide);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(setMasterDataRequest(props?.masterData?.responseData));
  }, []);

  useEffect(() => {
    if (isOtpVerified) {
      setShow(false);
    }
  }, [isOtpVerified]);

  return (
    <div className="w-full">
      {isLoaded && (
        <div className="w-full">
          <TestRideBanner />
          <div className="bg-gray-100 w-full min-h-screen sticky top-0">
            <div className="trCntnr sm:pt-0 pt-20">
              {show ? <TestRideNav /> : null}
            </div>
            <div className="bg-gray-100">
              <div className=" mx-auto ">
                <MultiStepForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(`${server}/Master/api/v1/master/get/testride`);
  const masterData = await res.json();
  if (masterData.isSuccess) {
    return {
      props: {
        masterData,
        ...(await serverSideTranslations(locale, ["testRide", "common"])),
      },
    };
  }
  return {
    props: {},
  };
};
