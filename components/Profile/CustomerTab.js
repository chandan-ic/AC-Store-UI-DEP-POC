import { useTranslation } from 'next-i18next';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileDataActions } from './store/profileData-slice';


export const CustomerTab = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const { t } = useTranslation(['profile', 'common']);

    const { activeTab } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const handleClick = (id) =>{
      dispatch(profileDataActions.setActiveTab(id));
    }
    return (
        <div className = "flex flex-col bg-gray-100 md:h-screen pt-10 pl-10 rounded-t-lg ">
            <div className="flex justify-between">
             <div className="font-bold text-gray-700 px-4">YOUR ACCOUNT</div>
            <button
                  className="text-blue-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars">icon</i>
                </button>
                </div>
                <div
                className={
                  "md:flex flex-grow items-center md:items-start" +
                  (menuOpen ? " flex" : " hidden")
                }
               
              >
          
            <div className="flex flex-col  pt-8  w-full ">
            <button value = "1" className = {`py-2 px-4 my-2 focus:outline-none  ${activeTab === 1 ?'customer_active_tab':''} `} onClick={()=>{ handleClick(1)}}>{ t('profile:tab.profile')}</button>
            <button value = "2" className = {`py-2 px-4 my-2 focus:outline-none  ${activeTab === 2 ?'customer_active_tab':''} `} onClick={()=>{ handleClick(2)}}>{ t('profile:tab.address')}</button>
            <button value = "3" className = {`py-2 px-4 my-2 focus:outline-none  ${activeTab === 3 ?'customer_active_tab':''} `} onClick={()=>{ handleClick(3)}}>{ t('profile:tab.contact')}</button>
            <button value = "4" className = {`py-2 px-4 my-2 focus:outline-none  ${activeTab === 4 ?'customer_active_tab':''} `} onClick={()=>{ handleClick(4)}}>{ t('profile:tab.documents')}</button>
            <button value = "5" className = {`py-2 px-4 my-2 focus:outline-none  ${activeTab === 5 ?'customer_active_tab':''} `} onClick={()=>{ handleClick(5)}}>{ t('profile:tab.otherInfo')}</button>
  
           </div>
        </div>
        </div>
    )
}