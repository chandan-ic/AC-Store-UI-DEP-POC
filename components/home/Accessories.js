import Link from 'next/link'
export default function Accessories() {
    return (
        <section className="acSec bg-default sm:mb-10">
            <div className="container sm:pb-10">
                <div className="sm:pt-20 pt-10 ">
                    <h2 className="font-bold">Accessories</h2>
                    <h5 className="pt-3">for you and your bike, merchandize and other</h5>
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 text-center
 sm:pt-20 sm:flex-row sm:justify-between ">
                    <div className="sm:mt-10 ring-1 ring-gray-100 hover:shadow-2xl  p-5 mt-5">
                        <img className="m-auto w-40 mb-4" src="images/acc1.png" />
                        <button className="mt-4 modelButton">Riding Gear</button>
                    </div>
                    <div className="sm:mt-10 ring-1 ring-gray-100 hover:shadow-2xl p-5 mt-5">
                        <img className="m-auto w-40 mb-4" src="images/acc2.png" />
                        <button className="mt-4 modelButton">Safety Gear</button>
                    </div>
                    <div className="sm:mt-10 ring-1 ring-gray-100 hover:shadow-2xl p-4 mt-5">
                        <img className="m-auto w-40 mb-4" src="images/acc3.png" />
                        <button className="mt-4 modelButton">Merchandize</button>
                    </div>
                    <div className="sm:mt-10 ring-1 ring-gray-100 hover:shadow-2xl p-4 sm:p-5 mt-5" >
                        <img className="m-auto  w-40 mb-4" src="images/acc4.png" />
                        <button className="modelButton ">For Performance</button>
                    </div>
                </div>

                <div className=" flex flex-row justify-center m-5 sm:m-0 sm:mt-20">
                    <a href="#" className="border-b-2 border-theme text-black visited:text-theme-inverse">and more</a>
                </div>
            </div>

        </section>
    )
}