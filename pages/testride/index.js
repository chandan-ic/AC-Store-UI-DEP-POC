import TestRideBanner from '../../components/testRide/testRideBanner';
import MultiStepForm from '../../components/testRide/MultiStepForm';
import TestRideNav1 from '../../components/navigation/TestRideNav';
import { useSelector, useDispatch } from 'react-redux';
import { server } from "../../config"
import { setMasterData } from "../../store/master/actions/master";

export default function TestRide(masterData) {
    const dispatch = useDispatch();
    dispatch(setMasterData(masterData.masterData.responseData));


    return (
        <div>
            <div>
                <TestRideBanner />
                <div className="bg-gray-100 h-screen sticky top-0">
                    <div className="trCntnr sm:pt-0 pt-20">
                        <TestRideNav1 />
                    </div>
                    <div className="bg-gray-100">
                        <div className="trCntnr ">
                            <MultiStepForm />

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}



export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/Master/api/v1/master/get/testride`)
    const masterData = await res.json()

    if (masterData.isSuccess) {
        return {
            props: {
                masterData
            },
        }
    }
}