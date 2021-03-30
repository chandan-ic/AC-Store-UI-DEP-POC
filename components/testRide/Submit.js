import React from "react";



const Submit = () => {
 

  return (
    <section id="submit" className="flex items-start ">
      <div className="container  w-4/5   h-96 border-theme border-2  bg-sixth ">
        <div className="flex flex-col">
          <h2 className="font-bold mt-20">Thank You </h2>
          <h4>We have received your request for the Test Ride. You will hear from us shortly.</h4>
        </div>
        <div className="flex sm:mt-20  mt-10 justify-center 
 text-center
                        sm:flex-row" >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full
 sm:mr-0 sm:ml-0 border-2 border-theme bg-transparent
mr-6 ml-3 p-2  
                            shawdow-2xl bg- shadow-2xl ">
            <img src="/images/cart.png" /><p className="pt-3 text-left">SHOP</p>
          </div>
          <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent">
            <img src="images/buy.png" />< p className="pt-3">BUY</p>
          </div>
          <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl 
sm:mr-0 sm:ml-0 mr-2 ml-5 p-2 bg-theme border-2 border-theme ">
            <img src="images/ride.png" /><p className="pt-3">RIDE</p>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Submit;
