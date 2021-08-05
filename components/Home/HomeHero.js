import HeroSection from "./HomeUI/HeroUI";
import { useTranslation } from "next-i18next";

export default function HomeHero(props) {
const {t}=useTranslation(['home','common'])
    return (
        <HeroSection
            heroHeading={t('home:h1')}
            heroHeading="EASY AND SAFE"

            heroSubHeading="AT KHIVRAJ WE HAVE MADE IT"
            heroCaption="TO BUY YOUR BIKE"
            heroPara="A company serving you since 60 years has now made it easy and safe to buy your favorite bike completely online"
            heroPara1="FIND OUT HOW >"
            acTitleOne="SHOP"
            acTitleTwo="BUY"
            acTitleThree="RIDE"
            acTitleShopImg="/images/cart.png"
            acTitleBuyImg="/images/home-heroUI/icon2a.png"
            acTitleRideImg="/images/home-heroUI/icon3.png"
            heroImage="/images/home-heroUI/home-heroImg.png"
            heroLink="Start Here"
            linkImg="/images/dropIcon.png"
        />
    )
}

//  <section className=" bg-primary h-full m-auto pp-sec-height pb-6 lg:pb-0">
//             <div className=" flex flex-col h-full container lg:pt-10 pt-2">
//                 <div className=" h-full lg:items-center flex flex-col">
//                     <div className="flex flex-col sm:flex-row w-full h-70vh">
//                         <div className="  flex flex-col w-full  lg:w-1/2 mt-4 md:pt-8 lg:mt-0" >
//                             <h1 className="headHero font-bold ">YOUR FAVOURITE BIKE</h1>
//                             <h3 className="subHeadHero">NOW ONLINE</h3>
//                             <h6 className="paraHero sm:mt-5 mt-2 text-xs md:text-lg">For your comfort and safety, now order your bike online
//                            and get it delivered to your home. </h6>
//                             <div className="flex lg:mt-20  mt-6 justify-center sm:justify-start text-center
//                         sm:flex-row" >
//                                 <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full sm:mr-0 sm:ml-0 mr-6 ml-3 p-2  bg-theme hover:shadow-4xl
//                             shawdow-2xl bg- shadow-2xl ">
//                                   <Link href="/search">
//                                     <a className="">
//                                     <Image width={300} height={300} src="/images/cart.png" />
//                                      <p className="pt-3 text-left">SHOP</p>
//                                     </a>
//                                   </Link>

//                                 </div>
//                                 <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
//                                 <div className=" w-12 h-12 lg:w-16 lg:h-16 rounded-full  shadow-2xl
//                           sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
//                                     <Image width={300} height={300} src="/images/buy.png" />< p className="pt-3">BUY</p>
//                                 </div>
//                                 <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
//                                 <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-2xl
// sm:mr-0 sm:ml-0 mr-2 ml-5 p-2 bg-transparent border-2 border-theme ">
//                                     <Image width={300} height={300} src="/images/ride.png" /><p className="pt-3">RIDE</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="m-auto h-50vh flex  justify-center  items-center w-full lg:w-1/2 relative">
//                             <Image objectFit='contain' layout="fill" src="/images/heroHomeImg.png" alt="HeroImage" />

//                         </div>
//                     </div>
//                     <div className="w-full  z-10">
//                         <h4 className="md:pt-4">Start Here</h4>
//                         <Link href="#utility"><a><img className=" z-0 absolute w-10 sm:w-12 ml-4 pt-5 animate-bounce "
//                             src="images/dropIcon.png" /></a>
//                         </Link>
//                     </div>
//                 </div>

//             </div>
//         </section >
