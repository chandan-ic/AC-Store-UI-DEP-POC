import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getSearchPayload } from "../../utils/helper/storeHelper";
import HomeUtilityUI from "./HomeUI/HomeUtilityUI";
//import { HomeSearchRequest } from '../Search/store/search-action';
//import { searchActions } from "../Search/store/search-slice";
//import { brands } from "brand - Copy";
import { discoverBike } from "discoverBike";
import { searchMasterDataRequest } from "components/Search/store/search-action";
import { useTranslation } from "next-i18next";

export default function HomeUtility(props) {
  const { t } = useTranslation(["home", "common"]);

  const { brand, minPrice, MinEngineCC, CategoryType, searchMasterData } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const callCategory = (val) => {
    e.preventDefault();
    dispatch(searchActions.setSeletedCategoryType(val));

    //const data = getSearchPayload();
    //dispatch(HomeSearchRequest(data));
  };

  useEffect(() => {
    console.log(discoverBike);
    dispatch(searchMasterDataRequest());
  }, []);

  return (
    <div>
      <HomeUtilityUI
        UtilityHeading={t("home:DiscoverBikesHeading")}
        utilitySubHeading="by"
        Economy="Economy Bikes"
        EcImg="/images/homeImage2.png"
        ECPrice="Rs.47,820 - Rs.64,557"
        ECCC="100cc -150cc"
        ECcaption="High on mileage"
        Executive="Executive Bikes"
        EXImg="/images/homeImage3.png"
        EXBike="Rs.80,185 - Rs.11,4451"
        EXCC="100cc -150cc"
        EXcaption="Easy on maintenance"
        Premium="Premium Bikes"
        PRImg="/images/homeImage4.png"
        PRPrice="Rs.1,23,930 - Rs.199756"
        PRCC="150cc -375cc"
        PRcaption="Rule the roads"
        More="More bikes to,"
        MatchType="Match your type"
        handleCategory={(val) => callCategory(val)}
      />
    </div>
  );
}