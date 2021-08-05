import React from 'react';
import { DropDownList } from '../Controls';
import { useTranslation } from 'next-i18next';

export const Financer = ({ financer, onhandleChange }) => {

    const { t } = useTranslation(['finance', 'common', 'error'])

    return (
        <div>
            <div className="flex flex-row items-center">
                <h4 className="trFET">{t('finance:header.fin-header')}</h4>
                <span className="text-xs text-gray-400">{t('finance:labels.opt-required')}</span>
            </div>
            <div className="w-full mt-4" >
                <DropDownList
                    defaultValue={t('finance:placeholder.sel-financer')}
                    value={financerCode}
                    list={financer}
                    idKey="FinancerCode"
                    valueKey="Finance"
                    onChange={onhandleChange} />
            </div>
        </div>
    )
}