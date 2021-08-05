import React, { useState } from 'react';
import {useTranslation} from 'next-i18next'

const Insurance = () => {
 const { t } = useTranslation(['booking', 'error', 'common'])
  return (


    <div className=" flex w-full">
      <div className="w-1/2">
        <h4 className="font-semibold">{t('booking:labels.pay-insurance')}</h4>
      </div>
      <div className="w-1/2 ">
        <h4 className="text-sm mt-1 text-gray-700">{t('booking:labels.ICICI-Lombard')}</h4>
      </div>
    </div>


  );

}


export default Insurance;