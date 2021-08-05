import Link from 'next/link';
import AdvantageUI from './HomeUI/AdvantageUI';
export default function Advantage() {
    return (
        <AdvantageUI
            AdvantageHeader="Advantage Khivraj"
            AdvantageSubHeader="As part of the Khivraj family you get"
            AdvantageCaptionOne="To ride your bike on racing tracks"
            AdvantageCaptionTwo="Weekend rides with our biker community"
            AdvantageCaptionThree="Regular service discount and other offers"
        />
    )
}


//  <section className=" bg-tertiary pp-sec-height my-auto"
//        style={{
//         backgroundImage: `url("/images/Home-AdvKhivraj.jpg")`,
//         backgroundSize: 'cover'
//       }} >
//             <div className="  flex flex-col  h-full container sm:pt-10 pt-2 pb-10">
//             <div className=" bg-default my-auto">
//                 <div className="m-auto   flex flex-col w-full  h-full sm:flex-row ">
//                 <div className=" sm:w-1/2 w-full ">
//                         {/* <img className=" w-full " src="/images/adv.png" /> */}
//                 </div>
//                     <div className=" h-full flex flex-col w-full sm:w-1/2 sm:flex-row   ">
//                         <div className="bg-white p-10 sm:p-0 sm:bg-none bg-opacity-60 sm:bg-opacity-0  m-auto  sm:ml-16">
//                             <h1 className=" font-bold sm:mt-20 mt-5 sm:ml-20 ml-8 ">Advantage Khivraj</h1>
//                             <h4 className=" pt-2 mb-4 sm:ml-20 ml-8">As part of the Khivraj family you get</h4>
//                             <div className=" flex flex-row mt-3 sm:ml-20">
//                                 <div className=""> <img className=" w-9  " src="images/dot.png" /></div>
//                                 <h5 className=" mt-2 mb-3" >To ride your bike on racing tracks</h5>
//                             </div>
//                             <div className=" flex flex-row sm:ml-20">
//                                 <div><img className=" w-9 " src="images/dot.png" /></div>
//                                 <h5 className=" mt-2 mb-2">Weekend rides with our biker community</h5>
//                             </div>
//                             <div className=" flex flex-row sm:ml-20">
//                                 <div> <img className=" w-9" src="images/dot.png" /></div>
//                                 <h5 className=" mt-2 mb-3" >Regular service discount and other offers </h5>
//                             </div>
//                             <div className=" pl-5 pt-5 pb-5 sm:ml-20">
//                                <Link href="/aboutUs" > 
//                                <button className=" modelButton bg-default hover:text-white">Explore</button>
//                                </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </section>