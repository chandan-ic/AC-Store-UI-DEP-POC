import React from 'react';
import { DropDownList } from '../Controls';
import { useTranslation } from 'next-i18next';
import { getTenure } from 'utils/helper/storeHelper';
export const Tenure = ({ tenure, onhandleChange }) => {

    const { t } = useTranslation(['finance', 'common', 'error'])
    const TenureList = getTenure();
    return (
        <div className="w-full md:w-80 lg:w-2/5 sm:mt-7 mt-8">
            <div className="flex flex-row items-center">
                <h4 className="trFET">{t('finance:header.tenure-header')}</h4>
                <span className="text-xs text-gray-400">{t('finance:labels.opt-required')}</span>
            </div>
            <div className="" >
                <DropDownList
                    defaultValue={t('finance:placeholder.sel-tenure')}
                    value={tenure}
                    list={TenureList}
                    idKey="TenureCode"
                    valueKey="Tenure"
                    onChange={onhandleChange} />
            </div>
        </div>
    )
}

