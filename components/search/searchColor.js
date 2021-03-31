import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSeletedBikeColor } from '../../store/search/actions';

export default function SearchColors() {


    const searchMasterData = useSelector((state) => state.search.searchMasterData);
    const bikeColor = useSelector((state) => state.search.bikeColor)

    const dispatch = useDispatch()

    console.log("searchData=", searchMasterData)
    console.log("searchDataMaster=", searchMasterData.colors)
    const Colors = searchMasterData.colors

    const dispColorCode = (e) => {
        e.preventDefault();
        dispatch(setSeletedBikeColor(e.target.value))
    }

    return (
        <div className="sm:py-2  sm:space-x-8 ">
            <h5 className=" uppercase pl-8 sm:py-2 pb-2 sm:pb-0 text-lg sm:text-md font-semibold border-b-2
 border-gray-200 sm:border-b-0">Colors</h5>
            {Colors.map((c, i) =>
                <div key={i} className="flex flex-col sm:space-y-2 " >

                    <div className="flex flex-col sm:space-y-4 sm:py-2 py-3 px-4 sm:px-0 sm:pt-0 pt-4">
                        <label className="inline-flex items-center">
                            <input type="radio"
                                className="form-radio focus:outline-none border border-gray-200 text-yellow-300"
                                name="color" value={c.ColorCode}
                                checked={c.ColorCode === bikeColor}
                                onChange={(e) => dispColorCode(e)}
                            />
                            <h5 className="text-md ml-2">{c.Color}</h5>
                        </label>
                    </div>
                </div>)}
        </div>
    )

}