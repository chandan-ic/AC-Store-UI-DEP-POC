import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../Common/Controls";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { BikeBrand, BikeModel } from "components/Common/Component";
import { useTranslation } from "next-i18next";

export const SelectBike = ({ setForm, formData, navigation }) => {
  const { t } = useTranslation(["testRide", "common"]);

  const dispatch = useDispatch();
  const { bikeVariant, bikeBrand, preSelected } = useSelector(
    (state) => state.testRide
  );
  const [disabled, setEnabled] = useState(true);
  const { next, go } = navigation;
  const [isChanged, setChanged] = useState(false);

  useEffect(() => {
    dispatch(testRideActions.setSubmitStatus(false));
  }, []);

  useEffect(() => {
    if (preSelected) {
      go("selectlocation");
    }
  }, [preSelected]);

  useEffect(() => {
    if (bikeVariant && bikeBrand) {
      setEnabled(false);
    }
  }, [bikeBrand, bikeVariant]);

  useEffect(() => {
    dispatch(testRideActions.setCurrentPage("bikeSelect"));
    dispatch(testRideActions.setSubmitStatus(false));
  }, []);

  const onBrandChanged = (selectedBrand) => {
    dispatch(testRideActions.setBikeBrand(selectedBrand));
    dispatch(testRideActions.setBikeVariant(""));
    setChanged(!isChanged);
  };

  const onModelChanged = (selectedModel) => {
    dispatch(testRideActions.setBikeVariant(selectedModel));
    setChanged(!isChanged);
  };
  return (
    <section id="selectbike" className="flex items-start h-full ">
      <div className="container w-full sm:w-4/5 h-full mt-3 bg-white">
        <div className="flex flex-col md:flex-row w-full h-full mt-10  ">
          <div className="w-full md:w-1/2 pr-0 sm:pr-10">
            <BikeBrand bikeBrand={bikeBrand} onBrandChanged={onBrandChanged} />
          </div>
          <div className="w-full md:w-1/2 md:mt-0 mt-8 pr-0 sm:pr-10">
            <BikeModel
              bikeBrand={bikeBrand}
              bikeVariant={bikeVariant}
              onModelChanged={onModelChanged}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-end mt-10 pb-5 sm:pb-5 sm:mt-40 space-x-10">
          <Button
            handleClick={next}
            disabled={disabled}
            theme="yellow-contained"
          >
            {" "}
            {t("testRide:buttonTxt.next")}
          </Button>
        </div>
      </div>
    </section>
  );
};
