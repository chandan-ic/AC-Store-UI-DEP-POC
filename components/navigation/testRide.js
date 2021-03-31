import { useSelector, useDispatch } from 'react-redux';
export default function TestRideNav() {

    const currentPage = useSelector((state) => state.currentPage);
    console.log("currentpage=", currentPage)

    return (
        <section className="mt-4 theme-autocomm ">
            <div className="container">
                <div className="flex flex-row ">
                    <div className="grid divide-y-2 divide-gray-200   grid-cols-1 items-center border-2 border-gray-200 w-96">
                        <div  className={`${ currentPage==="bikeSelect" ? "testRideActive":"testRideInActive"}` }>

                            <a href="#bikeSelect"><img className=" w-12 h-12  hover:bg-theme"
                                src="/images/testidenav1.png" /></a>
                        </div>

                        <h4 className="pt-2 h-12 text-center  font-semibold">
                            SELECT A BIKE</h4>
                    </div>

                    <div className="grid divide-y-2 divide-gray-200  grid-cols-1 items-center border-2 border-gray-200 w-96">
                        <div className={`${currentPage === "selectLocation" ? "testRideActive" : "testRideInActive"}`}>
                          <a href="#selectLocation">  <img className=" w-12 h-12  hover:bg-theme"
                                src="/images/testidenav2.png" /></a>
                        </div>
                        <h4 className="pt-2 h-12 text-center  font-semibold">
                            LOCATION</h4>
                    </div>
                    <div className="grid divide-y-2 divide-gray-200   grid-cols-1 items-center border-2 border-gray-200 w-96">
                        <div className={`${currentPage === "bikeSchedule" ? "testRideActive" : "testRideInActive"}`}>
                            <img className=" w-12 h-12  hover:bg-theme"
                                src="/images/testidenav3.png" />
                        </div>
                        <h4 className="pt-2 h-12 text-center  font-semibold">
                            SCHEDULE</h4>
                    </div>
                    <div className="grid divide-y-2 divide-gray-200   grid-cols-1 items-center border-2 border-gray-200 w-96">
                        <div className={`${currentPage === "bikeContact" ? "testRideActive" : "testRideInActive"}`}>
                            <img className=" w-12 h-12  hover:bg-theme"
                                src="/images/testidenav4.png" />
                        </div>
                        <h4 className="pt-2 h-12 text-center  font-semibold ">
                            CONTACT DETAILS  </h4>
                    </div>
                </div>
            </div>
        </section >
    )


}

