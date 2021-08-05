import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { Button, TextBox } from "components/Common/Controls";

export const CustomerProfileUI = () => {
  const { t } = useTranslation(["profile", "common"]);
  const [openTab, setOpenTab] = useState(1);
  const [isEdit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(!isEdit);
  };

  return (
    <div className="relative">
      <div className="flex flex-col ml-10 mr-6 md:ml-20 mt-10">
        <div className=" w-full md:w-2/3">
          <div>
            <div className="w-full h-56 border bg-gray-100 border-yellow-200 rounded-lg">
              <div className="ml-10">
                <p className="py-4 font-bold text-gray-700">
                  Your Profile photo
                </p>
                <div className=" w-40 h-36 border border-gray-400 py-16 text-center bg-gray-100">
                  PN
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="w-full h-auto border bg-gray-100 border-gray-300 rounded-lg">
              <div className="ml-4">
                <div>
                  <ul
                    className="flex  flex-row mt-4 justify-start"
                    role="tablist"
                  >
                    <li className="pr-6 p-2 ">
                      <a
                        className={
                          " px-4  block tracking-wider " +
                          (openTab === 1
                            ? "font-bold text-gray-700 flex-1 border-b border-yellow-300"
                            : " text-normal border-b border-gray-300")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        About You
                      </a>
                    </li>
                    <li className="pr-4 p-2 ">
                      <a
                        className={
                          " px-4  block tracking-wider " +
                          (openTab === 2
                            ? "font-bold text-gray-700 flex-1 border-b border-yellow-300"
                            : " text-normal border-b border-gray-300")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        Other Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tab-content tab-space mb-10 mt-4">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" ml-10  relative flex flex-col">
                    <div className="w-full md:w-2/5">
                      <p className="mb-4  text-gray-500  text-normal ">
                        Personal Information
                      </p>
                      <div className="flex flex-row flex-wrap mt-2 items-center">
                        <div className="flex-1 text-gray-500">
                          {t("profile:label.name")}:{" "}
                        </div>
                        {!isEdit ? (
                          <div className="flex-1">Kalai</div>
                        ) : (
                          <TextBox />
                        )}
                      </div>

                      <div className="flex flex-row flex-wrap mt-2 items-center">
                        <div className="flex-1 text-gray-500">
                          {t("profile:label.email")}:{" "}
                        </div>
                        {!isEdit ? (
                          <div className="flex-1">sample@inarvo.com</div>
                        ) : (
                          <TextBox />
                        )}
                      </div>

                      <div className="flex flex-row flex-wrap mt-2 items-center">
                        <div className="flex-1 text-gray-500">
                          {t("profile:label.phone")}:{" "}
                        </div>
                        {!isEdit ? (
                          <div className="flex-1">Phone</div>
                        ) : (
                          <TextBox />
                        )}
                      </div>
                    </div>
                    <div className="self-end mr-6 pt-6">
                      {!isEdit ? (
                        <div>
                          <button
                            className="focus:outline-none m-1 border border-yellow-400  border-2 px-2 text-yellow-400 text-xs font-bold"
                            onClick={() => {
                              handleEditClick();
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-5">
                      {isEdit ? (
                        <Button theme="yellow-contained float-right">
                          Submit
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <div className=" ml-10  relative flex flex-col">
                    <div className="w-full md:w-2/5">
                      <p className="mb-4  text-gray-500  text-normal ">
                        Other Information
                      </p>
                      <div className="flex flex-row flex-wrap mt-2 items-center">
                        <div className="flex-1 text-gray-500">
                          {t("profile:label.dob")}:{" "}
                        </div>
                        {!isEdit ? (
                          <div className="flex-1">19-12-2019</div>
                        ) : (
                          <TextBox />
                        )}
                      </div>

                      <div className="flex flex-row flex-wrap mt-2 items-center">
                        <div className="flex-1 text-gray-500">
                          {t("profile:label.spouseName")}:{" "}
                        </div>
                        {!isEdit ? (
                          <div className="flex-1">Shelton</div>
                        ) : (
                          <TextBox />
                        )}
                      </div>

                      <div className="flex flex-row flex-wrap mt-2 items-center">
                        <div className="flex-1 text-gray-500">
                          {t("profile:label.childName")}:{" "}
                        </div>
                        {!isEdit ? (
                          <div className="flex-1">Jerly</div>
                        ) : (
                          <TextBox />
                        )}
                      </div>
                    </div>
                    <div className="self-end mr-6 pt-6">
                      {!isEdit ? (
                        <div>
                          <button
                            className="focus:outline-none m-1 border border-yellow-400  border-2 px-2 text-yellow-400 text-xs font-bold"
                            onClick={() => {
                              handleEditClick();
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-5">
                      {isEdit ? (
                        <Button theme="yellow-contained float-right">
                          Submit
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
