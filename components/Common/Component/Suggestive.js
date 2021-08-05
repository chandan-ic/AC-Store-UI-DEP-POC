import React, { useEffect, useState } from "react";
import Image from "next/image";
import { YesNo } from "../Question";
import { suggestiveDataActions } from "../store/suggestiveData/suggestiveData-slice";
import { useDispatch, useSelector } from "react-redux";

export const Suggestive = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.suggestive.isShow);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(suggestiveDataActions.setIsShow(true));
    }, 5000);
  }, []);

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        dispatch(suggestiveDataActions.setIsShow(false));
      }, 20000);
    }
  }, [load]);

  useEffect(() => {
    setLoad(isShow);
  }, [isShow]);

  const getQuestion = (type) => {
    switch (type) {
      case "yesNo":
        return <YesNo />;
      default:
        return null;
    }
  };

  return (
    <div>
      {load && (
        <div className="fixed  flex flex-row  bottom-px left-px border border-gray-300 shadow-xl  bg-gray-100  px-1 py-2 mb-5">
          <div className="border border-blue-400 bg-white rounded m-1 p-2">
            <Image
              height={48}
              width={60}
              src="/images/khivrajlogo.png"
              alt="Khivraj Loog"
            />
          </div>
          <div>{getQuestion("yesNo")}</div>
        </div>
      )}
    </div>
  );
};
