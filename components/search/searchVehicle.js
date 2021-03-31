import React from 'react';


export default function VehicleCard() {

    return (
        <section>
            <div className="container flex sm:flex-row flex-col">
                <div className="flex flex-col mt-4 sm:mt-0 sm:mr-4 border border-gray-100 sm:w-80 w-full ">
                    <div className="flex flex-row justify-end space-x-5 p-1">
                        <div className="">
                            <label className="inline-flex items-center">
                                <h4 className="text-xs">Compare</h4>
                                <input type="checkbox" className="ml-2" />
                            </label>
                        </div>
                        <div className="inline-flex items-center">
                            <h4 className="text-xs">Add to Wishlist</h4>
                            <img className="w-4 h-4 ml-2" src="images/wishlist.png" />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className=" flex justify-center">
                            <img className="sm:w-72 sm:h-44 w-full " src="images/searchImg.png" />
                        </div>
                        <div className="text-center py-1">
                            <h4 className="font-bold text-2xl">Pulsar 125</h4>
                            <h5 className="font-bold text-lg">Rs. 71, 616/-</h5>
                            <h6 className="text-xs">Ex Showroom price</h6>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col border border-yellow-300 w-32">
                            <img className="w-7 h-7 m-auto" src="images/ride.png" />
                            <h5 className="font-bold text-center">TEST RIDE</h5>
                        </div>
                        <div className="flex flex-col border border-yellow-300 w-32">
                            <img className="w-7 h-7 m-auto" src="images/quote.png" />
                            <h5 className="font-bold text-center">QUOTATION</h5>
                        </div>
                        <div className="flex flex-col  bg-yellow-300 w-32">
                            {/*<img className="w-7 h-7 m-auto" src="images/buy.png" />*/}
                            <h5 className="font-bold text-center m-auto pt-1">BUY</h5>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border border-gray-100 sm:w-80 w-full mt-5 sm:mt-0">
                    <div className="flex flex-row justify-end space-x-5 p-1">
                        <div className="">
                            <label className="inline-flex items-center">
                                <h4 className="text-xs">Compare</h4>
                                <input type="checkbox" className="ml-2" />
                            </label>
                        </div>
                        <div className="inline-flex items-center">
                            <h4 className="text-xs">Add to Wishlist</h4>
                            <img className="w-4 h-4 ml-2" src="images/wishlist.png" />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className=" flex justify-center">
                            <img className="sm:w-72 sm:h-44 w-full " src="images/searchImg.png" />
                        </div>
                        <div className="text-center py-1">
                            <h4 className="font-bold text-2xl">Pulsar 125</h4>
                            <h5 className="font-bold text-lg">Rs. 71, 616/-</h5>
                            <h6 className="text-xs">Ex Showroom price</h6>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col border border-yellow-300 w-32">
                            <img className="w-7 h-7 m-auto" src="images/ride.png" />
                            <h5 className="font-bold text-center">TEST RIDE</h5>
                        </div>
                        <div className="flex flex-col border border-yellow-300 w-32">
                            <img className="w-7 h-7 m-auto" src="images/quote.png" />
                            <h5 className="font-bold text-center">QUOTATION</h5>
                        </div>
                        <div className="flex flex-col  bg-yellow-300 w-32">
                            {/*<img className="w-7 h-7 m-auto" src="images/buy.png" />*/}
                            <h5 className="font-bold text-center m-auto pt-1">BUY</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}



/*    return (
        <section className="acSec">
            <div className="container">
                <div className="border-2 w-1/5 border-gray-600">
                    <div className="w-96 inline-flex items-center">
                        <h6 className="ml-24 text-gray-600 text-xs">Compare</h6>
                        <img className="h-4" src="/images/iconsquare.png"></img>
                        <h6 className="pr-1 text-gray-600 pl-2 text-xs">Add to Wishlist</h6>
                        <img className="h-4" src="/images/iconheart.png"></img>

                    </div>
                    <img className="" src="/images/b1.png" />
                    <h2 className="pl-28 font-bold">Pulsar 125</h2>
                    <h2 className="pl-28 font-bold">Rs. 71,616/-</h2>
                    <h6 className="ml-24 font-normal text-xs">Ex.Showroom price</h6>
                    <div className="border-2 border-yellow-400">
                        <div className="inline-flex w-full">
                            <div className="w-36 border-r-2 border-yellow-300">
                                <div>
                                    <img className="h-5 ml-12" src="/images/bikeIcon.png"></img></div>
                                <h1 className="font-semibold ml-4 text-xs">TESTRIDE</h1>
                            </div>
                            <div>
                                <div className="w-36 border-r-2 border-yellow-300">
                                    <img className="h-5 ml-10" src="/images/request.png"></img></div>
                                <h1 className="font-semibold ml-3 text-xs">QUOTATION</h1>
                            </div>
                            <div className="w-36 bg-yellow-300">
<h1 className="font-bold ml-38 w-3/5">BUY</h1></div>
                        </div>
                    </div>
                </div>






                <div className="w-full ">

                </div>







            </div>
        </section>
    );

}*/