import { Button, DropDownList, TextBox } from "components/Common/Controls";
import { getStateCityRequest } from "components/Common/store/masterData/masterData-action";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCity, getStates } from "utils/helper/storeHelper/masterDataHelper";
import { sendDealerDataRequest } from "components/Common/store/dealerData/dealerData-action";
import { dealerDataActions} from "components/Common/store/dealerData/dealerData-slice";
import { bookingActions } from "components/Booking/store/booking-slice";
import { bkPincodeFormschema } from "utils/validation/bookingValidation";
import { yupResolver } from "@hookform/resolvers/yup";


export const DealerSearch = () => {
  const { t } = useTranslation(["booking", "error", "common"]);
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState(0);
  const [city, setCity] = useState(0);
  const dispatch = useDispatch();

  const { isStateCityLoaded } = useSelector((state) => state.master);
  const { selectedModel } = useSelector((state) => state.booking);

  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const  yupSchema = bkPincodeFormschema();

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: searchBy === "CTY" ? "" : yupResolver(yupSchema),
  });
  const [searchBy, setSearchBy] = useState(false);

  


  const onSubmit = () =>{
    var data = JSON.stringify({
      modelSlno: selectedModel,
      filterType: searchBy === "CTY" ? "C" : "P",
      filterValue: searchBy === "CTY" ? String(city) : pinCode,
    });
    dispatch(sendDealerDataRequest(data));
  }

  useEffect(() => {
    dispatch(getStateCityRequest());
  }, []);

  useEffect(() => {
    if (isStateCityLoaded) {
      setStates(getStates());
    }
  }, [isStateCityLoaded]);

  useEffect(() => {
    if (isStateCityLoaded) {
      setCities(getCity(state));
    }
  }, [state]);


  return (
    <div className="mt-5 ">
      <h2>{t("booking:labels.FindDealerStores")}</h2>
      <div className="relative w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 w-full md:w-72 ml-0 md:ml-14">
            <TextBox
              placeholder={t("booking:placeHolder.pincode")}
              title={t("booking:labels.pincode")}
              value={pinCode}
              handleChange={(val) => {
                setPinCode(val);
              }}
              name="pincode"
              error={errors?.pincode?.message}
              reference={register}
            />
          </div>
          <div className="mt-3 w-full md:w-72 text-center ml-0 md:ml-14">
            <Button
              handleClick={() => {
                setSearchBy("PIN");
                onSubmit();
              }}
              theme="yellow-contained rounded-3xl text-white-700"
              disabled= {pinCode === ""}
            >
              <div className="pointer-events-none flex items-center justify-center">
                <div className="pointer-events-none  pl-5">
                {t("booking:labels.searchByPincode")}
                </div>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  className="ml-5"
                >
                  <path
                    d="M8.68076 7.19553L11 9.30344L10.2338 10L7.91508 7.8916C7.05233 8.52034 5.97923 8.86231 4.87349 8.86088C2.18332 8.86088 0 6.87605 0 4.43044C0 1.98484 2.18332 0 4.87349 0C7.56365 0 9.74697 1.98484 9.74697 4.43044C9.74855 5.43566 9.37238 6.41121 8.68076 7.19553ZM7.59452 6.83027C8.28174 6.18779 8.66553 5.32659 8.66398 4.43044C8.66398 2.52634 6.96746 0.984543 4.87349 0.984543C2.77897 0.984543 1.083 2.52634 1.083 4.43044C1.083 6.33406 2.77897 7.87634 4.87349 7.87634C5.85925 7.87775 6.80657 7.52885 7.51329 6.90411L7.59452 6.83027Z"
                    fill="#000000"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </form>
        <div className="mt-8 w-full md:w-72 text-center font-bold  ml-0 md:ml-14">
          {t("booking:labels.or")}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 w-full md:w-72 ml-0 md:ml-14">
            <div className="flex flex-row items-center">
              <h4 className="trFET"> {t("booking:labels.state")}</h4>
            </div>
            <div className="w-full mt-4">
              <DropDownList
                defaultValue={t("booking:placeHolder.state")}
                value={state}
                list={states}
                idKey="StateSlno"
                valueKey="State"
                onChange={(val) => {setState(val)}}
              />
            </div>
          </div>
          <div className="mt-5 w-full md:w-72 ml-0 md:ml-14">
            <div className="flex flex-row align-middle">
              <h4 className="trFET"> {t("booking:labels.city")}</h4>
            </div>
            <div className="w-full mt-4">
              <DropDownList
                defaultValue={t("booking:placeHolder.city")}
                value={city}
                list={cities}
                idKey="CitySlno"
                valueKey="City"
                onChange={(val) => setCity(val)}
              />
            </div>
          </div>
          <div className="mt-5 w-full md:w-72 text-center ml-0 md:ml-14">
            <Button
              handleClick={() => {
                setSearchBy("CTY")
                onSubmit();
              }}
              theme="yellow-contained rounded-3xl text-white-700"
              disabled={city === 0}
            >
              <div className="pointer-events-none flex items-center justify-center">
                <div className="pointer-events-none  pl-5">{t("booking:labels.searchByCity")}</div>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  className="ml-5"
                >
                  <path
                    d="M8.68076 7.19553L11 9.30344L10.2338 10L7.91508 7.8916C7.05233 8.52034 5.97923 8.86231 4.87349 8.86088C2.18332 8.86088 0 6.87605 0 4.43044C0 1.98484 2.18332 0 4.87349 0C7.56365 0 9.74697 1.98484 9.74697 4.43044C9.74855 5.43566 9.37238 6.41121 8.68076 7.19553ZM7.59452 6.83027C8.28174 6.18779 8.66553 5.32659 8.66398 4.43044C8.66398 2.52634 6.96746 0.984543 4.87349 0.984543C2.77897 0.984543 1.083 2.52634 1.083 4.43044C1.083 6.33406 2.77897 7.87634 4.87349 7.87634C5.85925 7.87775 6.80657 7.52885 7.51329 6.90411L7.59452 6.83027Z"
                    fill="#000000"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
