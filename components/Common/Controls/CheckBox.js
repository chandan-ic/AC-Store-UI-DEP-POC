import React, { useEffect, useState } from "react";

export const CheckBox = ({
  value,
  options,
  handleChecked,
  direction = "row",
  name = "checkbox",
  textKey,
  valueKey,
}) => {
  // props "direction" value should be "row" or "col". By Default it is "row"
  // value is array that container all selected values.

  const [isChanged, setChanged] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(value);
  }, [value]);

  const handleCheckedChange = (e) => {
    const index = values.indexOf(e.target.value);
    const selectedValues = [...values];
    setChanged(!isChanged);
    if (index === -1) {
      selectedValues.push(e.target.value);
    } else {
      selectedValues.splice(index, 1);
    }
    handleChecked(selectedValues);
  };

  return (
    <div className={`w-full flex flex-${direction.trim()}`}>
      {options.map((opt, i) => {
        return (
          <div key={i}>
            <label className="inline-flex items-center m-2">
              <input
                type="checkbox"
                value={opt[valueKey].toString()}
                checked={values.indexOf(opt[valueKey].toString()) !== -1}
                onChange={(e) => {
                  handleCheckedChange(e);
                }}
                className="form-checkbox h-4 w-4 text-yellow-600 border-gray-300 border-2"
                name={name}
              />
              <span className="ml-2">{opt[textKey]}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};
