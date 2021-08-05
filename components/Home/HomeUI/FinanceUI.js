import Image from 'next/image';
import Link from "next/link";
import { useTranslation } from "next-i18next";


export default function FinanceUI(props) {
    const { t } = useTranslation(["home", "common"]);
    const { FinanceHeading, FinanceSubHeading, financeCaptionOne,
        financeCaptionTwo, financeCaptionThree, handleFinance } = props;
    const CallFinance = () => {
        handleFinance()
    }
    return (
        <section className="ACEXP-Outer">
            <div className="ACEXP-Inner">
                <div className="ACEXP-Main  md:flex">
                <div className=" md:w-6/12 min-h-full bg-finance rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl rounded-bl-none">
                    <div className="min-h-full p-14">
                        <h1 class="mb-5 font-semibold uppercase tracking-wide text-primary">{t("home:FinanceHeading")}</h1>
                        <ul className="pt-2  space-y-2 text-xl text-primary font-normal">
                            <li className="pt-2 flex text-xl">
                                <span className="flex items-center justify-content px-2 p-2 w-3 h-3 bg-gray-50 mr-2 border-2 border-yellow-500 rounded-full">
                                    {/* <img className="w-14 h-14" src="/images/home-finance/tick.svg" /> */}
                                </span><p className="text-primary">{t("home:FinancePoint1")}</p></li>
                            <li className="pt-2 flex text-xl">
                                <span className="flex items-center justify-content px-2  p-2 w-3 h-3  bg-gray-50 mr-2 border-2 border-yellow-500 rounded-full">
                                    {/* <img className="w-14 h-14" src="/images/home-finance/tick.svg" /> */}
                                </span><p className="text-primary">{t("home:FinancePoint2")}</p></li> <li className="pt-2 flex ">
                                <span className="flex items-center justify-content px-2  p-2 w-3 h-3  bg-gray-50 mr-2 border-2 border-yellow-500 rounded-full">
                                    {/* <img className="w-14 h-14" src="/images/home-finance/tick.svg" /> */}
                                </span><p className="text-primary">{t("home:FinancePoint3")}</p></li> <li className="pt-2 flex">
                                <span className="flex items-center justify-content px-2  p-2 w-3 h-3  bg-gray-50 mr-2 border-2 border-yellow-500 rounded-full">
                                    {/* <img className="w-14 h-14" src="/images/home-finance/tick.svg" /> */}
                                </span><p className="text-primary">{t("home:FinancePoint4")}</p></li> <li className="pt-2 flex ">
                                <span className="flex items-center justify-content px-2  p-2 w-3 h-3  bg-gray-50 mr-2 border-2 border-yellow-500 rounded-full">
                                    {/* <img className="w-14 h-14" src="/images/home-finance/tick.svg" /> */}
                                </span><p className="text-primary">{t("home:FinancePoint5")}</p></li>
                            {/* <li className="pt-2 flex text-xl">
                            <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span>Get Vehicle finance at the comfort of your home</li>
                            <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span>Choose from a list of finance partners </li>
                            <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span><span></span>Upto 90%  of  onroad price</li>
                            <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span><span></span>Easy EMI Options</li>
                            <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span><span></span>Tenure upto 5 years</li> */}
                        </ul>
                        <div className=" w-full flex flex-col">
                            <div className="justify-self-center mt-10 bg-white w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-2xl 
sm:mr-0 sm:ml-0 mr-2 ml-5 p-3 bg-transparent border-2 border-yellow-500 ">
                              <Link href="/financeCheck">
                                  <a> 

                                <Image width={100} height={100} src="/images/home-finance/checkEligibility.png" />
                                  </a>
                              </Link>
                            </div>
                            <Link href="/financeCheck">
                                <a>
                                    
                            <h5 className="w-full pt-3 text-primary font-semibold tracking-wide">{t("home:FinanceCheckLabel")}</h5>
                                </a>
                                </Link>
                        </div>


                        {/* <div className=" flex flex-col place-items-start pt-10">
                            <div className="md:w-2/4">
                                <div className="flex justify-between space-x-8">
                                    <div className="flex flex-col">
                                        <div className="flex flex-col">
                                            <img className="w-4 ml-6 self-center" src="/images/home-finance/rupeeicon.png" />
                                            <img className="w-12 self-center" src="/images/home-finance/checkEligibility.png" />
                                        </div>
                                        <p></p>
                                    </div>

                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>
                <div className=" min-h-full md:w-6/12 relative">
                    <img class="min-h-full w-full object-cover rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl rounded-br-xl" src="/images/home-finance/financeImg1.jpg" alt="Banner Desktop" />
                </div>
            </div>
            </div>

        </section >
        // <section className="AC-Container">
        //     <div class="AC-Content p-10 h-full">
        //         <div class='md:flex h-full'>
        //             <div class="md:w-6/12 text-white bg-yellow-600 p-8 rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
        //                 <div>
        //                     <h1 class="text-4xl mb-5 font-bold uppercase text-blue-900">Finance</h1>
        //                     <ul className="pt-2  text-xl text-blue-900 font-normal">
        //                         <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span>Get Vehicle finance at the comfort of your home</li>
        //                         <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span>Choose from a list of finance partners </li>
        //                         <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span><span></span>Upto 90%  of  onroad price</li>
        //                         <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span><span></span>Easy EMI Options</li>
        //                         <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg" /></span><span></span>Tenure upto 5 years</li>
        //                     </ul>
        //                     <div className="flex flex-col place-items-center pt-20">
        //                         <div className="md:w-2/4">
        //                             <div className="flex justify-between space-x-8">
        //                                 <div className="w-14 flex flex-col">

        //                                     <div className="self-end">
        //                                         <img className="w-6 " src="/images/home-finance/rupeeicon.png" />
        //                                     </div>
        //                                     <div className="-mt-4">
        //                                         <img src="/images/home-finance/checkEligibility.png" />
        //                                     </div>
        //                                 </div>
        //                                 <div className="w-16">
        //                                     <img src="/images/home-finance/calculatoricon.png" />

        //                                 </div>

        //                             </div>
        //                             <div className="flex justify-between ">
        //                                 <p className="-ml-6 md:-ml-8 pt-2 text-base font-bold text-blue-900">Check Eligibility</p>
        //                                 <p className="pl-16 justify-self-end pt-2 text-base font-bold text-blue-900">Emi Calculator</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                                             </div>
        //             </div>
        //             <div class="md:w-6/12 relative">
        //                 <div class="w-full h-full opacity-60 absolute rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"></div>
        //                 <img class="h-full w-full object-cover rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg" src="/images/home-finance/financeImg1.jpg" alt="Banner Desktop" />
        //             </div>
        //         </div>
        //     </div>
        // </section>

        //     <section className="container-fluid md:my-20 ">
        //   <div className="flex justify-center ">
        //     <div className="md:w-11/12 ">
        //       <div className="flex flex-col md:flex-row ">
        //           <div className="md:w-1/2 h-auto bg-gray-200 flex-col rounded-l-lg">
        //           <div className="flex justify-center ">
        //               <div className="w-4/5 md:w-3/4 pt-10 pl-8">
        //             <h1 className="font-bold text-black  pt-10 text-blue-900 mb-10 tracking-widest">FINANCE</h1>
        //             <ul className="pt-2  text-xl text-blue-900 font-normal">
        //                 <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg"/></span>Get Vehicle finance at the comfort of your home</li>
        //                 <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg"/></span>Choose from a list of finance partners </li>
        //                 <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg"/></span><span></span>Upto 90%  of  onroad price</li>
        //                 <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg"/></span><span></span>Easy EMI Options</li>
        //                 <li className="pt-2 flex"><span><img className="w-5" src="/images/home-finance/tick.svg"/></span><span></span>Tenure upto 5 years</li>
        //                 </ul>
        //              <div className="flex flex-col place-items-center pt-20">
        //                 <div className="md:w-2/4">
        //                 <div className="flex justify-between space-x-8">
        //                     <div className="w-14 flex flex-col">

        //                         <div className="self-end">
        //                          <img className="w-6 " src="/images/home-finance/rupeeicon.png" />
        //                          </div>
        //                     <div className="-mt-4">
        //                     <img src="/images/home-finance/checkEligibility.png" />
        //                     </div>
        //                     </div>
        //                     <div className="w-16">
        //                     <img src="/images/home-finance/calculatoricon.png" />

        //                     </div>

        //                     </div>
        //                     <div className="flex justify-between ">
        //                     <p className="-ml-6 md:-ml-8 pt-2 text-base font-bold text-blue-900">Check Eligibility</p>
        //                     <p className="pl-16 justify-self-end pt-2 text-base font-bold text-blue-900">Emi Calculator</p>
        //                     </div>
        //                 </div>
        //                 </div>
        //              </div>
        //                 </div>
        //           </div>

        //           <div className="md:w-1/2 h-70vh ">
        //           <div
        //         className="relative w-full h-full bg-cover rounded-md"
        //         style={{backgroundImage:'url("/images/home-finance/financeImg1.jpg")'}}
        //       >
        //        <div className="flex justify-end" >
        //            <div className="w-2/5 pt-10">
        //        <div className="text-3xl font-bold  pt-10  text-gray-400  text-opacity-25">2.05 M </div>
        //        <div className="underline text-3xl font-bold  pt-10  text-gray-400  text-opacity-25"> HAPPY CUSTOMERS</div>
        //        </div>
        //        </div>
        //        </div>
        //           </div>
        //           </div>
        //           </div>
        //           </div>
        //           </section>











        // <section className=" bg-tertiary h-full m-auto pp-sec-height">
        //     <div className=" flex flex-col  h-full container sm:pt-10 pt-2 sm:pb-24">
        //         <div className=" pt-10">
        //             <h1 className=" font-bold headHero">{FinanceHeading}</h1>
        //             <h5 className=" pt-1">{FinanceSubHeading}</h5>
        //         </div>
        //         <div className="flex flex-col sm:flex-row">
        //             <div className=" sm:pl-10 sm:w-1/2 m-auto flex justify-center items-center">
        //                 <Image src="/images/24-hr.png" width={200} height={200} />
        //                 <div className=" pt-10 m-auto">
        //                     <div className=" flex flex-row items-center">
        //                         <img className=" w-10 h-10 mt-3 " src="/images/dot.png" />
        //                         <h3 className=" mt-4 " >{financeCaptionOne}</h3>
        //                     </div>
        //                     <div className=" flex flex-row">
        //                         <img className=" w-10 h-10 mt-2 " src="/images/dot.png" />
        //                         <h3 className=" mt-4 "  >{financeCaptionTwo}</h3>
        //                     </div>
        //                     <div className=" flex flex-row ">
        //                         <img className=" w-10 h-10 mt-2 " src="/images/dot.png" />
        //                         <h3 className=" mt-3 " > {financeCaptionThree}</h3>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="sm:w-1/2 m-auto flex flex-col flex-col-reverse sm:justify-evenly sm:flex-row pb-16">
        //                 <div className=" pt-5  sm:pt-20 justify-center" >
        //                     <img className=" m-auto w-24 pt-12" src="images/check.png" />
        //                     <div className=" flex flex-row justify-center pt-2 sm:pb-5">

        //                         <button onClick={() => CallFinance()} className="modelButton border-yellow-300 hover:bg-yellow-300 hover:text-white">Check Eligibility</button>

        //                     </div>
        //                 </div>


        //             </div>

        //         </div>
        //     </div>

        // </section>
    )

}