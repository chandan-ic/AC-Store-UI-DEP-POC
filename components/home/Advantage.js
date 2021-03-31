export default function Advantage() {
    return (
        <section className="acSec flex items-center " /*style={{
            background: `url('/images/adv.png')`,
            backgroundSize: "cover", backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            width: "100%", backgroundColor:"white", opacity:"80%"
        }}*/ >
            <div className="bg-default">
                <div className="flex flex-col w-full  h-full sm:flex-row ">
                    <div className="flex flex-col w-full sm:w-1/2 
                          sm:flex-row   ">
                        <div className=" sm:mt-20 mt-10 sm:ml-16 sm:ml-20 ">
                            <h1 className="font-bold sm:mt-20 mt-5 sm:ml-20 ml-8 ">Advantage Khivraj</h1>
                            <h4 className="pt-2 mb-4 sm:ml-20 ml-8">As part of the Khivraj family you get</h4>

                            <div className="flex flex-row mt-3 sm:ml-20">
                                <div className=""> <img className="w-9  " src="images/dot.png" /></div>
                                <h5 className="mt-2 mb-2">Weekend rides with our biker community</h5>
                            </div>
                            <div className="flex flex-row sm:ml-20">
                                <div><img className="w-9 " src="images/dot.png" /></div>
                                <h5 className="mt-2 mb-3" >To Ride your bike on racing tracks</h5>
                            </div>
                            <div className="flex flex-row sm:ml-20">
                                <div> <img className="w-9" src="images/dot.png" /></div>
                                <h5 className="mt-2 mb-3" >Regular service discount and other offers </h5>
                            </div>

                            <div className="pt-5 pb-5 sm:ml-20">
                                <button className="modelButton bg-default hover:text-white">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-full ">
                        <img className="w-full sm:min-h-screen " src="/images/adv.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}