import React, { useState } from 'react';


export default function SearchHeader() {

    return (
        <div className="container">
            <div className="flex flex-row border border-gray-100 py-5 justify-between">
                <div className="flex flex-row space-x-5">
                    <h3 className="ml-4 ">Compare:</h3>
                    <div className="border border-gray-100 rounded-full w-20 p-1 inline-flex space-x-3">
                        <h6>X</h6>
                        <h6 className=""> Pulsar </h6>
                    </div >
                    <div className="border border-gray-100 rounded-full w-20 p-1 inline-flex space-x-3" >
                        <h6>X</h6>
                        <h6> Platina </h6>
                    </div>
                    <div className="border border-gray-100 rounded-full w-10 p-1 uppercase" >
                        <h6 className="text-center"> Go</h6>
                    </div>
                    <div className="" >
                        <h4 className="text-center"> Clear all</h4>
                    </div>
                </div>
                    <div className="inline-flex mr-4">
                        <h4>Sort by:</h4>
                        <select className="ml-2 text-center  border  border-gray-100 w-28 rounded-full  p-1 uppercase">
                            <option>Price </option>
                        </select>
                    </div>
            </div>
        </div>
    )

}





/*  <section className="acSec">
            <div className="container">
                <div className="inline-flex border-2 w-full p-8 border-gray-400">
                        {/*<h1 className="ml-96 mt-6">1of2 Pages</h1>
                    <h1 className="font-normal pl-4">Compare:</h1>
                    <h2 className=" ml-2 font-normal w-20 border-2 h-6 border-gray-300 rounded-full text-gray-700">x Pulsar</h2>
                    <h2 className="ml-2 font-normal w-20 border-2 h-6 border-gray-300 rounded-full text-gray-700">x Platina</h2>
            <h2 className="ml-2 font-semibold w-15 border-2 border-blue-700 rounded-full py-1 px-4 text-gray-700">GO</h2>
                    <h1 className="font-normal ml-6">Clear all</h1>

                    <h1 className="font-normal text-align:right">Sort By:</h1>
                     <select className="border-2 ml-6 h-6 w-20 rounded-full border-gray-300">
                        <option>Price</option>
</select>
</div>
        </section>*/