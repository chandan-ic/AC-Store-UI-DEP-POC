export default function ExShowRoomPrice({colorTheme,exshowroomprice}) {
  return (

   <div className="borderTest flex flex-col items-center sm:justify-end sm:mb-0 sm:mt-0 text-center mt-10 sm:m-0 sm:items-end w-full">
              <div>
                <h5 className={`${colorTheme === "light" ? "text-white" : "text-black"}
                	sm:items-center font-bold`}>Starts at: Rs.<b>{exshowroomprice}</b> </h5>
                <h6 className={`${colorTheme === "light" ? "text-white" : "text-black"}
                   sm:items-center`}
                   >Ex Showroom Price </h6>

              </div>
              <button className="modelButton">
                Book Now
             </button>
            </div>
)}

