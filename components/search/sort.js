import React from 'react'

export default function SortBy() {
    return (
        <div className=" w-full mt-2 border-gray-200 bg-white border-2 font-Montserrat">
            <div className="pb-60 h-full flex flex-col">
                <div className="inline-flex items-center pt-12 px-8 py-2">
                    <label className="inline-flex items-center">
                        <input type="radio"
                            className="form-radio focus:outline-none border 
border-gray-200 text-yellow-300"
                            name="color"
                        />
                        <h5 className="text-md ml-2">Popularity </h5>
                    </label>
                </div>
                <div className="inline-flex items-center  px-8 py-2">
                    <label className="inline-flex items-center">
                        <input type="radio"
                            className="form-radio focus:outline-none border 
border-gray-200 text-yellow-300"
                            name="color"
                        />
                        <h5 className="text-md ml-2">Price -- Low to High</h5>
                    </label>
                </div>
                <div className="inline-flex items-center  px-8 py-2">
                    <label className="inline-flex items-center">
                        <input type="radio"
                            className="form-radio focus:outline-none border 
border-gray-200 text-yellow-300"
                            name="color"
                        />
                        <h5 className="text-md ml-2">Price -- High to Low</h5>
                    </label>
                </div>
                <div className="inline-flex items-center  px-8 py-2 pb-4">
                    <label className="inline-flex items-center">
                        <input type="radio"
                            className="form-radio focus:outline-none border 
border-gray-200 text-yellow-300"
                            name="color"
                        />
                        <h5 className="text-md ml-2">Newest First</h5>
                    </label>
                </div>
            </div>
            <div className="flex flex-row justify-between items-end w-full ">
                <button className="w-2/4  bg-white border border-yellow-300 h-12
 hover:border-yellow-300 ">BACK</button>
                <button className="w-2/4 bg-yellow-300 h-12
 hover:border-yellow-300 ">APPLY</button>
            </div>
        </div>

    )

}