import {
  CustomerAddress,
  CustomerContact,
  CustomerDocument,
  CustomerInfo,
  CustomerProfile,
  CustomerTab,
} from "components/Profile";
import { getProileAddrDataRequest } from "components/Profile/store/profileData-action";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const { activeTab } = useSelector((state) => state.profile);
  const getActiveTabElement = () => {
    switch (activeTab) {
      case 1:
        return <CustomerProfile />;
      case 2:
        return <CustomerAddress />;
      case 3:
        return <CustomerContact />;
      case 4:
        return <CustomerDocument />;
      case 5:
        return <CustomerInfo />;

      default:
        return null;
    }
  };

  useEffect(() => {
    let data = {
      customHeader: true,
    };
    dispatch(getProileAddrDataRequest(data));
  }, [activeTab]);

  return (
    <div className="flex flex-col md:flex-row  space-x-8 pt-20">
      <div className="md:w-1/5">
        <div className="">
          <CustomerTab />
        </div>
      </div>
      <div className="md:w-4/5">
        <div className="flex flex-col ">
          <div className="mt-5">{getActiveTabElement()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["profile", "common"])),
    },
  };
};
