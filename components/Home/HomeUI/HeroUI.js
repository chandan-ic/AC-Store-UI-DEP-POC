import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from "next-i18next";


export default function HeroSection(props) {
  const { t } = useTranslation(["home", "common"]);

  const { heroHeading, heroSubHeading,
    heroCaption, heroPara, heroPara1, acTitleOne, acTitleTwo,
    acTitleThree, acTitleShopImg,
    acTitleBuyImg, acTitleRideImg,
    heroImage, heroLink, linkImg
  } = props;

  return (
    <section className="ACEXP-Outer bg-top bg-cover bg-no-repeat" style={{ backgroundImage: ' url("/images/home-heroUI/home-heroImg.png")' }}>
      <div className="ACEXP-Inner pt-16 " >
        <div className="ACEXP-Main">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-center mb-6">
            <div className=" hero-text col-span-8 md:col-span-12">
              <h6 className=" text-hero-subtext text-lg text leading-relaxed font-semibold tracking-widest">{t("home:heroLeadingNote")}</h6>
              <h1 className=" text-hero-primary font-bold text-4xl md:text-5xl  max-w-xl uppercase text-white tracking-wider leading-none">{t("home:heroHeading")}</h1>
              <h5 className=" mt-2 text-hero-subtext2 text-2xl leading-normal font-semibold tracking-widest">{t("home:heroHeadingFootNote")}</h5>
              <p className=" w-80 sm:w-96 text-hero-subtext2 text-base tracking-wider leading-relaxed mt-8">{t("home:heroPara")}</p>
              <div className="get-app  flex space-x-5  justify-center md:justify-start">
             
             <div className=" flex lg:mt-10  mt-6 justify-center sm:justify-start text-center
                        sm:flex-row" >
                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full sm:mr-0 sm:ml-0 mr-6 ml-3 p-2  bg-theme hover:shadow-4xl
                            shawdow-2xl shadow-2xl ">
                                  <Link href="/search">  
                                    <a className=""> 
                                    <Image width={300} height={300} src="/images/cart.png" />
                                     <h5 className="pt-3 font-semibold tacking-wide text-left text-white">{t("home:Shop")}</h5>
                                    </a>
                                  </Link>                   
                                </div>
                                <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
                                <div className=" bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full  shadow-2xl
                          sm:mr-0 sm:ml-0 mr-5 ml-5 border-2 border-theme  p-2 bg-transparent ">
                                    <Image width={300} height={300} src="/images/buy.png" />
                                    < h5 className="pt-3 font-semibold tracking-wide text-white">{t("home:Buy")}</h5>
                                </div>
                                <span className="sm:w-16 w-7 sm:pt-0 align-middle pt-2"><img src="images/arrow.png" /></span>
                                <div className="bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-2xl 
sm:mr-0 sm:ml-0 mr-2 ml-5 p-2 bg-transparent border-2 border-theme ">
                                    <Image width={300} height={300} src="/images/ride.png" />
                                    <h5 className="pt-3 font-semibold tacking-wide text-white">{t("home:Ride")}</h5>
                                </div>
                            </div>
                        </div>
               {/*  */}
              </div>
            </div>
          </div>
        </div>
    </section>
    
  )
}

