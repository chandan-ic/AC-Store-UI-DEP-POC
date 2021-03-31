import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react';
import SearchBrands from './searchBrands';
import SearchNav from './searchNav'
import SearchColors from './searchColor';
import SpecialFeatures from './specialFeatures';
import SearchSlider from './searchSlider';
import SearchSliderEngine from './engineSlider';


const  FilterOptions = () => {
    const [show, setShow] = useState("");
    // const brand = useSelector((state) => state.search.brand);
    // const categoryType = useSelector((state) => state.search.categoryType);
    // const maxPrice = useSelector((state) => state.search.maxPrice);
    // const minPrice = useSelector((state) => state.search.minPrice);
    // const minEngineCC = useSelector((state) => state.search.minEngineCC);
    // const maxEngineCC = useSelector((state) => state.search.maxEngineCC);
    // const bikeColor = useSelector((state) => state.search.bikeColor)
    // const feature = useSelector((state) => state.search.feature)




    const callDisp = (e) => {
        console.log("SS=", e.target.value)
        setShow(e.target.value);
    }


    const handleSubmit = () => {
        // const submitSearchData = {
        //     brand: brand,
        //     categoryType: categoryType,
        //     maxPrice: maxPrice,
        //     minPrice: minPrice,
        //     maxEngineCC: maxEngineCC,
        //     minEngineCC: minEngineCC,
        //     bikeColor: bikeColor,
        //     feature: feature
        // }
        // console.log("searchdata=", submitSearchData)
    }
const callBack = () => {
}

    return (
        <div className=" w-full mt-2 border-gray-200 bg-white border-2 font-Montserrat">

            <div className="flex flex-row">
                <div className="w-3/5 border-r-2 border-gray-200  flex flex-col h-full pb-52 pt-1" >
                    <button value="brands" className="text-sm  py-2 p-2 text-left focus:outline-none  border-b-2 border-gray-200"
                        onClick={callDisp}>
                        Brands</button>
                    <button value="biketype" className="text-sm  py-2 p-2 focus:outline-none w-10"
                        onClick={callDisp}>
                        BikeType</button>
                    <button value="price" className="text-sm p-2  py-2 focus:outline-none w-10"
                        onClick={callDisp}>
                        Price</button>
                    <button value="enginecc" className="text-sm p-2 focus:outline-none w-10"
                        onClick={callDisp}>
                        EngineCC</button>
                    <button value="color" className="text-sm p-2  py-2 focus:outline-none w-10"
                        onClick={callDisp}>
                        Colour</button>

                    <button value="features" className="text-sm p-2 focus:outline-none w-10"
                        onClick={callDisp}>
                        SpecialFeatures</button>
                </div>
                <div className="block sm:hidden w-3/5  pt-1 ">
                    <div className="">{show === 'brands' && <SearchBrands />}</div>
                    {/* <div className="">{show === 'biketype' && <SearchNav />}</div> */}
                    <div className="">{show === 'price' && <SearchSlider />}</div>
                    {/* <div className="">{show === 'enginecc' && <SearchSliderEngine />}</div>
                    <div className="">{show === 'color' && <SearchColors />}</div>
                    <div className="">{show === 'features' && <SpecialFeatures />}</div> */}
                </div>
            </div>
            <div className="flex flex-row justify-between items-end w-full ">
                <button className="w-2/4  bg-white border border-yellow-300 h-12
 hover:border-yellow-300 " onClick={callBack}>BACK</button>
                <button onClick={handleSubmit} className="w-2/4 bg-yellow-300 h-12
 hover:border-yellow-300 ">APPLY</button>
            </div>

        </div>



    )

}

export default FilterOptions;