import { vehicles } from "../../bike";

export default function WhyKhivraj({ vehicle }) {
  return (
<section id="WhyKhivraj" className="ACEXP-Outer">
    <div  className={`${vehicle.theme} ACEXP-Inner`}>
 <div className="ACEXP-Main"> 

      <div className="pt-4">
        {/* <h1 className={`${vehicle.WhyKhivraj_Text_Theme} secHeading font-bold`}>{vehicle.name} </h1> */}
        <h1 className={`${vehicle.Hero_Text_Theme} tracking-widest uppercase leading-loose pt-8`}>ADVANTAGE KHIVRAJ</h1>

        {/* <h4 className={vehicle.WhyKhivrajTag_Text_Theme}> Why Khivraj </h4> */}
      </div>
      <div className="sm:mt-0 mt-6 h-full lg:h-3/6 pp-container flex flex-col sm:flex-row">
        <div className="w-full mt-2">
          <div className="lg:flex lg:items-center lg:justify-self-start sm:mt-6">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row flex -col sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/2 lg:h-64 sm:mb-0 mb-6">
                  <div className="rounded-lg  overflow-hidden">
                    <img alt="content" className="object-cover  md:h-36 object-top lg:h-48 w-full"
                      src="/images/vehicleProduct11.png" />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Racing track rides</h2>
                  <p className="text-base leading-relaxed mt-2">Weekend rides with our biker community
                  To Ride your bike on racing tracks Regular service discount and other offers and more..
                   </p>
                </div>
                <div className="p-4 md:w-1/2 lg:h-64 sm:mb-0 mb-6">
                  <div className="rounded-lg  overflow-hidden">
                    <img alt="content" className="object-cover  md:h-36 object-top lg:h-48 w-full"
                      src="/images/vehicleProduct12.png" />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Racing track rides</h2>
                  <p className="text-base leading-relaxed mt-2">Weekend rides with our biker community
                  To Ride your bike on racing tracks Regular service discount and other offers and more..
                   </p>
                </div>
              </div>

            </div>
          </div>
          <div className=" flex-row  justify-center  sm:justify-around w-full md:mt-6 lg:mt-24 lg:align-bottom sm:block">
            
            <div className="inline-flex flex-wrap items-end justify-evenly  w-full">
              <div className="font-semibold  lg:p-1 w-1/2 sm:w-1/4 inline-flex flex-row " >
                <span className="block w-10 h-10 rounded-full items-center align-middle lg:mt-0 md:mt-0 mr-2 ">
                  <img src="/images/awards.png" /> </span>
                <h5 className="md:text-xs lg:text-base whitespace-nowrap">100+<br />Awards</h5>
              </div>
              <div className="font-semibold lg:p-1 w-1/2 sm:w-1/4 inline-flex flex-row" >
                <span className="block  w-10 h-10  rounded-full items-center align-middle md:mt-0 lg:mt-0 mr-2 ">
                  <img src="/images/customers.png" /> </span>

                <h5 className="md:text-xs whitespace-nowrap lg:text-base">2,50,00000+<br />customers</h5>
              </div>
              <div className="font-semibold lg:p-1 w-1/2 sm:w-1/4 inline-flex flex-row  ">
                <span className="block  w-10 h-10 rounded-full md:mt-0 lg:mt-0 mr-2 ">
                  <img src="/images/bike.png" /> </span>
                <h5 className="md:text-xs lg:text-base whitespace-nowrap">8,50,000+ <br />Bikes Sold</h5></div>
              <div className="font-semibold lg:p-1 sm:w-1/4 inline-flex flex-row ">
                <span className="block  w-10 h-10  rounded-full items-center align-middle md:mt-0 lg:mt-0 mr-2 ">
                  <img src="/images/service2.png" /> </span>

                <h5 className="md:text-xs lg:text-base whitespace-nowrap">1,20,000+ <br />Bikes Serviced</h5></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
</section>
  )
}