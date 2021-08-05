import { CheckBox } from "components/Common/Controls";
import React, { useState } from "react";

export const DropDownFilter = ({
  list,
  idKey,
  valueKey,
  onChange,
  title,
  data,
  keyVal,
  width = "w-full",
}) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState([]);
  const [len, setLen] = useState(0);

  const handleChanged = (index, val) => {
    let value = values;
    value[index] = val;
    setValues([...value]);
    setLen(0);
    values.forEach((val) => setLen(values[0].length + values[1].length));
    let dataValues = [];

    keyVal.map((id, index) => {
      value[index].map((selValue) => {
        dataValues = [
          ...dataValues,
          ...data.filter((dat) => {
            return dat[id].indexOf(Number(selValue)) !== -1;
          }),
        ];
      });
    });
    const result = [...new Set(dataValues)];
    onChange(result.length === 0 ? data : result);
  };

  return (
    <div className="relative">
      <div
        className={`-mt-4 
                block   bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300  ${width} absolute right-0`}
      >
        <button
          type="button"
          value=""
          className={`border border-gray-300 p-2 px-3   mt-2 flex justify-between items-center w-full focus:outline-none ${
            show ? "rounded-t-lg" : "rounded-lg"
          }`}
          onClick={() => {
            setShow(!show);
          }}
        >
          <div>
            {len} {len <= 1 ? "item" : "items"} selected
          </div>
          <div>
            <svg x="0px" y="0px" viewBox="0 0 330 330" className="h-3">
              <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
            </svg>
          </div>
        </button>

        <div
          className={`${
            show ? "" : "hidden"
          } border border-gray-300 p-2 px-3  rounded-b-lg `}
        >
          {list &&
            list.map((item, index) => {
              if (values.length <= index) values.push([]);
              return (
                <div key={index} className="bg-white">
                  <span className="text-sm underline">{title[index]}</span>
                  <CheckBox
                    value={values[index]}
                    options={item || []}
                    direction="col"
                    handleChecked={(val) => {
                      handleChanged(index, val);
                    }}
                    textKey={valueKey[index]}
                    valueKey={idKey[index]}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
