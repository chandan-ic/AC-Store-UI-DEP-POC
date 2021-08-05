import React, { useEffect } from "react";

export const DynOption = ({
  list,
  name,
  idKey,
  valueKey,
  handleChange,
  defaultValue,
  value
}) => {
 
  return (
    <select
      name={name}
      className={`-mt-2 md:w-4/5 w-full
                block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300 
                }`}
      onChange={(e) => {
        handleChange(name,e.target.value);
      }}
      value={value}
    >
      <option value="" hidden>
        {defaultValue}
      </option>
      {list.map((item, index) => (
        <option key={index} value={item[idKey]} className="bg-white w-4">
          {" "}
          {item[valueKey]}
        </option>
      ))}
    </select>
  );
};
