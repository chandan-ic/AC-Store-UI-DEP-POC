import { useSelector, useDispatch } from 'react-redux';
import { vehicles } from '../../bike';
import Router from 'next/router';
import { setBikeVariant, setBikeBrand, setPreselected } from '../../store/testRide/actions';
import { bikeActions } from './store/bikeSlice';
import { getOnRoadPrice } from './store/bikeActions';
import BikeActionsCard from './BikeUI/BikeActionUI';
import { testRideActions } from '../TestRide/store/testRide-slice';

export default function BikeActions({ vehicle }) {
    const dispatch = useDispatch();
    const handleOnRoadSelect = (vehicleCode) => {
        var data = JSON.stringify({ "locationCode": "KR", modelCode: vehicleCode })
        dispatch(getOnRoadPrice(data))
    }
    const handleTestRide = (vehicleCode) => {
        dispatch(testRideActions.setBikeVariant(vehicleCode));
        callBrand(vehicleCode)
        dispatch(testRideActions.setPreselected(true))
        dispatch(bikeActions.setSelectedFunction("testRide"));
        Router.push("/test-ride")
    }
    let bdS = [];
    const callBrand = (bikeVariant) => {
        bdS = vehicles.find(v => v.ModelCode === bikeVariant)
        dispatch(testRideActions.setBikeBrand(bdS.Brand))
    }
    const handleFinanceCheck = (vehicleCode) => {
        dispatch(bikeActions.setSelectedBike(vehicleCode));
        const selFinBike = vehicleCode;
        callFinBike(selFinBike);
        dispatch(bikeActions.setSelectedFunction("financeEligibilityCheck"));
        Router.push("/financeCheck")
    }
    let selBike = [];
    const callFinBike = (selFinBike) => {
        selBike = vehicles.find(v => v.ModelCode === selFinBike)
        dispatch(testRideActions.setBikeBrand(selBike.Brand))
        dispatch(bikeActions.setselectedVariantBike(selBike.name))
    }

    return (

        <BikeActionsCard
            vehicle={vehicle}
            handleOnRoad={(vehicleCode) => handleOnRoadSelect(vehicleCode)}
            handleTestRide={(vehicleCode) => handleTestRide(vehicleCode)}
            handleFinance={(vehicleCode) => handleFinanceCheck(vehicleCode)}
        />

    )
}
