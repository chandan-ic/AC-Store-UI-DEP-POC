import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { getPreferredLocation } from "utils/helper/storeHelper/masterDataHelper";
import { DropDownList } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

const TestRideLocation = () => {
  const [tls, setTls] = useState([]);

  const testRideType = useSelector((state) => state.testRide.testRideType);
  const testRideLocation = useSelector(
    (state) => state.testRide.testRideLocation
  );
  const masterTestRideLcns = useSelector(
    (state) => state.master.masterData.data.TestridePreferredLocation
  );
  const dispatch = useDispatch();
  const { t } = useTranslation(["testRide", "common"]);

  const preferredLoc = getPreferredLocation();

  useEffect(() => {
    setRideLocations(testRideType);
  }, [testRideType]);

  const setRideLocations = (testRideType) => {
    const trls = masterTestRideLcns.filter(
      (tl) => tl.TestrideTypeFixedCategory === testRideType
    );
    setTls(trls);
  };

  const onPreferedLocationChanged = (location) => {
    dispatch(testRideActions.setTestRideLocation(location));
    dispatch(testRideActions.setPinCode(""));
    dispatch(testRideActions.setTestRideAddress(""));
    dispatch(testRideActions.setSearchDealersBy(null));
  };

  return (
    <div>
      <div className="flex flex-row">
        <h4 className="trFET"> {t("testRide:label.rideLocation")}</h4>
        <span className="text-xs text-gray-400">
          {t("common:labels.opt-required")}
        </span>
      </div>
      <div className="w-full mt-4">
        <DropDownList
          defaultValue={t("testRide:placeHolder.rideLocation")}
          value={testRideLocation || ""}
          list={preferredLoc}
          idKey="Code"
          valueKey="Value"
          onChange={onPreferedLocationChanged}
        />
      </div>
    </div>
  );
};

export default TestRideLocation;
