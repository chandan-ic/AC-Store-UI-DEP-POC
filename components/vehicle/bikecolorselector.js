import { useState } from "react"
const vehicleProductRed = "/images/vehicleProduct.png"
const vehicleProductBlack = "/images/vehicleProduct2.png"
const dominarBikes = { vehicleProductRed, vehicleProductBlack }
export default function BikeColorSelector() {
  const [selected, setSelected] = useState(dominarBikes.vehicleProductBlack);
  const [btnType, setBtnType] = useState('Black')
  const toggleMe = (value) => {
    setBtnType(value)
  }

  return (
    <section id="color" className="acSec  bg-secondary sm:h-screen">
      <div className="container">
        <div className="w-full  secHeadingWrap mt-10 sm:mt-20 ">
          <h1 className="secHeading font-bold mt-10">
            Dominar 250
            </h1>
          <h4>Colors</h4>
          <div className="flex flex-col    justify-center">
            <div className="w-full flex place-self-center">
              <img className="m-auto" src={selected} alt="dominar-250" />
            </div>
            <div className="w-full flex flex-col justify-center sm:flex-row sm:pb-20">
              <div className="flex justify-center  sm:w-4/5 sm:ml-20">
                <div className="text-center px-4 mt-5 sm:mt-2 sm:pl-20 sm:ml-20" onClick={() => toggleMe('Red')} >
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
             
                <div className="flex flex-col justify-center sm:w-1/5 text-center sm:ml-20  sm:block">
                  
                    <h5 className="font-bold" >Ex Showroom Price </h5>
                    <h6>Starts at: <b>Rs.167,718/-</b> </h6>
                  
                  <button className="modelButton">Book Now</button>
                
              </div>
            </div>
          </div>
        
        <div className="flex flex-col justify-center  mt-16 sm:mt-0 sm:hidden   sm:items-end items-center
  md:justify-end ">
          <div className=" whitespace-nowrap text-center" >
            <h5 className="font-bold" >Ex Showroom Price </h5>
            <h6>Starts at: <b>Rs.167,718/-</b> </h6>
          </div>
          <button className="modelButton">Book Now</button>
        </div>
      </div>

      </div>
    </section >
  )
}
