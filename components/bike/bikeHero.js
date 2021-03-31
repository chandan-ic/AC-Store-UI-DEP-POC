import Image from 'next/Image';
import ExShowRoomPrice from './ExShowRoomPrice';

export default function BikeHero({ vehicle }) {
    return (
      <div className="flex flex-col h-screen w-screen justify-between" style={{ 
      backgroundImage: `url("/images/Dominar-400.jpeg")`,
      backgroundSize: 'cover'
    }} >
       <div className="acContainer pt-20">
            <h1>{vehicle.name} </h1>
            <h2> {vehicle.feature1} </h2>
        </div>
        <div className=" w-screen justify-self-end p-2 bg-black opacity-50 flex">
         <div className="borderTest acContainer mx-auto flex justify-between">
             <div className="borderTest2 flex flex-row  justify-center h-14 mt-10 sm:mt-0 w-full sm:w-4/5">
                   <div className="flex  flex-col flex-grow-0 min-h-0 sm:px-7 pb-1 pr-2 sm:pr-4 text-center sm:space-x-0 whitespace-nowrap ">
                       <h5 className="font-bold text-white p-1">248.77C</h5>
                       <h6 className="font-bold text-white p-1"> DOHC Engine</h6>
                  </div>
                  <div className="flex  flex-col flex-grow-0  text-center min-h-0 sm:px-7 pb-1 pr-2 pl-2 sm:pr-3 sm:pl-3 border-l-2  border-gray-300 sm:space-x-0 whitespace-nowrap">
                       <h5 className="font-bold text-white p-1">Twin Barrel</h5>
                       <h6 className="font-bold text-white p-1">Exhaust</h6>
                  </div>
                   <div className="flex  flex-col text-center min-h-0 pb-1 pl-2 sm:pl-3  sm:px-7 border-l-2  border-gray-300 sm:space-x-0 whitespace-nowrap">
                          <h5 className="font-bold text-white p-1">ABS</h5>
                       <h6 className="font-bold text-white p-1">Twin Channel</h6>
                    </div>
                    <div className="flex-col text-center min-h-0 sm:block hidden pb-1 sm:px-7 border-l-2  border-gray-300
                        sm:space-x-0 whitespace-nowrap">
                          <h5 className="font-bold text-white p-1"> Upside Down</h5>
                          <h6 className="font-bold text-white p-1">37mm front forks</h6>
                    </div>
            </div>
            <div className="borderTest3 w-2/5 justify-self-end">
                 <ExShowRoomPrice colorTheme="light" exshowroomprice="223232"/>  
            </div>    
          </div>
        </div>
      </div>
    )
}