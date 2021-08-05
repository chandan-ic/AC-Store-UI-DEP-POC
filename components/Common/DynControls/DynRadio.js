import React from 'react';

export const DynRadio = ({ value, options, handleChange, direction = "row", name = "radio", textKey, valueKey }) => {

    // props "direction" value should be "row" or "col". By Default it is "row"

    // const handleRadioChange = (e) => {
    //     handleChange(e.target.value)
    // }

    return (
        <div className={`w-full flex flex-${direction.trim()}`}>
            {
                options.map((opt, i) => {
                    return (
                        <div key={i}>
                            <label className="inline-flex items-center m-2">
                                <input type="radio" value={opt[valueKey]} checked={value === opt[valueKey]} onChange={(e) => {
                                    handleChange(name, e.target.value);
                                }}
                                    className="form-radio focus:border-transparent h-4 w-4 text-yellow-600 border-gray-300 border-2" name={name} />
                                <span className="ml-2">{opt[textKey]}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}