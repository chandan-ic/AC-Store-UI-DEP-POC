import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedBrand } from '../../store/search/actions';

export default function SearchBrands() {

    const searchMasterData = useSelector((state) => state.search.searchMasterData);
    const brand = useSelector((state) => state.search.brand)

    const dispatch = useDispatch()
    console.log("brandCode=", brand)
    console.log("searchData=", searchMasterData)
    console.log("searchDataMaster=", searchMasterData.Brand)
    const Brand = searchMasterData.Brand

    const dispBrandCode = (e) => {
        let selected = e.target.value
        console.log(selected)
        brand.indexOf(selected) === -1 && brand.push(selected);
        console.log("b=", brand)
        dispatch(setSelectedBrand(selected))
        // dispatch(setSelectedBrand(brandCode.concat(e.target.value)))
        // console.log("bb=", brandCode)
    }



    return (
        <div id="brand" className="sm:py-2  sm:space-x-5 ">
            <h5 className=" uppercase pl-8 sm:py-2 pt-2 sm:text-md text-lg sm:border-b-0 font-semibold border-gray-200 border-b-2">Brands</h5>
            {Brand.map((b, i) =>
                <div key={i} className="flex flex-col space-y-2 sm:pt-0 pt-2 sm:px-0 px-8" >

                    <div className="flex flex-col space-y-2">
                        <label className="inline-flex items-center pt-2">
                            <input type="checkbox" className="form-checkbox focus:outline-none border border-gray-200 text-yellow-300"
                                name="brand" value={b.BrandCode}
                                // checked={b.BrandCode === brand}
                                onChange={(e) => dispBrandCode(e)}
                            />
                            <h5 className="text-md ml-2 py-1">{b.Brand}</h5>
                        </label>
                    </div>
                </div>)}
        </div>
    )
}



/*<label className="inline-flex items-center">
                        <input type="checkbox" name="brand" value="" className="form-checkbox border border-gray-200  text-yellow-300" checked />
                        <h5 className="text-md font-bold ml-2">Pulsar</h5>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox border border-gray-200  text-yellow-300" />
                        <h5 className="text-md ml-2">Avenger</h5>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox border border-gray-200 text-yellow-300" checked />
                        <h5 className="text-md font-bold ml-2">Platina</h5>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox border border-gray-200  text-yellow-300" />
                        <h5 className="text-md ml-2">CT</h5>
                    </label>*/