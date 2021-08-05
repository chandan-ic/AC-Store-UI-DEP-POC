import Router from 'next/router'
import FinanceUI from './HomeUI/FinanceUI'
export default function Finance(props) {

    const CallFinance = () => {
        Router.push("/financeCheck")
    }
    return (
        <FinanceUI
            FinanceHeading="Finance at your doorstep"
            FinanceSubHeading="Approval within a day"
            financeCaptionOne="Easy EMI Options"
            financeCaptionTwo="Simple documentation"
            financeCaptionThree="Document Pickup from your home"
            handleFinance={() => CallFinance()}
        />
    )
}


    //  <section className=" bg-tertiary h-full m-auto pp-sec-height">
    //         <div className=" flex flex-col  h-full container sm:pt-10 pt-2 sm:pb-24">
    //             <div className=" pt-10">
    //                 <h1 className=" font-bold headHero">Finance at your doorstep</h1>
    //                 <h5 className=" pt-1">Approval within a day</h5>
    //             </div>
    //             <div className="flex flex-col sm:flex-row">
    //                 <div className=" sm:pl-10 sm:w-1/2 m-auto flex justify-center items-center">
    //                     <Image src="/images/24-hr.png" width={200} height={200} />
    //                     <div className=" pt-10 m-auto">
    //                         <div className=" flex flex-row items-center">
    //                             <img className=" w-10 h-10 mt-3 " src="/images/dot.png" />
    //                             <h3 className=" mt-4 " >Easy EMI Options</h3>
    //                         </div>
    //                         <div className=" flex flex-row">
    //                             <img className=" w-10 h-10 mt-2 " src="/images/dot.png" />
    //                             <h3 className=" mt-4 "  > Simple documentation</h3>
    //                         </div>
    //                         <div className=" flex flex-row ">
    //                             <img className=" w-10 h-10 mt-2 " src="/images/dot.png" />
    //                             <h3 className=" mt-3 " > Document Pickup from your home</h3>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="sm:w-1/2 m-auto flex flex-col flex-col-reverse sm:justify-evenly sm:flex-row pb-16">
    //                     <div className=" pt-5  sm:pt-20 justify-center" >
    //                         <img className=" m-auto w-24 pt-12" src="images/check.png" />
    //                         <div className=" flex flex-row justify-center pt-2 sm:pb-5">

    //                             <button onClick={() => CallFinance()} className="modelButton border-yellow-300 hover:bg-yellow-300 hover:text-white">Check Eligibility</button>

    //                         </div>
    //                     </div>


    //                 </div>

    //             </div>
    //         </div>

    //     </section>