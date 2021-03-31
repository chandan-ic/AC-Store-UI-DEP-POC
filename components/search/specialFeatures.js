import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSeletedSpecialFeature } from '../../store/search/actions';

export default function SpecialFeatures() {

    const searchMasterData = useSelector((state) => state.search.searchMasterData);
    const feature = useSelector((state) => state.search.feature)
 console.log("sf=",  feature)
    const dispatch = useDispatch()

    console.log("searchData=", searchMasterData)
    console.log("searchDataMaster=", searchMasterData.Brand)
    const Specialfeature = searchMasterData.SpecialFeatures;

    const dispSpecialFeatureCode = (e) => {
        let selected = e.target.value
        console.log(selected)
         feature.indexOf(selected) === -1 && feature.push(selected);
        console.log("sf=",  feature)
        dispatch(setSeletedSpecialFeature(selected))

    }


    return (
        <div className="flex flex-col space-x-3 sm:space-x-8 sm:py-2 pb-2">
            <h5 className="uppercase pl-2 sm:pl-8 sm:py-1 sm:font-semibold font-bold 
sm:text-md text-sm  sm:text-lg border-b-2 py-2 border-gray-200 sm:border-b-0 ">Special Features</h5>
            {Specialfeature.map((s, i) =>
                <div key={i} className="flex flex-col sm:space-y-2 sm:pb-0 sm:pt-0  pt-4">
                    <label className="inline-flex items-center sm:py-2 py-1">
                        <input type="checkbox" className="form-checkbox text-yellow-300 border 
border-gray-200"
                            name="special_feature" value={s.SpecialFeatureCode}
                            // checked={s.SpecialFeatureCode === specialFeature}
                            onChange={(e) => dispSpecialFeatureCode(e)}
                        />
                        <h5 className="text-md ml-2">{s.SpecialFeature}</h5>
                    </label>

                </div>)}
        </div>
    )
}


/*<label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-yellow-300 border border-gray-200" checked />
                    <h5 className="text-md font-bold ml-2"> Inverted Suspension </h5>
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox border border-gray-200 text-yellow-300" />
                    <h5 className="text-md ml-2">Slipper Clutch</h5>
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox border border-gray-200 text-yellow-300" />
                    <h5 className="text-md ml-2">Digital Display </h5>
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox border border-gray-200 text-yellow-300" />
                    <h5 className="text-md ml-2">ABS</h5>
                </label>*/