import { testRideActions } from "components/TestRide/store/testRide-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchByPincode, SearchByCity } from ".";
import { TR_SEARCHBY_DEALER } from "utils/constant/testRide";
import { Radio } from "components/Common/Controls";
import { useTranslation } from "next-i18next";

export const DealerSearchOption = () => {
  const dispatch = useDispatch();
  const searchDealersBy = useSelector(
    (state) => state.testRide.searchDealersBy
  );
  const [searchBy, setSearchBy] = useState("");
  const { t } = useTranslation(["testRide", "common"]);

  useEffect(() => {
    setSearchBy(searchDealersBy);
  }, [searchDealersBy]);

  const handleRadioChange = (selectedOptionValue) => {
    dispatch(testRideActions.setSearchDealersBy(selectedOptionValue));
    dispatch(testRideActions.setRideState(""));
    dispatch(testRideActions.setRideCity(""));
    dispatch(testRideActions.setDealerCode(null));
  };

  return (
    <div>
      <div className="flex flex-row ">
        <h4 className="trFET"> {t("testRide:label.searchDealersBy")}</h4>
        <span className="text-xs text-gray-400">
          {t("common:labels.opt-required")}
        </span>
      </div>
      <Radio
        value={searchDealersBy}
        options={TR_SEARCHBY_DEALER}
        name="dealer-search"
        handleChange={handleRadioChange}
        textKey="text"
        valueKey="value"
      />
      {searchBy === "CTY" && <SearchByCity />}
      {searchBy === "PIN" && <SearchByPincode />}
    </div>
  );
};
