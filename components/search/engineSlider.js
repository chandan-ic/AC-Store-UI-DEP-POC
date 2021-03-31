// import React, { useState } from 'react';
// import ReactSlider from 'react-slider'
// import { useSelector, useDispatch } from 'react-redux'
// import { setSeletedMaxEngineCC, setSeletedMinEngineCC } from '../../store/search/actions';
// import InputRange from 'react-input-range'
// //import 'react-input-range/lib/css/index.css';


// export default function SearchSliderEngine() {



//     const searchMasterData = useSelector((state) => state.search.searchMasterData);

//     const minEngineCC = useSelector((state) => state.search.minEngineCC)
//     const maxEngineCC = useSelector((state) => state.search.maxEngineCC)

//     const dispatch = useDispatch();
//     const [show, setShow] = useState(false);


//     console.log("searchData=", searchMasterData)

//     console.log("searchDataMaster=", searchMasterData.EngineCC)
//     const MinEngine = searchMasterData.MinAndMaxCC.Minimum
//     const MaxEngine = searchMasterData.MinAndMaxCC.Maximum

//     const [value, setValue] = useState({ min: MinEngine, max: MaxEngine })
//     console.log("minv=", value)

//     const dispVal = (val) => {
//         console.log("set=", val.min)
//         console.log("set=", val.max)
//         setValue(val)
//         dispatch(setSeletedMinEngineCC(val.min))
//         dispatch(setSeletedMaxEngineCC(val.max))
//         setShow(true)
//     }

//     return (

//         <div>
//             <div className="flex flex-col sm:py-4 sm:p-4">
//                 <h5 className=" uppercase pl-8 sm:py-2 py-1  text-md font-semibold sm:mb-4 text-lg border-b-2 border-gray-200 sm:border-b-0">Engine cc</h5>
//                 <div className="w-3/4  ml-5 pt-14 sm:pt-0 sm:ml-0 sm:w-full" >
//                     <InputRange 
//                         maxValue={MaxEngine}
//                         minValue={MinEngine}
//                         value={value}
//                         onChange={dispVal}

//                     />
//                 </div>
//             </div>
//             <div className="flex flex-row justify-around py-4 sm:mt-4 mt-6">
//                 <div className="border border-black bg-gray-200 sm:w-20 sm:h-7 py-1
// text-xs focus:outline-none text-center">   {show ? minEngineCC : "Min-Range"} </div>
//                 {/* <h6>-to-</h6> */}
//                 <div className="border border-black bg-gray-200 sm:w-20 sm:h-7 py-1
// text-xs focus:outline-none text-center">{show ? maxEngineCC : "Max-Range"} </div>
//             </div>
//         </div>
//     )

// }
