import React, { useState } from "react";

export const Switch = ({ id, label, onChange, theme }) => {
  const [status, setStatus] = useState(false);

  const handleChange = () => {
    onChange(!status);
    setStatus(!status);
  };
  return (
    <div className="flex items-center justify-center ">
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className={`${theme} mr-3 text-gray-700 font-small`}>{label}</div>
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            checked={status}
            onChange={()=>{handleChange(status)}}
          />
          <div className="slider block bg-gray-600 w-9 h-5 rounded-full"></div>
          <div className="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};
