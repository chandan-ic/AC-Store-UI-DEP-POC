import React from "react";
import Image from "next/image";

export const ProductFeature = () => {
  return (
    <div className="flex flex-row w-full ">
      <div className="flex flex-row w-1/2 p-5">
        <Image height={41} width={45} src="/images/booking/GasStation.png" />
        <div className="ml-3">
          <h4 className="text-gray-500">Fuel Type</h4>
          <h4 className="font-bold">Petrol</h4>
        </div>
      </div>
      <div className="flex flex-row w-1/2 p-5">
        <Image height={41} width={45} src="/images/booking/Gearbox.png" />
        <div className="ml-3">
          <h4 className="text-gray-500">Tramission</h4>
          <h4 className="font-bold">Manual</h4>
        </div>
      </div>
    </div>
  );
};
