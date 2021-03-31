import ExShowRoomPrice from './ExShowRoomPrice';

export default function BikeFeatures1() {
    return (
        <div id="performance" className="bg-gray-500 scroll-snap-align: start">

            <div className="pt-20 pl-20 pr-20 w-full flex flex-col sm:flex-row ">

                <div className="w-full mt-10 sm:mt-0 secHeadingWrap">
                    <h1 className="secHeading font-bold">
                        Dominar 250
                 </h1>
                    <h4>Performance</h4>


                    <div className="flex   items-center lg:justify-self-start">

                        <div className="acContainer">
                            <div className="flex flex-col  md:grid grid-cols-10 grid-rows-4">
                                <div className="row-start-3 row-end-3 col-start-1 mt-10 sm:mt-0 col-end-2">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 sm:mr-8 sm:mb-0  inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img className="shadow-xl rounded-full align-middle border-none h-full -m-16 -ml-20 lg:-ml-16"
                                            src="/images/vehicleProduct3.png" />
                                    </div>
                                </div>
                                <div className="row-start-4 row-end-4 col-start-1 col-end-3 pb-5 text-white">
                                    <h5>Performance</h5>
                                    <h6>The liquid cooled 248.7cc DOHC engine at its peak produces 19.95kw </h6>
                                </div>
                                <div className="row-start-1 row-end-1 col-start-9 ml-1 mt-5 sm:mt-5 sm:ml-0 col-end-11 ">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 sm:mr-8 sm:mb-0  inline-flex items-center text-center justify-center rounded-full flex-shrink-0">
                                        <img className="shadow-xl rounded-full align-middle border-none h-full -m-16 -ml-20 lg:-ml-16"
                                            src="/images/vehicleProduct4.png" />
                                    </div>
                                </div>
                                <div className="row-start-2 row-end-2 col-start-9 col-end-12 text-white">
                                    <h5>Twin Barrel Exhaust</h5>
                                    <h6>Twin barrel exhaust adds a throaty exhaust note with heavy bass
                                          emphasizing the sports tourer feel </h6>
                                </div>
                                {/*new*/}
                                <div className="row-start-1 row-end-1 col-start-1 mt-10 sm:mt-5 col-end-2">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 sm:mr-8 sm:mb-0  inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img className="shadow-xl rounded-full align-middle border-none h-full -m-16 -ml-20 lg:-ml-16"
                                            src="/images/vehicleProduct5.png" />
                                    </div>
                                </div>
                                <div className="row-start-2 row-end-2 col-start-1 col-end-3 pb-5 text-white">
                                    <h5>Absolute Control</h5>
                                <h6>Twin channel ABS and 300mm front disk brake complemented with radial calliper mounting  </h6>
                                </div>
                                {/*new*/}
                                {/*new*/}
                                <div className="row-start-3 row-end-3 col-start-9 mt-10 sm:mt-0 col-end-12">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 sm:mr-8 sm:mb-0  
inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img className="shadow-xl rounded-full align-middle 
border-none h-full -m-16 -ml-20 lg:-ml-16"
                                            src="/images/vehicleProduct6.png" />
                                    </div>
                                </div>
                                <div className="row-start-4 row-end-4 col-start-9 col-end-11 pb-5 text-white">
                                      <h5>Comfort</h5>
                                <h6>New 37mm upside down front forks, provide better handling & comfort along with a powerful muscular look.  </h6>
                                </div>

                                {/*new*/}
                                <div className=" md:block row-start-1 row-end-6 col-start-3
 col-end-9 mt-5 sm:mt-0 ">
                                    <img className="" src="/images/vehicleProduct2.png" />
                                </div>
                            </div>
                             <div className="w-full borderTest3 w-2/5 justify-self-end">
                                         <ExShowRoomPrice colorTheme="light" exshowroomprice="223232"/>  
                             </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
