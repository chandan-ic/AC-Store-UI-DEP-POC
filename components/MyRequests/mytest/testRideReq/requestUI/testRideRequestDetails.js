
export default function TestRideRequestsDetails({bikeName,BikeDescr}) {

    return (
        
            <div className="border-b-2 md:border-b-0 md:h-64 lg:h-auto md:border-r-2 border-gray-800">
                <h2 className="font-LibreFranklin font-semibold text-center mt-4" >{bikeName}</h2>
                <div className="flex flex-col ">
                    <img className="w-full" src="/images/BAJAJ/PULSARNS200/Colors_Pulsar_NS200_Burnt_Red.png" />
                </div>
                <div className="flex flex-col mb-2">
                        <div className="">
                            <h5 className="font-LibreFranklin text-center">{BikeDescr}</h5>
                            {/* <span className="font-LibreFranklin mx-2 ">-</span>
                            <h5 className="font-LibreFranklin py-0.5 mx-2">PULSARNS200</h5> */}
                        </div>
                        {/* <div className="flex ">
                            <h5 className="font-LibreFranklin py-0.5 mx-2">Model</h5>
                            <span className="font-LibreFranklin mx-2">-</span>
                            <h5 className="font-LibreFranklin py-0.5 mx-2">BAJAJ</h5>
                        </div> */}

                </div>
            </div>

    )

}