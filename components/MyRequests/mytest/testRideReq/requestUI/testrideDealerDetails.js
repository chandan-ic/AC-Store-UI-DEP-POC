import { useTranslation } from "next-i18next";
export default function TestRideDealerDetails({ DealerName1, DealerAddress1, DealerAddress2, DealerAddress3 }) {
    const { t } = useTranslation(['myrequests', 'common', 'error'])
    return (
        <div>
            <div className="flex md:m-2">
                <h4 className="font-LibreFranklin text-xs md:text-base  md:mx-2 font-bold">{t('myrequests:labels.dealer-name')}</h4>
                <span className="font-LibreFranklin -mt-1 mx-2 md:-mt-0 md:mx-0  md:ml-10">-</span>
                <h4 className="font-LibreFranklin text-xs md:text-base md:mx-6">{DealerName1}</h4>
            </div>
            <div className="flex md:m-2">
                <h4 className="font-LibreFranklin text-xs md:text-base md:mx-2 font-bold">{t('myrequests:labels.dealer-addr')}</h4>
                <span className="font-LibreFranklin -mt-1 mx-2 md:-mt-0  md:mx-5">-</span>
                <div className="flex flex-col">
                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 mx-0 ">{DealerAddress1}</h4>
                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 mx-0">{DealerAddress2}</h4>
                    <h4 className="font-LibreFranklin text-xs md:text-base py-0.5 mx-0">{DealerAddress3}</h4>
                </div>
            </div>
        </div>
    )

}