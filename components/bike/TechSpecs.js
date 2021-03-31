import ExShowRoomPrice from './ExShowRoomPrice';

export default function TechSpecs() {
    return (
        <div id="techSpecs" className="acContainer bg-primary">
 
            <div className="container w-full flex flex-col sm:flex-row">
               
                <div className=" secHeadingWrap w-full ">
                    <h1 className="mt-10  sm:mt-0 secHeading font-bold">
                        Dominar 250
                    </h1>
                    <h4>Technical Specifications</h4>
                    <div className="md:flex lg:items-center md:justify-self-start">
                        <div className=" w-full">
                            <div className=" flex flex-col md:flex-row ">
                                <div className=" mt-10 sm:mt-0 md:flex items-center md:w-1/3">
                                    <img className=" w-full" src="/images/vehicleProduct9.png" />
                                </div>
                                <div className="sm:p-2 sm:mt-0 mt-10 w-full md:w-1/3 ">
                                    <h5 className="text-sm font-bold  border-black shadow-xs p-2 border-b-2">
                                        ENGINE & TRANSMISSION</h5>
                                    <ul className="mt-3 text-sm space-y-2 ">
                                        <li className="p-2 mt-5 sm:mt-8 border-b-2   border-gray-200">
                                            <h6 className="font-semibold">TYPE</h6>
                                            <p>Single cylinder, 4 stroke, DOHC, 4valve,<br />Liquid cooled, Twin Spark ,FI</p>

                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2   border-gray-200">
                                            <h6 className="font-semibold">DISPLACEMENT</h6>
                                            <p>248.77</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2   border-gray-200">
                                            <h6 className="font-semibold">MAX POWER</h6>
                                            <p>27 Ps @ 8500</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2   border-gray-200">
                                            <h6 className="font-semibold">MAX POWER</h6>
                                            <p>27 Ps @ 8500</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2   border-gray-200">
                                            <h6 className="font-semibold">MAX POWER</h6>
                                            <p>27 Ps @ 8500</p>
                                        </li>

                                    </ul>
                                </div>
                                <div className="sm:p-2 sm:mt-0 mt-10 w-full md:w-1/3 ">
                                    <h5 className="text-sm font-bold border-black shadow-xs p-2 border-b-2"> DIMENSION & CHASIS</h5>
                                    <ul className="mt-2 text-sm space-y-2">
                                        <li className="p-2 mt-5 sm:mt-8 border-b-2  border-gray-200">
                                            <h6 className="font-semibold">TYPE</h6>
                                            <p>Single cylinder, 4 stroke, DOHC, 4valve,<br />Liquid cooled, Twin Spark ,FI</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2  border-gray-200">
                                            <h6 className="font-semibold">DISPLACEMENT</h6>
                                            <p>248.77</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2  border-gray-200">
                                            <h6 className="font-semibold">MAX POWER</h6>
                                            <p>27 Ps @ 8500</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2  border-gray-200">
                                            <h6 className="font-semibold">MAX POWER</h6>
                                            <p>27 Ps @ 8500</p>
                                        </li>

                                        <li className="p-2 mt-5 sm:mt-8 border-b-2  border-gray-200">
                                            <h6 className="font-semibold">MAX POWER</h6>
                                            <p>27 Ps @ 8500</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                             <div className="flex justify-end">
                                 <ExShowRoomPrice colorTheme = "dark" exshowroomprice="223232"/>      
                              </div>    


                </div>
            </div>


        </div>


        /* 
         */

    )
}
