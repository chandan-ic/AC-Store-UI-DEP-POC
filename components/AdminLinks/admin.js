import React, { useState } from 'react';
import TestRequestList from './testRideRequestList';
import FinancialRequestList from './financeEligibilityList';
import RegisteredUserList from './registerdUserList';

import { useSelector } from 'react-redux';


export default function Admin() {
    const isOpen = useSelector((state) => state.user.isOpen);
    const [show, setShow] = useState("reg");
    const adminLink = useSelector((state) => state.user.adminLink);

    const callDisp = (e) => {
        setShow(e.target.value);
    }

    return (

        <div className="">
            {isOpen ? <div className="w-full flex flex-col lg:flex-row  pt-20">
                <div className="w-full lg:w-1/4 flex flex-col  lg:min-h-screen lg:border-gray-300  lg:border-r-2 lg:divide-y-2 lg:divide-gray-400">
                    <div className={`${adminLink === "reg" ? "p-3 bg-gray-300 inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200" : "p-3 bg-white inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200"}`}>
                        <span><img className="w-10 h-10 mr-6 lg:block hidden " src="/images/regicon.png" /></span>
                        <button className=" focus:outline-none uppercase text-left  font-bold py-2 text-xs lg:text-sm" value="reg" onClick={callDisp}>Registered Users List</button>
                        <span className="w-4 h-4 ml-28 p-0.5 lg:block hidden"><img src="/images/rightangle.png" /></span>
                    </div>
                    <div className={`${adminLink === "testride" ? "p-3 bg-gray-300 inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200" : "p-3 bg-white inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200"}`}>
                        <span><img className="w-10 h-10 mr-2 lg:block hidden" src="/images/bikeIcon.png" /></span>
                        <button className="uppercase focus:outline-none text-left font-bold text-xs lg:text-sm py-2" value="testride" onClick={callDisp}>TestRide Request List </button>
                        <span className="w-4 h-4 ml-28 p-0.5 lg:block hidden"><img src="/images/rightangle.png" /></span>
                    </div>
                    <div className={`${adminLink === "finance" ? "p-3 bg-gray-300 inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200" : "p-3 bg-white inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200"}`}>
                        <span><img className="w-10 h-10 mr-2 lg:block hidden" src="/images/finance-eligibility-v1.png" /></span>
                        <button className="uppercase focus:outline-none text-left text-xs font-bold lg:text-sm py-2" value="finance" onClick={callDisp}> Finance Eligibility Request List</button>
                        <span className="w-4 h-4 ml-8 p-0.5 lg:block hidden"><img src="/images/rightangle.png" /></span>
                    </div>
                    <button></button>
                </div>
                <div className=" w-3/4 ">
                    <div className="">{show === 'reg' && <RegisteredUserList />}</div>
                    <div className="">{show === 'finance' && <FinancialRequestList />}</div>
                    <div className="">{show === 'testride' && <TestRequestList />}</div>

                </div>
            </div> : null}

            <div className=" w-full flex flex-col lg:flex-row  pt-20">
                <div className="w-full lg:w-1/4 flex flex-col  lg:min-h-screen lg:border-gray-300  lg:border-r-2 lg:divide-y-2 lg:divide-gray-400">
                    <div className={`${adminLink === "reg" ? "p-3 bg-gray-300 inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200" : "p-3 bg-white inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200"}`}>
                        <span><img className="w-10 h-10 mr-6 lg:block hidden " src="/images/regicon.png" /></span>
                        <button className=" focus:outline-none uppercase text-left  font-bold py-2 text-xs lg:text-sm" value="reg" onClick={callDisp}>Registered Users List</button>
                        <span className="w-4 h-4 ml-28 p-0.5 lg:block hidden"><img src="/images/rightangle.png" /></span>
                    </div>
                    <div className={`${adminLink === "testride" ? "p-3 bg-gray-300 inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200" : "p-3 bg-white inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200"}`}>
                        <span><img className="w-10 h-10 mr-2 lg:block hidden" src="/images/bikeIcon.png" /></span>
                        <button className="uppercase focus:outline-none text-left font-bold text-xs lg:text-sm py-2" value="testride" onClick={callDisp}>TestRide Request List </button>
                        <span className="w-4 h-4 ml-28 p-0.5 lg:block hidden"><img src="/images/rightangle.png" /></span>
                    </div>
                    <div className={`${adminLink === "finance" ? "p-3 bg-gray-300 inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200" : "p-3 bg-white inline-flex  border-b-2  items-center w-full whitespace-nowrap lg:border-b-0 lg:border-r-0 border-r-2 border-gray-200"}`}>
                        <span><img className="w-10 h-10 mr-2 lg:block hidden" src="/images/finance-eligibility-v1.png" /></span>
                        <button className="uppercase focus:outline-none text-left text-xs font-bold lg:text-sm py-2" value="finance" onClick={callDisp}> Finance Eligibility Request List</button>
                        <span className="w-4 h-4 ml-8 p-0.5 lg:block hidden"><img src="/images/rightangle.png" /></span>
                    </div>
                    <button></button>
                </div>
                <div className=" w-3/4 ">
                    <div className="">{show === 'reg' && <RegisteredUserList />}</div>
                    <div className="">{show === 'finance' && <FinancialRequestList />}</div>
                    <div className="">{show === 'testride' && <TestRequestList />}</div>

                </div>
            </div>
        </div>

    )
}

