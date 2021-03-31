export default function HomeUtility() {
    return (
        <section id="utility" className="acSec bg-secondary">
            <div className="container ">
                <div className="text-left">
                    <h1 className="pt-5 font-bold headHero " >Utility: Purpose, power or style</h1>
                    <h5 className="pt-1" >Range of bikes to fullfill your necessity or passion</h5>
                </div>
                <div className="flex flex-col text-center items-baseline pt-10 sm:pt-20  justify-between sm:flex-row">
                    <div className="mt-10 sm:mt-0 p-6 m-auto ring-1 ring-gray-200 hover:shadow-2xl ">
                        <h3 className=" ">Economy Bikes</h3>
                        <img className="w-48" src="/images/homeImage2.png" />
                        <h6 >Rs.47,820 - 64,557</h6>
                        <h6 >100cc -150cc</h6>
                        <h6 className="font-bold"> High on mileage</h6>
                        <div className="mt-3">
                            <button className="modelButton  ">Select</button>
                        </div>
                    </div>
                    <div className="p-6 mt-10 sm:mt-0 m-auto  ring-1 ring-gray-200 hover:shadow-2xl">
                        <h3 className=" ">Executive Bikes</h3>
                        <img className="w-48" src="/images/homeImage3.png" />
                        <h6 >Rs.80,185 - 11,4451</h6>
                        <h6 >100cc -150cc</h6>
                        <h6 className="font-bold" >Easy on maintainence</h6>
                        <div className="mt-3">
                            <button className="modelButton ">Select</button>
                        </div>
                    </div>
                    <div className=" p-6 mt-10 sm:mt-0 m-auto ring-1 ring-gray-200 hover:shadow-2xl" >
                        <h3 className="">Premium Bikes</h3>
                        <img className="w-48" src="/images/homeImage4.png" /><br />
                        <h6 >Rs.1,23,930 -199756</h6>
                        <h6>150cc -375cc</h6>
                        <h6 className="font-bold">Rule the roads</h6>
                        <div className="mt-3">
                            <button className="modelButton">Select</button>
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-20 m-auto sm:pb-0 pb-10" >
                        <h6 className="text-center sm:mt-10">More bike categories, </h6>
                        <h6 className="text-center">features & price range to </h6>
                        <a href="" className="text-theme-inverse border-b-2 border-theme  ">Match your type</a></div>
                    
                </div>
            </div>
        </section >
    )
}