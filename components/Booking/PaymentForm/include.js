import React, { useState } from 'react';
import {useTranslation} from 'next-i18next'

const Include = () => {
     const { t } = useTranslation(['booking', 'error', 'common'])
       return (
         <section className="container">
        <div className="inline-flex">
           <h2 className="font-bold">{t('booking:labels.bk-rsa')}</h2>
           <input className="ml-72 mt-2 w-4 h-4" type="checkbox"  checked />
           <h4 className="font-semibold ml-1">{t('booking:labels.bk-include')}</h4>
         </div>
         </section>
    );
  }
       export default Include