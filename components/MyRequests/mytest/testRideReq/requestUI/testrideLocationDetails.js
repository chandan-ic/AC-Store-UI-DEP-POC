import { useTranslation } from "next-i18next";


export default function TestrideLocationDetails({ CustomerDetails, CustomerAddressDetails, CustomerAddress1 }) {
    const { t } = useTranslation(['myrequests', 'common', 'error'])
    return (
        <div className="pt-4">
            <div className="flex md:m-2">
                <h4 className="font-LibreFranklin py-0.5 text-xs md:text-base md:mx-2 whitespace-nowrap font-bold">{t('myrequests:labels.test-loc')}</h4>
                <span className="font-LibreFranklin  md:mx-2.5 -mt-1 mx-2 md:-mt-0  md:py-0 py-0.5">-</span>
                <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 md:mx-2 ">{CustomerDetails}</h4>
            </div>
            <div className="flex md:m-2">
                <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 md:mx-2 font-bold whitespace-nowrap">{t('myrequests:labels.test-addr')}</h4>
                <span className="font-LibreFranklin -mt-1 mx-2 md:-mt-0  md:mx-2">-</span>
                <div className="flex flex-col">
                    {/* <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 md:mx-2">{CustomerAddressDetails} </h4>*/}

                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 ">{CustomerAddress1}</h4>

                </div>
            </div>
        </div>
    )

}