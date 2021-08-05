import { Payment } from "components/Common/Component";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import BookingNav from "../../components/Booking/bookingNav";
import BookingNavMobile from "../../components/Booking/bookingNavMobile";
import MultiStepFormBooking from "../../components/Booking/MultistepForm/multistepForm";
import { getBikeVariantsRequest } from "../../components/Booking/store/booking-actions";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Booking = () => {
  const { variantData, bookingBike, bookingMaster } = useSelector(
    (state) => state.booking
  );

  const dispatch = useDispatch();

  const bikeVariants = () => {
    let payload = {
      bookingBike,
    };
    dispatch(getBikeVariantsRequest(payload));
  };

  const { t } = useTranslation(["booking", "common"]);

  const url = `/api/booking`;

  const { data, error } = useSWR(url, fetcher);
  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  const bikeData = data.find((v) => v.ModelCode === bookingBike);

  return (
    <div className=" w-full  h-screen flex flex-col font-Montserrat">
      <div className="  py-5 border-2 border-gray-100  px-5">
        <h2 className="text-4xl font-bold">Booking</h2>
      </div>
      <div className=" border-2 border-gray-100  ">
        <div className=" hidden md:block ">
          <BookingNav />
        </div>
        <div className=" block md:hidden ">
          <BookingNavMobile />
        </div>
      </div>

      <div className=" border-2 border-gray-100  ">
        {
          <MultiStepFormBooking
            bike={bikeData}
            variants={variantData}
            bookingMaster={bookingMaster}
          />
        }
      </div>
     
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["booking", "common", "error"])),
  },
});

export default Booking;
