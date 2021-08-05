import React, { useEffect, useRef, useState } from "react";

export const Button = ({
  handleClick,
  disabled,
  children,
  theme,
  themeType,
  width,
  type = "button",
  tabIndex,
  value,
}) => {
  const inputEl = useRef(null);
  const [changed, setChanged] = useState(false);

  const handleCLicked = (e) => {
    handleClick(e);
    setChanged(!changed);
  };

  useEffect(() => {
    let timer1 = setTimeout(
      () => inputEl.current.removeAttribute("disabled"),
      200
    );
    let timer2 = setTimeout(
      () => inputEl.current.setAttribute("disabled", true),
      10
    );
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [changed]);

  return (
    <button
      disabled={disabled}
      value={value}
      type={type}
      ref={inputEl}
      tabIndex={tabIndex}
      className={`${theme} ${width}   disabled:opacity-50 
            ${
              themeType === "icon"
                ? ""
                : "border-1 hover:border-transparent rounded border-gray-500 hover: text-sm hover:bg-gray-100  hover:shadow-lg  transition-colors duration-1000 ease-out uppercase"
            }
            ${themeType === "link" ? "" : "mt-2 py-1.5 px-5"}`}
      onClick={(e) => {
        handleCLicked(e);
      }}
    >
      {children}
    </button>
  );
};
