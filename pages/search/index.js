import SearchHeader from '../../components/search/headerCompo';
import SearchFilter from '../../components/search/compoTwo';
import VehicleCard from '../../components/search/searchVehicle';
import SearchSideBar from '../../components/search/selectOption';
import SearchNav from '../../components/search/searchNav';
import useSWR from 'swr';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchMasterData } from '../../store/search/actions'
import { server } from "../../config"
// const fetcher = (...args) => fetch(...args).then((res) => res.json())
// const url = '/api/v1/master/get/variantSearch'

export default function Search(searchMasterData) {

    const dispatch = useDispatch();
    dispatch(setSearchMasterData(searchMasterData.searchMasterData.responseData))

    // const { data, error } = useSWR(url, fetcher);
    // if (error) return <h1>Something went wrong!</h1>
    // if (!data) return <h1>Loading...</h1>
    // console.log("data=", data.responseData);

    // const searchMasterData = data.responseData;
    // console.log("searchMasterData=", searchMasterData);
    // dispatch(setSearchMasterData(searchMasterData))
    return (
        <div className="pt-20 min-h-screen">
             <div className="w-full sm:block hidden ">
                <SearchNav />
            </div>
            <div className=" w-full flex sm:flex-row flex-col">
                <div className="w-full sm:w-1/6 sm:pl-5">
                    <SearchFilter />
                    <div className="sm:py-5 sm:block hidden">
                        <SearchSideBar />
                    </div>
                </div>
                <div className="sm:w-5/6 w-full">
                    {/*<SearchHeader />*/}
                    <div className="py-5 sm:block hidden">
                        <VehicleCard />
                    </div>
                </div>
            </div> 
        </div>
    )

}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/Master/api/v1/master/get/variantSearch`)
    const searchMasterData = await res.json()
console.log("searchData=",searchMasterData.responseData)
    if (searchMasterData.isSuccess) {
        return {
            props: {
                searchMasterData
            },
        }
    }
}