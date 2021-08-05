import React, { useEffect, useState } from "react";
import { FLUSH } from "redux-persist";

import Slider from './Carousel';
export default function BikeFeaturesCard({ vehicle }) {
    const [openTab, setOpenTab] = React.useState('1');
    // const [feats,setFeats] = React.useState({});
   
    return (
        <section id="Features" className={`${vehicle.Feature_Bg_Color} ACEXP-Outer`}>
            <div className="ACEXP-Inner">
         <div className="ACEXP-Main"> 
            <div className="relative h-auto ">
                    {/* <h1 className={`${vehicle.Feature_Text_Theme} secHeading font-bold`}>{vehicle.name} </h1> */}
                    <h1 className={`${vehicle.Feature_Text_Theme} tracking-widest uppercase leading-loose pt-4`}>FEATURES</h1>

                    {/* <h1 className={`${vehicle.Hero_Text_Theme} tracking-widest leading-loose pt-8`}>
 {vehicle.Primary_Features_Headline} </h1> */}
                </div>
                {/* <div className="p-6 container">
                <Slider vehicle={vehicle}  />
            </div> */}
                <div className="flex"> 
                { 
                    vehicle.features.map((fs) => (
                        <a className={"text-lg p-2 tracking-widest leading-loose focus:outline-none " +
                        (openTab === fs.featureId ? vehicle.Feature_Text_Theme +" font-bold border-b-2 border-yellow-500 " : vehicle.Feature_Text_Theme)
                    }
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(fs.featureId);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist">{fs.featureName}
                        </a>
                    ))
                }
                </div>
                <div className="w-full min-h-50vh">

                { 
                vehicle.features.map((fs) => (
                 <>
                 <div className={openTab === fs.featureId ? "block" : "hidden" } id="link1">
                         <Slider featureId={fs.featureId} textTheme= {vehicle.Feature_Text_Theme} features={fs.featureList} /> 
                 </div>
                 </>
                ))}
                 </div>
            </div>
            </div>
        </section>
    )
}
