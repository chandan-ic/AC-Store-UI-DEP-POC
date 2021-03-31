import ExShowRoomPrice from './ExShowRoomPrice';

export default function BikeActions({vehicle}) {
    return (
      <div className="acContainer flex flex-col justify-between borderTest3" >
       <div className="pt-20 pl-20 pr-20 flex flex-col">
        <div className="">
            <h1>{vehicle.name} </h1>
            <h2> {vehicle.feature1} </h2>
        </div>
        <div className="pl-20 pr-20 justify-center flex flex-col text-center
 sm:pt-10 sm:flex-row sm:justify-between ">
                         <div className="sm:mt-10 ring-1 ring-gray-300 hover:shadow-2xl  p-5 mt-5">
                            <img className="m-auto w-40 mb-4" src="/images/Check-Price.png" />
                            <button className="modelButton place-self-center">ON ROAD PRICE</button>
                        </div>
                        <div className="sm:mt-10 ring-1 ring-gray-300 hover:shadow-2xl p-4 mt-5">
                            <img className="m-auto w-40 mb-4" src="/images/bikeIcon.png" />
                            <button className="modelButton place-self-center">TEST RIDE</button>
                        </div>
                         <div className="sm:mt-10 ring-1 ring-gray-300 hover:shadow-2xl p-4 mt-5">
                            <img className="m-auto w-40 mb-4" src="/images/finance-eligibility-v1.png " />
                            <button className="modelButton place-self-center">FINANCE ELIGIBILITY</button>
                        </div>
       </div>
       <div className="flex justify-end">
                   <ExShowRoomPrice colorTheme = "dark" exshowroomprice="223232"/>      
        </div>
    </div>
      </div>
    )
}


/* <div className="">
                        <div className="flex flex-row mt-10  sm:mt-0 justify-around align-baseline">
                            <div className="mt-10  flex flex-col ">
                                <img className="w-20 h-20 place-self-center"
                                    src="/images/bikeIcon.png" alt="bikePrice" />
                                <h6 className="place-self-center font-bold">Check</h6>
                                <button className="modelButton place-self-center">ON ROAD PRICE</button>
                            </div>
                            <div className="mt-10  flex flex-col justify-end">
                                <img className="w-20 h-20 place-self-center" src="/images/last.png" alt="bikePrice" />
                                <h6 className="place-self-center font-bold">Bike</h6>
                                <button className="modelButton place-self-center">compare</button>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around align-baseline">
                            <div className="mt-10  flex flex-col justify-end">
                                <img className="place-self-center w-14 h-14 mb-2" src="/images/check.png" alt="bikePrice" />
                                <h6 className="place-self-center font-bold">Check</h6>
                                <button className="modelButton place-self-center">FINANCE ELIGIBILITY</button>
                            </div>
                            <div className="mt-10  flex flex-col justify-end">
                                <img className="w-20 h-20 place-self-center" src="/images/book.png" alt="bikePrice" />
                                <h6 className="place-self-center font-bold">Book</h6>
                                <button className="modelButton place-self-center">TEST RIDE</button>
                            </div>
                        </div>
                    </div> */