import Image from 'next/image';
import ExShowRoomPrice from '../ExShowRoomPrice';

export default function BikeHeroSection({ vehicle }) {
    
    

     return (
          // <section className="bg-primary AC-Container-fluid pt-10 pb-40 md:pb-20 bg-no-repeat bg-opacity-0 bg-center" 
          // style={{ backgroundImage: 'radial-gradient(rgba(250, 250,250, 0.2), rgba(255, 255, 255, 0.9)), url("/images/home-advantage/adv-khivraj-wheel.png")' }}>

          <section 
          className="ACEXP-Outer sm:bg-center-center bg-center bg-cover bg-no-repeat" 
          style={{ backgroundImage: 
          `linear-gradient(rgba(255, 255,255, 0.5),rgba(255, 255,255, 0.0),rgba(255, 255,255, 0.0),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
          url(${vehicle.Featured_Image})` }}>
               <div className={`${vehicle.theme} AC-EXP-Inner`}  >
                <div className="ACEXP-Main  h-80vh flex flex-col justify-between">
                    <div className="">
                         <h1 className={`${vehicle.Hero_Text_Theme} uppercase tracking-widest`}>{vehicle.name}  </h1>
                         <h3 className={`${vehicle.Hero_Text_Theme} uppercase tracking-widest`}>{vehicle.Tag_Line}  </h3>
                    </div>
                    <div className="w-full flex justify-around ">
                                   <div className=" w-full flex justify-center space-x-8 text-center text-inverse">
                                        <div className="flex flex-col ">
                                             <h4 className="tracking-widest font-semibold text-lg sm:text-xl p-1">{vehicle.hf1label}</h4>
                                             <h6 className="text-sm p-1"> {vehicle.hf1value}</h6>
                                        </div>
                                        <div className="  flex flex-col  ">
                                             <h4 className="tracking-widest font-semibold text-lg sm:text-xl p-1">{vehicle.hf2label}</h4>
                                             <h6 className="text-sm p-1"> {vehicle.hf2value}</h6>
                                        </div>
                                        <div className="hidden  sm:flex  flex-col ">
                                             <h4 className="tracking-widest font-semibold text-lg sm:text-xl p-1">{vehicle.hf3label}</h4>
                                             <h6 className=" text-sm  p-1"> {vehicle.hf3value}</h6>
                                        </div>
                                        {/* <div className="hidden  flex-grow sm:flex flex-col border-l-2 border-gray-300">
                                        <h4 className="tracking-widest font-semibold text-lg sm:text-xl p-1">{vehicle.HF4}</h4>
                                             <h6 className="sm:font-bold text-xs  p-1"> {vehicle.HF4}</h6>
                                        </div> */}
                                   </div>
                    </div>
                              
               </div>
               </div>
          </section>
     )
}