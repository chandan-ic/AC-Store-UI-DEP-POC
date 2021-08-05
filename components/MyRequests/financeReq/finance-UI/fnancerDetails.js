import { useTranslation } from "next-i18next";

export default function FinancerDetails() {

    const { t } = useTranslation(['myrequests', 'common', 'error'])
    return (
        <div>
            <div className="flex md:m-2 ">
                <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 md:mx-2 font-bold">
                    {t('myrequests:labels.financer-name')}</h4>
                <span className="font-LibreFranklin -mt-1 mx-2 md:-mt-0 md:mx-0  md:ml-7">-</span>
                <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 md:mx-6">Bajaj Finserv Ltd.</h4>
            </div>
            <div className="flex md:m-2">
                <h4 className="font-LibreFranklin py-0.5 text-xs md:text-base md:mx-2 font-bold">
                    {t('myrequests:labels.financer-details')}</h4>
                <span className="font-LibreFranklin-mt-1 mx-2 md:-mt-0  md:mx-5">-</span>
                <div className="flex flex-col">
                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 mx-0 ">Financer Details</h4>
                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 mx-0">No 3223,Museum Road</h4>
                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 mx-0">Bangalore-560001</h4>
                </div>
            </div>
        </div>
    )

}