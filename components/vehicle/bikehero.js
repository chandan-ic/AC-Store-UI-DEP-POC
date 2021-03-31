import SideBar from '../navigation/productleftnav';
export default function BikeHero({vehicle}) {
  return (
    <section id="overview" className=" acSec  bg-primary ">
      {/*<div className="place-self-start mt-20 pt-20 sm:block hidden" >< SideBar /></div>*/}
      <div className=" container w-full flex flex-col sm:flex-row ">
        <div className=" w-full ">
          <h1 className="secHeading font-bold mt-10 sm:mt-20">
            {vehicle.name}
{vehicle.feature1}
         </h1>
          <img className="vehicleImg w-full" src="/images/vehicleProductnew.png" alt="vehicle1" />
          <div className="flex flex-col sm:flex-row justify-center w-full">
            <div className="flex flex-row mt-10 sm:mt-0 justify-center sm:ml-20  w-full sm:w-4/5">
              <div className="flex  flex-col sm:px-7 pb-1 pr-2 sm:pr-4 text-center
               sm:space-x-0 whitespace-nowrap ">
                <h5 className="font-bold  p-1">248.77C</h5>
                <h6>DOHC Engine</h6>
              </div>
              <div className="flex  flex-col text-center sm:px-7 pb-1 pr-2 pl-2 sm:pr-3 sm:pl-3 border-l-2  border-gray-300 sm:space-x-0 whitespace-nowrap">
                <h5 className="font-bold  p-1">Twin Barrel</h5>
                <h6 className="">Exhaust</h6>
              </div>
              <div className="flex  flex-col text-center pb-1 pl-2 sm:pl-3  sm:px-7
border-l-2  border-gray-300 sm:space-x-0 whitespace-nowrap">
                <h5 className="font-bold  p-1">ABS</h5>
                <h6>Twin Channel</h6>
              </div>
              <div className=" flex-col text-center sm:block hidden pb-1 sm:px-7
border-l-2  border-gray-300
                  sm:space-x-0 whitespace-nowrap">
                <h5 className="font-bold  p-1">Upside Down</h5>
                <h6>37mm front forks</h6>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center sm:justify-end
  sm:mb-0 sm:mt-0 text-center mt-10 sm:m-0 sm:items-end w-full sm:w-1/5">
              <div>
                <h5 className=" sm:items-center font-bold">Ex Showroom Price </h5>
                <h6 className=" sm:items-center">Starts at: <b>Rs.167,718/-</b> </h6>
              </div>
              <button className="modelButton ">
                Book Now
             </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
  /* <h1 className="secHeading">
Dominar 250
</h1>
</div>
<div className="borderTest flex flex-col lg:flex lg:items-center lg:justify-self-start">
<div className=" w-full   md:w-11/12">
<img className="vehicleImg w-min" src="/images/vehicleProduct.png" alt="vehicle1" />
<div className="  justify-start sm:justify-end items-end txt-xs sm:text-base py-4 space-y-2 sm:space-x-2 sm:px-10 divide-y divide-light-gray-700 sm:divide-x sm:divide-y-0">
<div className="px-4 flex flex-row sm:flex sm:flex-col space-x-2 sm:space-x-0 whitespace-nowrap"  >
<h5 className="font-bold">248.77CC</h5>
<h6>DOHC Engine</h6>
</div>
<div className="px-4 flex flex-row sm:flex-col space-x-2 sm:space-x-0 whitespace-nowrap"  >
<h5 className="font-bold">Twin Barrel</h5>
<h6>Exhaust</h6>
</div>
<div className="px-4 flex flex-row sm:flex-col space-x-2 sm:space-x-0 whitespace-nowrap"  >
<h5 className="font-bold">ABS</h5>
<h6>Twin Channel</h6>
</div>
<div className="px-4 flex flex-row sm:flex-col space-x-2 sm:space-x-0 whitespace-nowrap"  >
<h5 className="font-bold">Upside Down</h5>
<h6>37mm front forks</h6>
</div>
</div>
<div>
<div className=" px-4 text-right whitespace-nowrap" >
<span>Ex Showroom Price </span> <br />
<span>Starts at: Rs.167,718/- </span> <br />

<button className="modelButton">
Book Now
</button>

</div>
</div>
</div>*/
















/*<div className="flex place-self-start mt-20 pt-20" >< SideBar /></div>
     <div className=" container w-full flex flex-col sm:flex-row ">
       <div className="secHeadingWrap w-full ">
         <h1 className="secHeading font-bold mt-10 sm:mt-10">
           Dominar 250
         </h1>
         <div className="flex flex-col mt-10 sm:mt-0 w-full sm:flex-row   items-center ">
           <div className="flex flex-col w-full    items-center justify-center">
             <img className="vehicleImg sm:w-5/6 w-full" src="/images/vehicleProductnew.png" alt="vehicle1" />
             <div className="flex flex-row mt-10 sm:mt-0  justify-center   ">
               <div className="flex  flex-col sm:px-7 pb-1 pr-2 sm:pr-4 text-center
               sm:space-x-0 whitespace-nowrap">
                 <h5 className="font-bold  p-1">248.77CC</h5>
                 <h6>DOHC Engine</h6>
               </div>
               <div className="flex  flex-col text-center sm:px-7 pb-1 pr-2 pl-2 sm:pr-3 sm:pl-3 border-l-2  border-gray-300 sm:space-x-0 whitespace-nowrap">
                 <h5 className="font-bold  p-1">Twin Barrel</h5>
                 <h6 className="">Exhaust</h6>
               </div>
               <div className="flex  flex-col text-center pb-1 pl-2 sm:pl-3  sm:px-7
border-l-2  border-gray-300 sm:space-x-0 whitespace-nowrap">
                 <h5 className="font-bold  p-1">ABS</h5>
                 <h6>Twin Channel</h6>
               </div>
               <div className="flex-col text-center sm:block hidden pb-1 sm:px-7
border-l-2  border-gray-300
                  sm:space-x-0 whitespace-nowrap">
                 <h5 className="font-bold  p-1">Upside Down</h5>
                 <h6>37mm front forks</h6>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="flex justify-center sm:justify-start
sm:items-center sm:mt-20 sm:pt-20 mb-10 sm:mb-0 border-2 border-blue-900 ">
         <div className=" flex flex-col sm:pt-20  sm:mt-20 ">
           <h5 className="align-middle sm:items-center sm:pt-20 sm:mt-20 font-bold">Ex Showroom Price </h5>
           <h6 className="align-middle sm:items-center">Starts at: <b>Rs.167,718/-</b> </h6>
           <button className="modelButton align-middle items-center">
             Book Now
             </button>
         </div>

       </div>

     </div>

   </section>*/



