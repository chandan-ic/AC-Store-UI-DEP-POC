import React, { useState } from 'react';
import {bookingActions } from "../store/booking-slice";
import { useSelector, useDispatch } from 'react-redux';
import {useTranslation} from 'next-i18next'

const RSA = () => {
  const dispatch = useDispatch();
  const RSA = useSelector((state) => state.booking.RSA)
  const [isChecked, setIsChecked] = useState(false);
  const [RSAS, setRSAS] = useState({
    serviceCode: "RSA",
    required: false,
    referenceType:"" ,
    referenceCode: ""
  })
 const { t } = useTranslation(['booking', 'error', 'common'])
    const setRSAValue = () => {
       setIsChecked(!isChecked)
       setRSAS({...RSAS,required:!isChecked})
       dispatch(bookingActions.setRSA({...RSA,required:!isChecked}))
    }

  return (
    <div className="p-2 flex">
      <div className="w-1/4">
        <h4 className=" ml-4 text-xl">{t('booking:labels.bk-rsa')}</h4>
      </div>
      <div className="w-3/4 ">
        <input className="mt-1 w-4 h-4" type="checkbox" checked={RSA.required}  onChange={() => setRSAValue()} />
        <span className="uppercase text-sm text-gray-700 ml-2">{t('booking:labels.bk-include')}</span>
      </div>
    </div>
  );
}
export default RSA
