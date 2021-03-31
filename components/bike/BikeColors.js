import { useState } from "react"
const vehicleProductRed = "/images/vehicleProduct.png"
const vehicleProductBlack = "/images/vehicleProduct2.png"
const dominarBikes = { vehicleProductRed, vehicleProductBlack }
import ExShowRoomPrice from './ExShowRoomPrice';



export default function BikeColorSelector() {
  const [selected, setSelected] = useState(dominarBikes.vehicleProductBlack);
  const [btnType, setBtnType] = useState('Black')
  const toggleMe = (value) => {
    setBtnType(value)
  }

  return (
 <div id="performance" className="acContainer scroll-snap-align: start">
      <div className="">
        <div className="w-full secHeadingWrap ">
          <h1 className="secHeading font-bold">
            Dominar 250
            </h1>
          <h4>Colors</h4>
          <div className="flex flex-col    justify-center">
            <div className="w-full flex place-self-center">
              <img className="m-auto max-w-lg" src={selected} alt="dominar-250" />
            </div>
            <div className="w-full flex flex-col justify-center sm:flex-row">
              <div className="flex justify-center  sm:w-4/5 sm:ml-20">
                <div className="text-center px-4 sm:mt-2 sm:pl-20 sm:ml-20" onClick={() => toggleMe('Red')} >
                  <button className=" inline-flex w-10 h-10 mb-1 rounded-full bg-red-600
                       border-2 border-theme focus:outline-none  "
                    onClick={() => setSelected(dominarBikes.vehicleProductRed)}>
                    {btnType === 'Red' && <div className="p-3 w-9 h-9 rounded-full absolute"
                      style={{ background: "red", borderRadius: '22px', boxShadow: '0px 0px 0px 8px rgba(255,0,0,0.3)' }}> </div>}
                  </button>
                  <h5 className=" font-semibold ">
                    Canyon Red 
                 </h5>
                </div>
                <div className="text-center px-4 mt-5 sm:mt-2 sm:ml-20" onClick={() => toggleMe('Black')}>
                  <button className=" inline-flex w-10 h-10 mb-1 rounded-full bg-black
                       border-2 border-black focus:outline-none  "
                    onClick={() => setSelected(dominarBikes.vehicleProductBlack)}>
                    {btnType === 'Black' && <div className="p-3 w-9 h-9 rounded-full absolute "
                      style={{ background: "black", borderRadius: '22px', boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.3)' }}> </div>}
                  </button>
                  <h5 className=" font-semibold ">
                    Charcoal Black
                 </h5>
                </div>
              </div>
              
               {/*
               } <div className="flex flex-col justify-center sm:w-1/5 text-center sm:ml-20  sm:block">
                  
                    <h5 className="font-bold" >Ex Showroom Price </h5>
                    <h6>Starts at: <b>Rs.167,718/-</b> </h6>
                  
                  <button className="modelButton">Book Now</button>
                </div>

                */}
                
            </div>
            <div className="borderTest3 w-full justify-self-end">
                 <ExShowRoomPrice colorTheme="light" exshowroomprice="223232"/>  
             </div>  
          </div>      
        </div>
      </div>
    </div>
  )
}
