export default function CompareBikes() {
    return (
        <section className="acSec bg-primary " >
            <div className="container pb-5">
                <div className="text-left">
                    <h1 className="sm:pt-5 pt-10 headHero font-bold" >Compare Bikes</h1>
                    <h5 className="pt-1" ></h5>
                </div>
                <div className="flex flex-col sm:flex-row w-full ">
                    <div className="w-full sm:w-1/2 flex flex-col items-center">

                        <div className="inline-flex justify-center  items-center text-black flex-row pt-10
 sm:pt-20">
                            <div className="sm:mr-10 sm:pr-5 p-1 place-self-center sm:text-right sm:pt-10 ">
                                <h3 className="pb-2 sm:pb-2" >Specification</h3>
                                <h3 className="pb-2 sm:pb-2" >Control</h3>
                                <h3 className="pb-2 sm:pb-2" >Performance</h3>
                            </div>
                            <div className="align-middle  sm:pt-8  mr-3 sm:mr-0 sm:ml-0 ml-2 justify-center">
                                <h2 className="font-extrabold from-black text-xl sm:text-4xl"> V/s</h2>
                            </div>
                            <div className=" sm:ml-10 p-1 sm:text-left sm:pt-10">
                                <h3 className="pb-2 sm:pb-2">Comfort</h3>
                                <h3 className="pb-2 sm:pb-2"> Features</h3>
                                <h3 className="pb-2 sm:pb-2">Styling</h3>
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-center sm:pt-10 sm:ml-8 sm:block hidden" >
                            <div className="pb-10 pt-5 ">
                                <button className="modelButton ">COMPARE BIKES</button></div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 ">
                        <div className="w-full  flex flex-row justify-center mt-10  sm:mt-20  sm:flex-row ">

                            <div >
                                <img className="sm:w-76 " src="images/homeImage2.png" />
                            </div>
 <div className="align-middle pt-10 sm:pt-14  mr-3 sm:mr-0 sm:ml-0 ml-2 justify-center">
                                <h2 className="font-semibold from-black text-xl sm:text-4xl"> V/s</h2>
                            </div>
                            <div >
                                <img className="w-76 " src="images/compareHome.png" />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
 <div className="inline-flex flex-col sm:hidden block items-center pt-10 sm:ml-8" >
                            <div className=" pt-5 ">
                                <button className="modelButton ">COMPARE BIKES</button></div>
                        </div>
                </div>
            </div>
        </section>
    )
}

{/*<div className="flex w-full sm:flex-row flex-col pt-10">
                    <div className=" flex flex-col w-full sm:w-3/4">
                        <div className="inline-flex justify-center   text-black flex-row pt-10">
                            <div className="sm:mr-10 sm:pr-5 p-1 place-self-center sm:text-right">
                                <h3 className="pb-2 sm:pb-2" >Specification</h3>
                                <h3 className="pb-2 sm:pb-2" >Control</h3>
                                <h3 className="pb-2 sm:pb-2" >Performance</h3>
                            </div>
                            <div className="align-middle pt-10 sm:pt-8  mr-3 sm:mr-0 sm:ml-0 ml-2 justify-center">
                                <h2 className="font-extrabold from-black text-xl sm:text-4xl"> V/s</h2>
                            </div>
                            <div className=" sm:ml-10 p-1 sm:text-left">
                                <h3 className="pb-2 sm:pb-2">Comfort</h3>
                                <h3 className="pb-2 sm:pb-2"> Features</h3>
                                <h3 className="pb-2 sm:pb-2">Styling</h3>
                            </div>
                        </div>
                        <div className="inline-flex flex-row pt-5" >
                            <div >
                                <img className="w-76" src="images/homeImage2.png" />
                            </div>
                            <div >
                                <img className="w-76" src="images/compareHome.png" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 flex justify-center mt-20  sm:flex-row ">
                        <div className=" sm:mt-16"> <h3 className="">To Compare</h3>
                            <button className="modelButton ">ADD BIKES</button></div>
                    </div>
                </div>*/}