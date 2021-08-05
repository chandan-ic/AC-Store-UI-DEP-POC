import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Layout from '../components/layout'
import HomeHero from '../components/Home/HomeHero';
import HomeUtility from '../components/Home/HomeUtility';
import CompareBikes from '../components/Home/CompareBikes';
import TestRide from '../components/Home/TestRide';
import Finance from '../components/Home/Finance';
import Accessories from '../components/Home/Accessories';
import Advantage from '../components/Home/Advantage';
import AutoFooter from '../components/Navigation/AutoFooter';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { bikeActions  } from 'components/Bike/store/bikeSlice';


const Home = () => {
   const router = useRouter()
   const { t } = useTranslation(['home', 'common','testRide'])
   const dispatch = useDispatch();
   
   useEffect(() => { 
      dispatch(bikeActions.setIsProductPage(false))
    }, [])


   return (
      <div className="flex w-full">

         <div className="w-full">
            <div className="flex flex-col w-full mt-16">
               <div className="relative">
                  <HomeHero />
               </div>
               <div className="relative  ">
                  <HomeUtility />
               </div>  

              
               <div className="relative">
                  <TestRide />
               </div> 
               <div className="relative  ">
                  <Finance />
               </div>
            
               <div className=" relative  ">
                  <Advantage />
               </div>
               
              {/* <div className="relative  ">
                  < AutoFooter />
               </div>
                */}
            </div>
         </div>
      </div>
   )
}

export const getStaticProps = async ({ locale }) => ({
   props: {
      ...await serverSideTranslations(locale, ['common', 'home', 'error', 'testRide']),
   }
})

export default Home;


