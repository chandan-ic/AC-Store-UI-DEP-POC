import { React } from "react";
import { DropDownList } from "./DropDownList";

export const MobileNumber = ({
  placeholder,
  value,
  name,
  handleChange,
  error,
  reference,
  type,
  title,
  option,
  disabled,
}) => {
  const handleTextChange = (e) => {
    handleChange(e?.target?.value?.trim());
  };

  const onCountryCodeChanged = () => {};
  const country = [
    {
      id: 1,
      value: "91",
    },
  ];
  return (
    <div>
      <div className="flex flex-row">
        <h2 className="trFET">{title}</h2>
        <span className="text-xs text-gray-400 ml-1 ">{option}</span>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-28 mt-3 pr-0 md:pr-3">
          <DropDownList
            disabled={disabled}
            defaultValue="91"
            autoSelect={true}
            list={country}
            idKey="id"
            valueKey="value"
            onChange={onCountryCodeChanged}
          />
        </div>
        <input
          autoComplete="off"
          className={`mt-1 w-full block p-2 px-3 border text-sm
            border-gray-300 bg-white shadow-sm focus:outline-none  focus:ring-1 focus:ring-yellow-300 rounded-lg ${
              disabled ? "bg-gray-300" : ""
            }`}
          defaultValue={value || ""}
          placeholder={placeholder ? placeholder : ""}
          onChange={(e) => {
            handleTextChange(e);
          }}
          type={type ? type : null}
          name={name}
          ref={reference}
          disabled={disabled}
        />
      </div>

      {error && <span className="text-red-600 text-xs pt-2">{error}</span>}
    </div>
  );
};
