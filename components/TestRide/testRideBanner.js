import React from "react";
import { useTranslation } from 'next-i18next';

export const TestRideBanner = () => {
  const { t } = useTranslation(['testRide']);
  return (
    <section className="sm:block hidden bg-test-ridepgBg bg-center p-2 h-56">
      <div className="container p-16 space-y-1" >
        <div className="w-full lg:w-3/5 text-black bg-white bg-opacity-10 p-12" >
          <h1 className="dpTRH1">
             { t('testRide:heading.main')}
          </h1>
          <div className="dpTRP lg:text-base md:text-sm px-4 md:flex-row">
            <p className="p-1">
              
              <span className="p-1 text-white"> {'> '}{ t('testRide:banner.yourDesiredBike')}</span>
              <span className="p-1 text-white"> {'> '}{ t('testRide:banner.yourDesiredTime')}</span>
              <span className="p-1 text-white">{'> '}{ t('testRide:banner.yourDesiredLocation')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


