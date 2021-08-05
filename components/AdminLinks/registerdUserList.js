import React, { useState } from 'react';
import { setAdminActiveLink, setAdminActiveList } from '../../store/user/actions';
import { useDispatch } from 'react-redux';
import { server } from '../../config';
import axios from 'axios';


export default function RegisteredUserList() {
    const dispatch = useDispatch();
    dispatch(setAdminActiveLink("reg"))
    dispatch(setAdminActiveList("Registered User List"))
    return (
        <div className=" py-4 overflow-x-auto  ">
            <h3 className="font-LibreFranklin font-semibold text-center pb-4">REGISTERED CUSTOMER LIST</h3>
            <div className="align-middle inline-block min-w-full shadow-md  bg-gray-200 shadow-dashboard px-4 py-4 rounded-bl-xl rounded-br-xl">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="font-LibreFranklin   px-6  py-3 border-2 border-gray-800 text-center whitespace-nowrap font-bold tracking-tight uppercase">CUSTOMER NAME</th>
                            <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-center whitespace-nowrap font-bold tracking-tight uppercase">CONTACT DETAILS</th>
                            <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-center whitespace-nowrap font-bold tracking-tight uppercase">DATE OF REGISTRATION</th>
                            <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-center whitespace-nowrap font-bold tracking-tight uppercase">REGISTRATION STATUS</th>
                            {/* <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">DOCUMENTS SUBMITTED</th>
                            <th className="font-LibreFranklin   px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">REMARKS</th>
                            <th className="font-LibreFranklin    px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">STATUS</th>
                            <th className="font-LibreFranklin    px-6 py-3 border-2 border-gray-800 text-left whitespace-nowrap font-bold tracking-tight uppercase">View Details</th> */}
                        </tr>
                    </thead>
                    <tbody className=" font-LibreFranklin bg-white ">
                        <tr >
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">Mr.AK</td>
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5"> Mob:7685478120<br /> Email:ek@gmailco</td>
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">25-April-21</td>
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">Registered</td>

                        </tr>
                                             <tr >
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">Mr.AK</td>
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5"> Mob:7685478120<br /> Email:ek@gmailco</td>
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">25-April-21</td>
                            <td className="text-center  px-6 py-4 whitespace-no-wrap border-2  border-gray-500 text-sm leading-5">Registered</td>

                        </tr>
                    </tbody>


                </table>
            </div>


        </div>
    )
}