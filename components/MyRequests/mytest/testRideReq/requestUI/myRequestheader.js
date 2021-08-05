import { useTranslation } from 'next-i18next';

export default function MyRequestsHeader({ title, subTitle, titleTwo, subTitleTwo }) {

    const { t } = useTranslation(['myrequests', 'common', 'error'])
    return (
        <div >
            <div className="md:p-2 border-gray-200 border-2 w-full md:flex flex-row md:justify-between bg-gray-50 md:space-x-20">
                <div>
                    <h4 className="font-LibreFranklin my-1 md:my-0 text-center font-bold uppercase md:text-base  whitespace-nowrap md:py-2">{t('myrequests:headers.request-header')}</h4>
                </div>
                <div className="flex flex-col hidden sm:block">
                    <h2 className="font-LibreFranklin md:text-sm font-bold text-xs">{t('myrequests:headers.request-no')}:{title}</h2>
                    <h3 className="font-LibreFranklin text-xs md:text-sm font-bold text-center">{t('myrequests:headers.request-date')}:{subTitle}</h3>
                </div>
                <div className="flex flex-col hidden sm:block">
                    <h2 className="font-LibreFranklin text-xs md:text-sm font-bold">{titleTwo} to go</h2>
                    <h3 className="font-LibreFranklin md:text-sm text-xs text-center">{subTitleTwo} </h3>
                </div>
                <div className="sm:hidden block flex flex-row md:flex-none md:justify-start justify-between  md:my-0 my-2 md:border-t-0 border-transparent border-t-2 border-gray-100 p-1 ">
                    <div className="flex flex-col ">
                        <h2 className="font-LibreFranklin md:text-sm text-xs">{t('myrequests:headers.request-no')}:{title}</h2>
                        <h3 className="font-LibreFranklin text-xs md:text-sm text-center">{t('myrequests:headers.request-date')}{subTitle}</h3>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="font-LibreFranklin text-xs md:text-sm font-bold">{titleTwo} to go</h2>
                        <h3 className="font-LibreFranklin md:text-sm text-xs text-center">{subTitleTwo}</h3>
                    </div>
                </div>
            </div>
        </div>
    )

}