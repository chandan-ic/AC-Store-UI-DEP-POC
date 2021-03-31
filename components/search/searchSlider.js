import React, { useState } from 'react';
import ReactSlider from 'react-slider'
import { useSelector, useDispatch } from 'react-redux'
import { setSeletedMaxPrice, setSeletedMinPrice } from '../../store/search/actions';
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css';

export default function SearchSlider() {



    const searchMasterData = useSelector((state) => state.search.searchMasterData);
    const maxPrice = useSelector((state) => state.search.maxPrice);
    const minPrice = useSelector((state) => state.search.minPrice)
    const [sel, setSel] = useState(false);
    const dispatch = useDispatch();


    console.log("searchData=", searchMasterData)
    console.log("searchDataMaster=", searchMasterData.Price)
    console.log("searchDataMaster=", searchMasterData.EngineCC)
    const Minprice = searchMasterData.MinAndMaxPrice.Minimum
    const Maxprice = searchMasterData.MinAndMaxPrice.Maximum


    const [value, setValue] = useState({ min: Minprice, max: Maxprice })
    console.log("minv=", value)

    const dispVal = (val) => {
        console.log("set=", val.min)
        console.log("set=", val.max)
        setValue(val)
        dispatch(setSeletedMinPrice(val.min))
        dispatch(setSeletedMaxPrice(val.max))
        setSel(true)
    }

    return (

        <div className="flex flex-col sm:py-4 sm:p-5 ">
            
                <h5 className=" uppercase pl-8 py-1 text-lg sm:text-md font-semibold sm:mb-4 
border-b-2 border-gray-200 sm:border-b-0">Price</h5>
                <div className="w-28  ml-7 pt-14 sm:pt-0 sm:ml-0 sm:w-full">
                    <InputRange
                        maxValue={Maxprice}
                        minValue={Minprice}
                        value={value}
                        onChange={dispVal}
                    />
                </div>
                <div className="flex flex-row justify-around py-4 sm:mt-4 mt-6">
                    <div className="border border-black bg-gray-200 sm:w-20 sm:h-7 py-1
text-xs focus:outline-none text-center">{sel ? minPrice : "Min-Range"}</div>
                    {/* <h6>-to-</h6> */}
                    <div className="border border-black bg-gray-200 sm:w-20 sm:h-7 text-center py-1
text-xs focus:outline-none">{sel ? maxPrice : "Max-Range"}</div>
                </div>
            </div>
     

    )

}




