import Link from 'next/link';
import { useTranslation } from "next-i18next";

export default function AdvantageUI(props) {
  const { t } = useTranslation(["home", "common"]);

  const { backgroundImg, AdvantageHeader, AdvantageSubHeader, AdvantageCaptionOne, AdvantageCaptionTwo, AdvantageCaptionThree } = props;
  return (

    <section className="bg-primary ACEXP-Outer bg-no-repeat bg-opacity-0 bg-center" style={{ backgroundImage: 'radial-gradient(rgba(250, 250,250, 0.2), rgba(255, 255, 255, 0.7)), url("/images/home-advantage/adv-khivraj-wheel.png")' }}>
      <div className="ACEXP-Inner flex md:justify-center">
        <div className="ACEXP-Main rounded-md ">
          <h1 class="mb-10 font-semibold uppercase tracking-wide text-primary">{t("home:AdvantageTitle")}</h1>
         
          <div className="w-full h-full flex md:justify-center">
            <div className=" w-full h-full">
              <div className="md:w-full md:h-full ">
                
                <div className="grid md:grid-cols-2 grid-cols-1 justify-items-start tracking-widest">
                  <div className="sm:justify-self-center">
                    <h3 className="border-b-2 border-gray-900 text-base font-semibold pb-1 text-blue-900">{t("home:AdvantageH1")}</h3>
                    <ul className="pt-2 list-disc pl-6 text-base  text-blue-900 font-medium">
                      <li><p>{t("home:AdvantageH1Point1")}</p></li>
                      <li><p>{t("home:AdvantageH1Point2")}</p></li>
                      <li><p>{t("home:AdvantageH1Point3")}</p></li>
                      <li><p>{t("home:AdvantageH1Point4")}</p></li>
                    </ul>
                  </div>
                  <div className="sm:justify-self-end mt-6">
                    <h3 className="border-b-2 border-gray-900 text-blue-900 text-base font-semibold pb-1">{t("home:AdvantageH2")}</h3>
                    <ul className="pt-2 list-disc pl-6 text-base text-blue-900 font-medium">
                      <li><p>{t("home:AdvantageH2Point1")} </p></li>
                      <li><p>{t("home:AdvantageH2Point2")} </p></li>
                      <li><p>{t("home:AdvantageH2Point3")} </p></li>
                    </ul>
                  </div>
                </div>
               
                <div className="mt-10 grid md:grid-cols-2 grid-cols-1  justify-items-start tracking-widest">
                  <div className="sm:justify-self-start">
                    <h3 className="border-b-2 border-gray-900 text-base text-base font-semibold pb-1 text-blue-900">{t("home:AdvantageH3")}</h3>
                    <ul className="pt-2 list-disc pl-6  text-base text-blue-900 font-medium">
                    <li><p>{t("home:AdvantageH3Point1")} </p></li>
                      <li><p>{t("home:AdvantageH3Point2")} </p></li>
                      <li><p>{t("home:AdvantageH3Point3")}</p></li>
                    </ul>
                  </div>
                  <div className="sm:justify-self-end mt-6">
                    <h3 className="border-b-2 border-gray-900 text-blue-900 text-base font-semibold pb-1">{t("home:AdvantageH4")}</h3>
                    <ul className="pt-2 list-disc pl-6 text-base text-blue-900 font-medium">
                    <li><p>{t("home:AdvantageH4Point1")} </p></li>
                      <li><p>{t("home:AdvantageH4Point2")}</p></li>
                    </ul>
                  </div>
                </div>


                {/* <div className="borderTest2 grid grid-cols-3 justify-items-between tracking-widest mt-10">
                  <div className="justify-self-start">
                    <h3 className="border-b-2 border-gray-900 text-base font-semibold pb-1 text-blue-900">KHIVRAJ GOING THE XTRA MILE</h3>
                    <ul className="pt-2 list-disc pl-6 text-base text-blue-900 font-medium">
                      <li><p>Rider Community</p></li>
                      <li><p>Weekend Rides</p></li>
                      <li><p>Race Track Rides</p></li>

                    </ul>
                  </div>
                  <div className="justify-self-end mt-20">
                    <h3 className="border-b-2 border-gray-900 text-base font-semibold pb-1 text-blue-900">EXCEPTIONAL BUYING EXPERIENCE</h3>

                    <ul className="pt-2 list-disc pl-6 text-base text-blue-900 font-medium">
                      <li><p>Experienced State Team</p></li>
                      <li><p>Extensive product knowledge</p></li>

                    </ul>
                  </div>
                </div> */}



                <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center tracking-widest mt-10">
                  <div className="justify-self-center md:pr-20">
                    <h3 className="border-b-2 border-gray-900 text-base font-semibold pb-1 text-blue-900">{t("home:AdvantageH5")}</h3>
                    <ul className="pt-2 list-disc pl-6 text-base text-blue-900 font-medium ">
                      <li><p>{t("home:AdvantageH5Point1")}</p></li>

                    </ul>
                  </div>
                  <div className="justify-self-end mt-24">
                    <h3 className="border-b-2 border-gray-900 text-base font-semibold pb-1 text-blue-900">{t("home:AdvantageH6")}</h3>
                    <ul className="pt-2 list-disc pl-6 text-base text-blue-900 font-medium ">
                    <li><p>{t("home:AdvantageH6Point1")}</p></li>
                      <li><p>{t("home:AdvantageH6Point2")}</p></li>

                    </ul>
                  </div>
                </div>



              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}