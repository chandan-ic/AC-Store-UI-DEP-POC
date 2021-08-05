import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import Image from "next/image";
//import { SimpleConsoleLogger } from 'typeorm';
import { getHomeCategoryData } from "components/Home/Store/home-action";
import DiscoverCard from "./DiscoverCard";

export default function HomeUtilityUI(props) {
  const {
    UtilityHeading,
    utilitySubHeading,
    Economy,
    EcImg,
    ECPrice,
    ECCC,
    ECcaption,
    handleCategory,
    Executive,
    EXImg,
    EXBike,
    EXCC,
    EXcaption,
    Premium,
    PRImg,
    PRPrice,
    PRCC,
    PRcaption,
    More,
    MatchType,
  } = props;

  const [openTab, setOpenTab] = React.useState(1);
  const { brand, minPrice, MinEngineCC, CategoryType, searchMasterData } =
    useSelector((state) => state.search);
const dispatch = useDispatch();
const {categoryData} = useSelector((state) => state.home);

useEffect(() => {
  dispatch(getHomeCategoryData());
}, []);

// This useeffect is to set the Discover tab to first tab.
//  For loop because break wont work with map. 
useEffect(() => {
    for (var i = 0; i < categoryData.length; i++) {
      setOpenTab(categoryData[i].ParentCategorySlno);
      break;
    }
  }, [categoryData]);


  return (
    <section id="utility" className="ACEXP-Outer bg-white">
      <div className="ACEXP-Inner flex flex-col">
      <div className="ACEXP-Main ">
          
         <div className="">
          <h1 className="py-4 font-semibold text-primary text-center tracking-wider">
            {UtilityHeading}
          </h1>      
          {/* {JSON.stringify(searchMasterData)} */}
          <div className="">
            <ul
              className=" flex flex-col sm:flex-row justify-center text-primary"
              role="tablist"
            >
         { categoryData && categoryData.map((fs) => (
                   <>
                        <a className={"text-lg p-2 tracking-widest leading-loose text-theme  focus:outline-none" +
                        (openTab === fs.ParentCategorySlno ? "  border-b-2 border-yellow-500 font-bold text-theme " : "text-theme")
                    }
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(fs.ParentCategorySlno);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist">{fs.ParentCategory}
                        </a>
                    </>
                    )
                    )
                  } 
            </ul>
          </div>
        </div>
        <div className=" w-full min-h-50vh bg-gray-100 py-8">
           
        { categoryData && categoryData.map((fs) => (
          <div className={openTab=== fs.ParentCategorySlno ? "block" : "hidden"} id="link1">
                 <div className="  justify-center w-full px-10 flex sm:flex-row flex-wrap flex-col gap-x-4 gap-y-4 ">
                  { fs.Category && fs.Category.map((c) => (
                      <DiscoverCard category={c} searchParam={fs.SearchKey}  />
                  ))}

               </div>
              </div>
        ))}
          
          
          {/* 
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className=" justify-center w-full px-10 flex sm:flex-row flex-wrap flex-col">
              {JSON.stringify(categoryData)}

                 {searchMasterData?.Brand?.map((sm, ti) => (
                      <div className="bg-white sm:w-1/2 md:w-1/4 p-2 m-2">
                      {sm.Brand} - {sm.BrandCode} - {sm.BrandSlno}
                         </div>
                  ))}                     
                </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className=" justify-center w-full px-10 flex sm:flex-row flex-wrap flex-col">
                     {searchMasterData.MinAndMaxPrice.map((sm, ti) => (
                      <div className="sm:w-1/2 md:w-1/4">
                        {sm.Maximum} - {sm.Minimum} 
                         </div>
                  ))}
                   {searchMasterData?.Category?.map((sm, ti) => (
                      <div className="bg-white sm:w-1/2 md:w-1/4 p-2 m-2">
                      {ti} 
                          </div>
                  ))} 
                 
    
                  </div>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                <div className=" justify-center w-full px-10 flex sm:flex-row flex-wrap flex-col">
                   {searchMasterData?.Category?.map((sm, ti) => (
                      <div className="bg-white sm:w-1/2 md:w-1/4 p-2 m-2">
                      {sm.Category} - {sm.CategoryCode}  - {sm.SubTitle}
                         </div>
                  ))} 
                   </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                <div className=" justify-center w-full px-10 flex sm:flex-row flex-wrap flex-col">
                    {/* {searchMasterData.MinAndMaxCC.map((sm, ti) => (
                      <div className="bg-white sm:w-1/2 md:w-1/4 p-2 m-2">
                        {sm.Maximum} - {sm.Minimum} 
                         </div>
                  ))}  */}
          </div>
        </div>
        </div>  
    </section>
  );
}                  
                 