import React from "react";
import { Button } from "components/Common/Controls";

export const Modal = ({
  okText,
  cancelText,
  title,
  children,
  show,
  onOkClick,
  onCancelClick,
}) => {
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white p-5 w-5/6 sm:w-3/4  md:w-1/2 lg:w-1/3">
        <h2 className="text-center my-2 sm:my-5">{title}</h2>
        <div
          className=" overflow-auto "
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {children}
        </div>
        <div className="flex justify-center my-2 sm:my-5 ">
          {cancelText ? (
            <Button
              theme={"bg-gray-300 text-indigo-700 rounded-full mx-5 font-bold"}
              themeType="icon"
              handleClick={onCancelClick}
            >
              {cancelText}
            </Button>
          ) : null}
          {okText ? (
            <Button
              theme={
                "bg-yellow-400 text-indigo-700 rounded-full mx-5 font-bold"
              }
              themeType="icon"
              handleClick={onOkClick}
            >
              {okText}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
