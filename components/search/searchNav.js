import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSeletedCategoryType } from '../../store/search/actions';

export default function SearchNav() {



    const searchMasterData = useSelector((state) => state.search.searchMasterData);
    const categoryType = useSelector((state) => state.search.categoryType)

    const dispatch = useDispatch();

    console.log("searchData=", searchMasterData)
    console.log("searchDataMaster=", searchMasterData.Category)
    const CategoryType = searchMasterData.Category


    const dispCategoryCode = (e) => {
        e.preventDefault();
        dispatch(setSeletedCategoryType(e.target.value))
    }

    return (
        <div>

            <div className="sm:border-b-2 sm:bg-gray-100 flex flex-col sm:flex-row justify-center 
sm:justify-center border-gray-200 sm:py-3 mb-2">
                <h5 className="font-semibold text-lg py-1 sm:px-5 uppercase sm:block hidden">All</h5>
                <h5 className=" uppercase pl-8 pt-2  text-lg font-semibold block sm:hidden sm:border-b-0 border-b-2 border-gray-200">BikeType</h5>
                {CategoryType && CategoryType.map((c, i) =>
                    <div key={i} className="sm:text-center sm:py-0 py-3">
                        <div className="px-4  border-b-2 border-gray-100">
                            <button  value={c.CategoryCode} onClick={(e) => dispCategoryCode(e)}
                                className="sm:font-semibold tracking-widest focus:outline-none  sm:py-0">
                                {c.Category}
                            </button>
                            <h6 className="text-xs">Rs. {c.SubTitle}</h6>
                        </div>
                    </div>)}
            </div>
        </div>
    )

}

//    <input checked={c.CategoryCode === categoryType}
//                                 onChange={(e) => dispCategoryCode(e)}
//                                 type="radio"
//                                 className="form-radio border-2 border-gray-200 text-yellow-400" name="dealerCode"
//                                 value={c.CategoryCode} />





/*     <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Executive</h5>
                        <h6 className="text-xs">Rs. 47,820 - Rs. 64,557</h6>
                    </li>
                    <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Premium</h5>
                        <h6 className="text-xs">Rs. 47,820 - Rs. 64,557</h6>
                    </li>
                    <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Cruiser</h5>
                        <h6 className="text-xs">100cc -150cc</h6>
                    </li>
                    <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Tourer</h5>
                        <h6 className="text-xs">100cc -150cc</h6>
                    </li>
                    <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Sport</h5>
                        <h6 className="text-xs">100cc -150cc</h6>
                    </li>
                    <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Commuter</h5>
                        <h6 className="text-xs">100cc -150cc</h6>
                    </li>
                    <li className="px-4">
                        <h5 className="font-semibold tracking-widest">Track</h5>
                        <h6 className="text-xs">100cc -150cc</h6>
                    </li>*/