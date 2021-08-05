import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



export default function ExShowRoomPrice({ colorTheme, exshowroomprice }) {
  const onroadpriceShow = useSelector((state) => state.bike.onroadpriceShow);
  const onRoadprice = useSelector((state) => state.bike.onRoadprice);

 
  return (

    <div className={`text-theme
       fixed bottom-0 p-2  z-20 flex sm:flex-col bg-white bg-opacity-70 sm:justify-end  mb-4 sm:mr-12 text-center items-center sm:items-end`}>
      {onroadpriceShow ? <div className="flex-grow  p-2 sm:pr-0">
        <h5 className="   whitespace-nowrap font-bold">Starts at: Rs.<strong>{onRoadprice}</strong> </h5>
        <h5 className="   sm:items-center whitespace-nowrap font-semibold text-2xl">On Road Price </h5>
      </div> : <div className="flex-grow  p-2 sm:pr-0">
      <h6 className="  sm:items-center whitespace-nowrap textminute">Ex showroom price starts at</h6>
        <h5 className="   sm:items-center whitespace-nowrap font-semibold text-2xl">Rs.&nbsp;{exshowroomprice} </h5>
      </div>}
      <button className="mt-4 modelButtonInverse">
        Book Now
             </button>
    </div>
  )
}