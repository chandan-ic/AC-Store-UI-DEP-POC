export default function TestRide() {
    return (
        <section className="acSec1   bg-none sm:bg-test-ridebg
 bg-scroll bg-center bg-no-repeat bg-cover  "
 /*style={{
            background: `url('/images/test-ride.png')`,
            backgroundSize: "cover", backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            
        }}*/ >
            <div className="container pb-10">
                <div className="flex flex-col w-full sm:flex-row items-center sm:items-start">
                    <div className=" w-full sm:mt-10">
                        <div className=" mt-10 "> <h1 className="text-black font-bold headHero">Book a Test Ride</h1>
                            <h5 className="text-black  ">Experience before you buy</h5>
                        </div>
                        <div className="w-full items-center sm:mt-20  mt-10 sm:pt-2 align-middle">      
                            <div className="flex flex-col w-full  items-center sm:ml-20 sm:items-start   ">
                                <div className="text-black text-center">
                                    <div className="flex flex-row items-center">
                                        <img className="w-10 h-10 mt-3 " src="images/dot.png" />
                                        <h3 className="mt-4 " >Your desired bike </h3>
                                    </div>
                                    <div className="flex flex-row">
                                        <img className="w-10 h-10 mt-2 " src="images/dot.png" />
                                        <h3 className="mt-4 "  > Your desired time </h3>
                                    </div>
                                    <div className="flex flex-row ">
                                        <img className="w-10 h-10 mt-2 " src="images/dot.png" />
                                        <h3 className="mt-3 " > Your desired location</h3>
                                    </div>
                                </div>
                            </div>
<div className="flex flex-row sm:mt-20  mt-10  justify-center sm:justify-start sm:ml-20 
 items-start text-center
 sm:flex-row" >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full sm:mr-0 sm:-ml-8
                                      mr-6 ml-3 p-1 align-middle border-2 border-transparent
                                 text-black pt-2 bg-theme hover:shadow-2xl transition transform 
hover:-translate-y-2">
                                    <img src="images/bike.png" /><h4 className=" sm:pt-1">Select</h4>
                                </div>
                                <span className="sm:w-16 w-7 sm:ml-5 sm:mr-5 sm:pt-0 align-middle pt-5"><img src="images/arow.png" /></span>
                                <div className="w-14 h-14 sm:w-16 text-black sm:h-16 rounded-full
                                shadow-2xl sm:mr-0 sm:ml-0 mr-6 ml-5  p-1 bg-white border-2 border-theme ">
                                    <img src="images/schedule.png" />< h4 className="pt-1 sm:pt-2 -ml-4">Schedule</h4>
                                </div>
                                <span className="sm:w-16 w-7 sm:ml-5 sm:mr-5 mr-3 sm:pt-0 align-middle pt-5"><img src="images/arow.png" /></span>
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full
                                shadow-2xl sm:mr-0 sm:ml-0 p-1 bg-white text-black border-2 border-theme">
                                    <img src="images/ride.png" /><h4 className="pt-2 sm:pt-2">Ride</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section >
    )
}
