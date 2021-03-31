export default function SimilarBikes() {
    return (
        <section id="similarBikes" className="acSec  bg-secondary pb-20">

            <div className="container w-full flex flex-col sm:flex-row mb-20">
               
                <div className="w-full   secHeadingWrap mt-20">
                    <h1 className="font-bold secHeading">
                        Dominar 250
                    </h1>
                    <h4>Similar Bikes </h4>
                    <div className=" lg:flex lg:justify-start sm:items-center  mt-10 lg:place-self-center">
                        <div className=" flex-col items-center justify-center sm:mt-10 text-left">
                            <div className="items-center sm:items-start w-full sm:w-1/2 ring-2 ring-gray-200 hover:shadow-2xl mt-10 ">
                                <img className="w-96" src="/images/vehicleProduct10.png" />
                                <h4 className="font-bold text-center">Dominar 400</h4>
                            <div className="flex mt-10 sm:mt-5 p-2 justify-center">
                                <button className="modelButton ">EXPLORE</button></div>
                        </div>
</div>
                    </div>
                </div>
            </div>
        </section>

    )
}
