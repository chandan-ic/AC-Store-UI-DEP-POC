import { useDispatch } from "react-redux";
import { bikeActions } from './store/bikeSlice';
import BikeColorSelectorCard from './BikeUI/BikeColorUI';

export default function BikeColorSelector({ vehicle }) {
  const dispatch = useDispatch();
  const handleSelect = (value) => {
    dispatch(bikeActions.setBtnType(value))
  }

  return (
    <BikeColorSelectorCard vehicle={vehicle} handleToggle={(value) => handleSelect(value)} />
  )
}
