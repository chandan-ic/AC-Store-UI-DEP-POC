import React, { useEffect } from "react";

export const DropDownList = ({
  list,
  idKey,
  valueKey,
  onChange,
  defaultValue,
  value,
  autoSelect,
  disabled,
  width = "w-full",
}) => {
  const handleChanged = (e) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    if (autoSelect && list.length) {
      onChange(list[0][idKey]);
    }
  }, [autoSelect]);

  return (
    <select
      name={valueKey}
      className={`-mt-2 
                block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300 rounded-lg  ${width} ${
        disabled ? "bg-gray-400" : ""
      }`}
      onChange={(e) => {
        handleChanged(e);
      }}
      value={value}
      disabled={(list && !list.length) || disabled}
    >
      <option value="" hidden className="text-gray-300">
        {defaultValue}
      </option>
      {list &&
        list.map((item, index) => (
          <option key={index} value={item[idKey]} className="bg-white w-4">
            {" "}
            {item[valueKey]}
          </option>
        ))}
    </select>
  );
};
