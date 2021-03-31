export default function HomeHero() {
    return (
        <section className="acSec bg-primary ">
            <div className="container sm:mt-20 mt-2">
                <div className="flex  flex-col sm:flex-row">
                    <div className=" flex flex-col w-full  sm:w-1/2 mt-10 " >
                        <h1 className="headHero font-bold ">YOUR FAVOURITE BIKE</h1>
                        <h3 className="subHeadHero">NOW ONLINE</h3>
                        <h6 className="paraHero sm:mt-5 mt-2">For your comfort and safety, now order your bike online
                           and get it delivered to your home. </h6>
                        <div className="flex sm:mt-20  mt-10 justify-center 
sm:justify-start text-center
                        sm:flex-row" >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full
 sm:mr-0 sm:ml-0 
mr-6 ml-3 p-2  bg-theme
                            shawdow-2xl bg- shadow-2xl ">
                                <img src="images/cart.png" /><p className="pt-3 text-left">SHOP</p>
                            </div>
                            <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arow.png" /></span>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
                                <img src="images/headicon.png" />< p className="pt-3">BUY</p>
                            </div>
                            <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arow.png" /></span>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl 
sm:mr-0 sm:ml-0 mr-2 ml-5 p-2 bg-transparent border-2 border-theme ">
                                <img src="images/icon3.png" /><p className="pt-3">RIDE</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2  border-red-500 sm:pt-0">
                        <img className="" src="/images/home1HeroImage.png" alt="HeroImage" width="1000px" height="662px" />
                    </div>
                </div>
                <div className="z-0 ">
                    <h4>Start Here</h4>
                    <a href="#utility " ><img className=" z-0 absolute w-10   sm:w-12 ml-4 pt-5 animate-bounce "
                        src="images/dropicon.png" />
                    </a>
                </div>
            </div>
        </section >
    )
}

