import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSeletedSpecialFeature } from '../../store/search/actions';

import FilterOptions from './searhFilter'
import SortBy from './sort'

export default function SearchFilter() {

    const searchMasterData = useSelector((state) => state.search.searchMasterData);
    const [showDiv, setShowDiv] = useState(false)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    console.log("searchData=", searchMasterData)


    const onShowDivClick = () => {
        setShowDiv(!showDiv)
    }
const onShowClick = () => {
        setShow(!show)
    }


    return (
        <section className="">
            <div className="flex flex-col w-full sm:w-60 sm:p-5 py-4 border border-gray-100 
sm:bg-none bg-gray-100">
                <div className="sm:inline-flex sm:justify-between p-2 sm:p-0">
                    <h4 className="uppercase font-Montserrat sm:block hidden">Filters</h4>
                    <div className="sm:hidden flex justify-between ">
                        <button onClick={onShowDivClick} className="bg-white inline-flex items-center
 relative focus:outline-none border w-28 border-gray-200 uppercase font-Montserrat h-10 sm:hidden 
 rounded-md shadow-xs px-4">
                            Filter
  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button onClick={onShowClick} className="bg-white inline-flex items-center
 relative focus:outline-none border w-28 border-gray-200 uppercase font-Montserrat h-10 sm:hidden 
 rounded-md shadow-xs px-1">
                            Sort By
  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <h4 className="hidden sm:block">Clear all</h4>
                </div>


                <div className="sm:hidden block">
                    {showDiv && <FilterOptions />}
                </div>
                <div className="sm:hidden block">
                    {show  && <SortBy />}
                </div>
                <div className=" justify-between  hidden sm:block">
                    <div className="border border-white rounded-full w-20 p-1 inline-flex space-x-3 mr-2">
                        <h6>X</h6>
                        <h6 className=""> Pulsar </h6>
                    </div >
                    <div className="border border-white rounded-full w-20 p-1 inline-flex space-x-3 ml-3">
                        <h6>X</h6>
                        <h6 className=""> Platina </h6>
                    </div >
                </div>

            </div >
        </section >

    )

}








/*
 const [show, setShow] = useState(false);

    const onShowClick = () => {
        setShow(!show)
    }
     <button onClick={onShowClick} className="bg-white inline-flex items-center
 relative focus:outline-none border w-28 border-gray-200 uppercase font-Montserrat h-10
 rounded-md shadow-xs px-4">
                                Filter
  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>

                            </button>

                        {show ?
                            <div className="w-full left-0 mt-14 font-Montserrat  border-2 border-gray-100
space-x-2 absolute bg-gray-50 z-10 flex flex-col">
                                <div className="w-2/5 border-r-2 border-gray-200">
                                    <div className="text-sm px-2 p-2"> <h6>Brands</h6></div>
                                    <div className="text-sm p-2 "> <a href="#">Bike Type</a></div>
                                    <div className="text-sm p-2"> <a href="#">Price</a></div>
                                    <div className="text-sm p-2"> <a href="#">Colour</a></div>
                                    <div className="text-sm p-2"> <a href="#">Engine cc</a></div>
                                    <div className="text-sm p-2"> <a href="#">Special<br /> Features</a></div>
                                </div></div> : null}
                    </div>*/




/*<select onChange={(e) => { callDisp(e) }} className=" uppercase
focus:outline-none font-Montserrat bg-white border-gray-100 border sm:hidden
block h-10 w-28 rounded-md shadow-xs px-2">
    <option className="text-center text-xs">Filters</option>
    <option className="text-center text-xs" value="brands">Brands</option>
    <option className="text-center text-xs" value="biketype">BikeType</option>
</select>*/

























//fliterokfddf
/*  {showDiv ?
                        <div className="w-full left-0 mt-16
font-Montserrat  border-2 border-gray-100
 absolute bg-white  flex flex-col h-full">
<div className="flex flex-row">
                            <div className="w-2/5 border-r-2 border-gray-200 h-96 flex flex-col " >
                                <button value="brands" className="text-sm  py-2 p-2 focus:outline-none w-10"
                                    onClick={callDisp}>
                                    Brands</button>
                                <button value="biketype" className="text-sm  py-2 p-2 focus:outline-none w-10"
                                    onClick={callDisp}>
                                    BikeType</button>
                                <button value="price" className="text-sm p-2  py-2 focus:outline-none w-10"
                                    onClick={callDisp}>
                                    Price</button>
                                <button value="enginecc" className="text-sm p-2 focus:outline-none w-10"
                                    onClick={callDisp}>
                                    EngineCC</button>
                                <button value="color" className="text-sm p-2  py-2 focus:outline-none w-10"
                                    onClick={callDisp}>
                                    Colour</button>

                                <button value="features" className="text-sm p-2 focus:outline-none w-10"
                                    onClick={callDisp}>
                                    SpecialFeatures</button>
                            </div>
                            <div className="h-screen block sm:hidden w-3/5 z-10 pt-10 ">
                                <div className="pt-3">{show === 'brands' && <SearchBrands />}</div>
                                <div className="pt-3">{show === 'biketype' && <SearchNav />}</div>
                                <div className="pt-3">{show === 'price' && <SearchSlider />}</div>
                                <div className="">{show === 'enginecc' && <SearchSliderEngine />}</div>
                                <div className="">{show === 'color' && <SearchColors />}</div>
                                <div className="">{show === 'features' && <SpecialFeatures />}</div>
                            </div>
</div>
                            <div className="inline-flex items-end justify-between pt-3">
                                <button className="w-48  bg-white border border-yellow-300 h-12
 hover:border-yellow-300 ">BACK</button>
                                <button className="w-48 bg-yellow-300 h-12
 hover:border-yellow-300 ">APPLY</button>
                            </div>
                        </div>
                        : null}
*/