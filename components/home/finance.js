export default function Finance() {
    return (
        <section className="acSec bg-primary " >
            <div className="container pb-10 ">
                <div className="pt-10  m-auto">
                    <h1 className="font-bold headHero">Finance at your doorstep</h1>
                    <h5 className="pt-1">Approval within a day</h5>
                </div>
                <div className="flex flex-col flex-col-reverse justify-
 sm:justify-evenly sm:pt-20 sm:flex-row">
                    <div className="pt-5  sm:pt-20 justify-center" >
                        <img className="m-auto w-24 pt-12" src="images/check.png" />
                        <div className="flex flex-row justify-center pt-2 sm:pb-5">
                            <button className="modelButton border-yellow-300 hover:bg-yellow-300 hover:text-white">Check Eligibility</button>
                        </div>
                    </div>
                    {/*<div>
                        <h3 className="text-center pt-5 pb-5 text-gray-500 text-sm  sm:text-xl">EMI as low as <b>Rs 4531</b></h3>
                        <img className="m-auto" src="images/emi.png" width="100px" height="100px" />
                        <div className="text-center pt-1">
                            <button className="mt-5 text-sm rounded-full  py-1 border-blue-600 
border-2 bg-white hover:bg-gray-100  sm:w-full ">Calculate Your EMI</button>
                        </div>
                    </div>*/}
                    <div className="sm:pt-20 pt-10">
                        <div className="flex flex-row">
                            <img className="w-10 pt-2 sm:pt-12 " src="images/dot.png" />
                            <h5 className=" pt-5 sm:pt-14">Easy EMI Options</h5>
                        </div>
                        <div className="flex flex-row">
                            <img className="w-10 pt-3" src="images/dot.png" />
                            <h5 className=" pt-5">Simple documentation</h5>
                        </div>
                        <div className="flex flex-row">
                            <img className="w-9 pt-3 sm:pt-3 ml-1" src="images/dot.png" />
                            <h5 className=" pt-5">Document Pickup from your home</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}