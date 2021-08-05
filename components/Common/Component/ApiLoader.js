import React from "react";

export const ApiLoader = ({ show }) => {
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      }h-screen w-full absolute top-0 left-0  z-50`}
    ></div>
  );
};
