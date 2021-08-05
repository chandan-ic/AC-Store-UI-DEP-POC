import { useTranslation } from "next-i18next";
import { React, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { Button } from "./Button";

export const TextBox = ({
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
  defaultValue,
  autoFocus = false,
  theme,
}) => {
  const handleTextChange = (e) => {
    if (type === "password") {
      if (e?.target?.value.indexOf(" ") === -1) {
        handleChange(e?.target?.value);
      }
    } else {
      handleChange(e?.target?.value);
    }
  };

  const [txtType, setTxtType] = useState(type);

  const { t } = useTranslation(["register", "common"]);

  const changeType = () => {
    if (txtType === "password") {
      setTxtType("text");
    } else {
      setTxtType("password");
    }
  };

  useEffect(() => {
    if (autoFocus) {
      document.getElementById(name).focus();
    }
  }, [autoFocus]);

  return (
    <div className={theme}>
      <div className="flex flex-row flex-wrap">
        <h2 className="trFET">{title}</h2>
        <span className="text-xs text-gray-400 ml-1 ">{option}</span>

        {type === "password" ? (
          <>
            <button className="ml-1" data-tip="" data-for={name}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#000000"
                  d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
                ></path>
                <path
                  fill="#FFF"
                  d="M323.2 367.5c-1.4-2-4-2.8-6.3-1.7-24.6 11.6-52.5 23.9-58 25-.1-.1-.4-.3-.6-.7-.7-1-1.1-2.3-1.1-4 0-13.9 10.5-56.2 31.2-125.7 17.5-58.4 19.5-70.5 19.5-74.5 0-6.2-2.4-11.4-6.9-15.1-4.3-3.5-10.2-5.3-17.7-5.3-12.5 0-26.9 4.7-44.1 14.5-16.7 9.4-35.4 25.4-55.4 47.5-1.6 1.7-1.7 4.3-.4 6.2 1.3 1.9 3.8 2.6 6 1.8 7-2.9 42.4-17.4 47.6-20.6 4.2-2.6 7.9-4 10.9-4 .1 0 .2 0 .3 0 0 .2.1.5.1.9 0 3-.6 6.7-1.9 10.7-30.1 97.6-44.8 157.5-44.8 183 0 9 2.5 16.2 7.4 21.5 5 5.4 11.8 8.1 20.1 8.1 8.9 0 19.7-3.7 33.1-11.4 12.9-7.4 32.7-23.7 60.4-49.7C324.3 372.2 324.6 369.5 323.2 367.5zM322.2 84.6c-4.9-5-11.2-7.6-18.7-7.6-9.3 0-17.5 3.7-24.2 11-6.6 7.2-9.9 15.9-9.9 26.1 0 8 2.5 14.7 7.3 19.8 4.9 5.2 11.1 7.8 18.5 7.8 9 0 17-3.9 24-11.6 6.9-7.6 10.4-16.4 10.4-26.4C329.6 96 327.1 89.6 322.2 84.6z"
                ></path>
              </svg>
            </button>
            <ReactTooltip
              id={name}
              place="top"
              effect="solid"
              backgroundColor="black"
            >
              <div className=" text-xs py-1 ">
                {t("common:validation.passwordmustHave")}
                <ul className="list-disc ml-3 text-left">
                  <li>{t("common:validation.pUppercase")}</li>
                  <li>{t("common:validation.pLowerCase")}</li>
                  <li>{t("common:validation.pNumber")}</li>
                  <li>{t("common:validation.pSpecialChar")}</li>
                </ul>
              </div>
            </ReactTooltip>
          </>
        ) : null}
      </div>
      <div className="flex flex-row items-center relative">
        <input
          onCopy={(event) => {
            if (type === "password") event.preventDefault();
          }}
          onPaste={(event) => {
            if (type === "password") event.preventDefault();
          }}
          autoComplete="off"
          className={`mt-1 w-full  block p-2 px-3 border text-sm rounded-lg
              border-gray-300 bg-white shadow-sm focus:outline-none  focus:ring-1 focus:ring-yellow-300 ${
                type === "password" ? "pr-8" : ""
              } ${disabled ? "bg-gray-300" : ""}`}
          defaultValue={value || ""}
          placeholder={placeholder ? placeholder : ""}
          onChange={(e) => {
            handleTextChange(e);
          }}
          type={txtType ? txtType : null}
          name={name}
          id={name}
          ref={reference}
          disabled={disabled}
        />
        {type === "password" ? (
          <div className={`p-2 absolute -right-5 `}>
            <Button
              handleClick={changeType}
              themeType="icon"
              theme="focus:outline-none"
              tabIndex="-1"
            >
              {txtType === "text" ? (
                <svg
                  className="h-4 text-gray-700 block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-4 text-gray-700 block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              )}
            </Button>
          </div>
        ) : null}
      </div>

      {error && error !== "showError" && (
        <span className="text-red-600 text-xs pt-2">{error}</span>
      )}
      {type === "password" && error === "showError" ? (
        <div className="text-red-600 text-xs pt-2">
          {t("common:validation.passwordmustHave")}
          <ul className="list-disc ml-5">
            <li>{t("common:validation.pUppercase")}</li>
            <li>{t("common:validation.pLowerCase")}</li>
            <li>{t("common:validation.pNumber")}</li>
            <li>{t("common:validation.pSpecialChar")}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
