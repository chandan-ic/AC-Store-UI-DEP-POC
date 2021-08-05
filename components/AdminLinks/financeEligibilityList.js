import Link from "next/link";
import React, { useState } from "react";
import {
  setAdminActiveLink,
  setAdminActiveList,
} from "../../store/user/actions";
import { useDispatch } from "react-redux";
import { server } from "../../config";
import axios from "axios";
export default function FinancialRequestList() {
  const dispatch = useDispatch();
  dispatch(setAdminActiveLink("finance"));
  dispatch(setAdminActiveList("Finance Eligibility Request List"));
  return (
    <div className=" py-4 overflow-x-auto  ">
      <h3 className="font-LibreFranklin font-semibold text-center pb-4">
        FINANCE ELIGIBILITY REQUEST LIST
      </h3>
      <div className="align-middle inline-block min-w-full shadow-md  bg-gray-200 shadow-dashboard px-4 py-4 rounded-bl-xl rounded-br-xl">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="font-LibreFranklin   px-6  py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                CustomerName
              </th>
              <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                CONTACT DETAILS
              </th>
              <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                VEHICLE SELECTED
              </th>
              <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                FINANCE REQUESTED
              </th>
              <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                DOCUMENTS SUBMITTED
              </th>
              <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                REMARKS
              </th>
              <th className="font-LibreFranklin    px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                STATUS
              </th>
              <th className="font-LibreFranklin    px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">
                View Details
              </th>
            </tr>
          </thead>
          <tbody className=" font-LibreFranklin bg-white ">
            <tr>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500">
                <div className="text-sm font-LibreFranklin">Abc</div>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">
                8898374237 <br />
                abc@gmail.com
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500 text-sm leading-5">
                {" "}
                Dominar 250
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">
                20000
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                Pancard
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                <select className="w-24 rounded-md py-2 border-2 border-gray-300">
                  <option classNameName="uppercase text-sm">Remark</option>
                </select>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                <select className="w-24 rounded-md py-2 border-2 border-gray-300">
                  <option classNameName="uppercase text-sm">Status</option>
                </select>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap  border-2 border-gray-500 text-sm leading-5">
                <Link href="/admin/viewDetails">
                  <a className="border-theme border-b-2">View Details</a>
                </Link>
              </td>
            </tr>

            <tr>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500">
                <div className="text-sm">Abc</div>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">
                8898374237 <br />
                abc@gmail.com
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500 text-sm leading-5">
                {" "}
                Dominar 250
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">
                20000
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                Pancard
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                <select className="w-24 rounded-md py-2 border-2 border-gray-300">
                  <option classNameName="uppercase text-sm">Remark</option>
                </select>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                <select className="w-24 rounded-md py-2 border-2 border-gray-300">
                  <option classNameName="uppercase text-sm">Status</option>
                </select>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap  border-2 border-gray-500 text-sm leading-5">
                <Link href="/admin/viewDetails">
                  <a className="border-theme border-b-2">View Details</a>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500">
                <div className="text-sm">Abc</div>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">
                8898374237 <br />
                abc@gmail.com
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500 text-sm leading-5">
                {" "}
                Dominar 250
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">
                20000
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                Pancard
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                <select className="w-24 rounded-md py-2 border-2 border-gray-300">
                  <option classNameName="uppercase text-sm">Remark</option>
                </select>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap border-2 border-gray-500  text-sm leading-5">
                <select className="w-24 rounded-md py-2 border-2 border-gray-300">
                  <option classNameName="uppercase text-sm">Status</option>
                </select>
              </td>
              <td className="text-center  px-6 py-4 whitespace-no-wrap  border-2 border-gray-500 text-sm leading-5">
                <Link href="/admin/viewDetails">
                  <a className="border-theme border-b-2">View Details</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
