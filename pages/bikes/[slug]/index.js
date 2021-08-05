import React,{useEffect} from 'react';
import BikeActions from '../../../components/Bike/Bikeactions';
import BikeColorSelector from '../../../components/Bike/BikeColors';
import BikeFeatures1 from '../../../components/Bike/BikeFeatures1';
import BikeHero from '../../../components/Bike/BikeHero';
import BikeGallery from '../../../components/Bike/BikeGallery';
import SimilarBikes from '../../../components/Bike/SimilarBikes';
import TechSpecs from '../../../components/Bike/TechSpecs';
import WhyIBought from '../../../components/Bike/WhyIBought';
import WhyKhivraj from '../../../components/Bike/WhyKhivraj';
import { useSelector, useDispatch } from 'react-redux';
import { setCloseRMenu } from "../../../store/user/actions";
import Layout from '../../../components/Layouts/Main'
import { server, localServer } from '../../../config'
import { vehicles } from '../../../bike';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { setOnroadShow } from '../../../store/financeCheck/actions';
import ExShowRoomPrice from 'components/Bike/ExShowRoomPrice';
import { bikeActions  } from 'components/Bike/store/bikeSlice';

const bikes = ({ vehicle }) => {

  const dispatch = useDispatch();
  const selectedVehicle = vehicle[0];
  useEffect(() => { 
    dispatch(setOnroadShow(false)) 
    dispatch(bikeActions.setSelectedProductBrand(selectedVehicle.Brand))
    dispatch(bikeActions.setIsProductPage(true))
    dispatch(bikeActions.setSelectedProductBikeBrand(selectedVehicle.BikeBrand))
  }, [vehicle])


  return (
    <>
    <div className="flex justify-end mr-4">
    <ExShowRoomPrice colorTheme={selectedVehicle.ExPrice_HeroTxt_Theme} 
                              exshowroomprice={selectedVehicle.exshowroomprice} />
    </div>
      <div className="flex w-full acSecH">
    
        <div id="Start" className="flex w-full">
          <div className=" mt-24  w-full">
            {selectedVehicle.Hero_section_enabled && 
              <BikeHero vehicle={selectedVehicle} />
            }
           {selectedVehicle.Action_section_enabled && 
              <BikeActions vehicle={selectedVehicle} />
           }
           {selectedVehicle.Color_section_enabled && 
              <BikeColorSelector vehicle={selectedVehicle} />
            }
            
           {selectedVehicle.Feature_section_enabled && 
              <BikeFeatures1 vehicle={selectedVehicle} />
            }

            {selectedVehicle.Gallery_section_enabled &&
              <BikeGallery vehicle={selectedVehicle} />
            }
            
           
             {selectedVehicle.Why_khivraj_section_enabled && 
              <WhyKhivraj vehicle={selectedVehicle} />
             } 
             {selectedVehicle.Why_I_bought_section_enabled && 
              <WhyIBought vehicle={selectedVehicle} />
            } 
             {selectedVehicle.Tech_specs_section_enabled &&
              <TechSpecs vehicle={selectedVehicle} />
            }  
             {selectedVehicle.Similar_section_enabled && 
              <SimilarBikes vehicle={selectedVehicle} />
             }
             
          
        

          </div>
        </div>
      </div>
    </>
  )
}


export const getStaticProps = async ({ params,locale }) => {
  const vehicle = vehicles.filter(bike => bike.slug === params.slug)
  return {
    props: {
      vehicle,
      ...await serverSideTranslations(locale, ['common', 'bike', 'error'])
    }
  }
}

export const getStaticPaths = async () => {
  const paths = vehicles.map(bike => ({
    params: { slug: bike.slug },
  }))
  // console.log("paths=", paths)
  return { paths, fallback: false }
}



export default bikes;


