import React from "react";

export const FullScreenLoader = () => {
  return (
    <div className="flex pt-20 h-screen w-full bg-gray-400 items-center justify-center">
      <div
        className={`h-2.5 w-2.5 bg-yellow-400 rounded-full mr-1 animate-bounce`}
      ></div>
      <div
        className={`h-2.5 w-2.5 bg-yellow-400 rounded-full mr-1 animate-bounce200`}
      ></div>
      <div
        className={`h-2.5 w-2.5 bg-yellow-400 rounded-full animate-bounce400`}
      ></div>
    </div>
  );
};
