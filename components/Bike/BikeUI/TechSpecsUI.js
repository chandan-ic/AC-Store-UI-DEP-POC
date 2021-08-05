import React from "react";

import { Accordion, AccordionItem } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import AccordionCard from './Accordion';

export default function TechSpecsCard({ vehicle }) {
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <div id="TechSpecs" className={`${vehicle.theme} ACEXP-Outer`}>
            <div className="ACEXP-Inner">
            <div className="ACEXP-Main">
            <h2 className={`${vehicle.Hero_Text_Theme} tracking-widest uppercase leading-loose`}>{vehicle.Technical_Section_Tag_line}</h2>

                {/* <h1 className={`${vehicle.Similar_Text_Theme} secHeading font-bold`}>{vehicle.Technical_Section_Tag_line} </h1> */}
                {/*  */}
                <div className="flex flex-col md:flex-row space-x-4 justify-end w-full pt-2" >
                    <a className={"text-md leading-loose text-theme focus:outline-none" +
                        (openTab === 1 ? " font-semibold border-b-2 border-yellow-500 text-theme" : "text-theme")
                    }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist">{vehicle.Technical_Specs_Engine_Headline}</a>
                    <a className={"text-md leading-loose text-theme focus:outline-none" +
                        (openTab === 2 ? "  font-semibold border-b-2 border-yellow-500 text-theme" : "text-theme")
                    }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist">{vehicle.Technical_Specs_Chasis_Headline}</a>
                    <a className={"text-md leading-loose  text-theme focus:outline-none" +
                        (openTab === 3 ? "  font-semibold border-b-2 border-yellow-500 text-theme" : "text-theme")
                    }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"> {vehicle.Technical_Specs_Dimensions_Headline}</a>
                    <a className={"text-md leading-loose text-theme focus:outline-none" +
                        (openTab === 4 ? "  font-semibold border-b-2 border-yellow-500 text-theme" : "text-theme")
                    }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(4);
                        }}
                        data-toggle="tab"
                        href="#link4"
                        role="tablist">{vehicle.Technical_Specs_Break_Headline}</a>
                    <a className={"text-md leading-loose  text-theme focus:outline-none" +
                        (openTab === 5 ? " font-semibold border-b-2 border-yellow-500 text-theme" : "text-theme")
                    }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(5);
                        }}
                        data-toggle="tab"
                        href="#link5"
                        role="tablist">{vehicle.Technical_Specs_Electrical_Headline}</a>
                </div>
</div>
</div>
<div>



                {/* <h4 className={vehicle.WhyITag_Text_Theme}>  {vehicle.Technical_Section_Tag_line} </h4> */}
            </div>
            {/* <section 
          className="AC-Hero-Container bg-center-center bg-cover bg-no-repeat" 
          style={{ backgroundImage: 
          `linear-gradient(rgba(255, 255,255, 0.5),rgba(255, 255,255, 0.0),rgba(255, 255,255, 0.0),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
          url(${vehicle.Featured_Image})` }}> */}

            <div className=" sm:h-4/6  bg-center-center bg-cover bg-no-repeat 
             md:flex lg:items-center md:justify-self-start" style={{ backgroundImage: 
          `linear-gradient(rgba(255, 255,255, 0.5),rgba(255, 255,255, 0.0),rgba(255, 255,255, 0.0),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
          url(${vehicle.Featured_Image})` }}>
                <div className="w-full">
                    <div className="  flex flex-col md:flex-row w-full justify-between">
                        <div className="bg-white bg-opacity-90  w-full h-full mt-10 sm:mt-0  md:flex items-center md:w-1/2">
                          &nbsp; {/* <img className=" w-full" src={`${vehicle.Technical_Specification_Image}`} /> */}
                        </div>
                        <div className=" flex bg-white bg-opacity-90 flex-col md:w-1/2">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <h4 className="mt-6 ml-6 text-theme">
                                    {vehicle.Technical_Specs_Engine_Headline}
                                </h4>
                                <div className="min-h-50vh w-full flex flex-wrap">
                                    {
                                        vehicle.Technical_Specs_Engine.map((ts, ti) => (
                                            <div class="h-full w-1/3  m-4 border-b-2 p-4 border-yellow-300">
                                                    <h5 class="text-md font-medium text-theme mb-2">{ts.label}</h5>
                                                    <p class="leading-relaxed text-sm">{ts.value}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <h4 className="mt-6 ml-6 text-theme">
                                    {vehicle.Technical_Specs_Chasis_Headline}
                                </h4>
                            <div className="min-h-50vh  flex flex-wrap px-4">
                                    {
                                        vehicle.Technical_Specs_Chasis.map((ts, ti) => (
                                            <div class="h-full w-1/3  m-4 border-b-2 p-4 border-yellow-300">
                                            <h5 class="text-md font-medium text-theme mb-2">{ts.label}</h5>
                                            <p class="leading-relaxed text-sm">{ts.value}</p>
                                    </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                            <h4 className="mt-6 ml-6 text-theme">
                                    {vehicle.Technical_Specs_Dimensions_Headline}
                                </h4>
                            <div className=" min-h-50vh flex flex-wrap px-4">
                                    {
                                        vehicle.Technical_Specs_Dimensions.map((ts, ti) => (
                                            <div class="h-full w-1/3  m-4 border-b-2 p-4 border-yellow-300">
                                                    <h5 class="text-md font-medium text-theme mb-2">{ts.label}</h5>
                                                    <p class="leading-relaxed text-sm">{ts.value}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                            <h4 className="mt-6 ml-6 text-theme">
                                    {vehicle.Technical_Specs_Break_Headline}
                                </h4>
                            <div className=" min-h-50vh flex flex-wrap px-4">
                                    {
                                        vehicle.Technical_Specs_Break.map((ts, ti) => (
                                            <div class="h-full w-1/3  m-4 border-b-2 p-4 border-yellow-300">
                                                    <h5 class="text-md font-medium text-theme mb-2">{ts.label}</h5>
                                                    <p class="leading-relaxed text-sm">{ts.value}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                            <h4 className="mt-6 ml-6 text-theme">
                                    {vehicle.Technical_Specs_Electrical_Headline}
                                </h4>
                            <div className=" min-h-50vh flex flex-wrap px-4">
                                    {
                                        vehicle.Technical_Specs_Electrical.map((ts, ti) => (
                                            <div class="h-full w-1/3  m-4 border-b-2 p-4 border-yellow-300">
                                                    <h5 class="text-md font-medium text-theme mb-2">{ts.label}</h5>
                                                    <p class="leading-relaxed text-sm">{ts.value}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* <Accordion allowZeroExpanded preExpanded={['a']} >
                                <AccordionItem uuid="a" >
                                    <AccordionCard title="ENGINE & TRANSMISSION" data={vehicle.Technical_Specs_Engine} />
                                </AccordionItem>
                            </Accordion> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
