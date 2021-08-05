import React, { useEffect } from "react";

export const DynDropDownList = ({
  list,
  title,
  name,
  idKey,
  valueKey,
  handleChange,
  defaultValue,
  value,
  autoSelect,
  disabled,
  reference,
}) => {
 
  useEffect(() => {
    if (autoSelect && list.length) {
      onChange(list[0][idKey]);
    }
  }, [autoSelect]);

  return (
  <>  <div className="flex flex-row">
        <label className="trFET">{title}</label>
     </div>
    <select
      name={name}
      className={`-mt-2 md:w-4/5 w-full
                block p-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300 ${
                  disabled ? "bg-gray-400" : ""
                }`}
      onChange={(e) => {
        handleChange(name,e.target.value);
      }}
      value={value}
      disabled={!list.length || disabled}
      ref={reference}
    >
      <option value="">
        {defaultValue}
      </option>
      {list.map((item, index) => (
        <option key={index} value={item[idKey]} className="bg-white w-4">
          {" "}
          {item[valueKey]}
        </option>
      ))}
    </select>
    </>
  );
};
