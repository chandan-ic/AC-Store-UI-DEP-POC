export default function OrderReview() {

    return (
        <section className="h-screen">
            <div className="container">
                <div>
                    <h1 className="font-bold">Order review</h1>
                </div>
                <div className="flex flex-col border border-gray-200">
                    <div className="flex flex-col ">
                        <div className="flex flex-row">
                            <h3 className="">Customer Name :</h3>
                            <h3>Roshini</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3>Email :</h3><h3>Roshini@






















































































































inarvo.com</h3>
                        </div>
                        <div className="">
                            <h3>Mobile Number :</h3><h3>+91-9090800705</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="">Selected Bike:</h3>
                            <h3>Dominar 250</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="">Finance:</h3>
                            <h3>Cash</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="">Insurance:</h3>
                            <h3>ICIC Lombard</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="">RTO:</h3>
                            <h3>Permanent</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="">Booking Amount:</h3>
                            <h3>Rs. x,xxx,xx</h3>
                        </div>
                    </div>
                    <div className="">
                        <button className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Edit</button>
                    </div>
                </div>
                <div className="border border-gray-200 h-56">
                    <div className="flex flex-col">
                        <h4 className="font-semibold">Pay via</h4>
                        <div className="border-2 border-gray-200 h-12 flex flex-row justify-between w-96  mt-2">
                            <div className="flex flex-row items-center">  <input checked type="radio" className="form-radio mt-2 border-2 border-gray-200 text-yellow-400"
                                name="hdfc" /><h5 className="mt-2 ml-1">HDFC</h5></div>
                            <img className="" src="/images/hdfcPay.png" />
                        </div>
                        <div className="border-2 border-gray-200 h-12 flex flex-row justify-between w-96 mt-8">
                            <div className="flex flex-row items-center"> <input type="radio" className="form-radio mt-2 border-2 border-gray-200 text-yellow-400"
                                name="razorpay" />
                                <h5 className="mt-2 ml-1">Razorpay</h5></div>
                            <img className="" src="/images/razorPay.png" />
                        </div>
                    </div>
                    <div className="">
                        <button className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">Make Payment</button>
                    </div>
                </div>
            </div>
        </section>

    )
}



//selectedbikeImage
//     const thankYou = () => (
//         <div>
//             <div>
//                 <h1 className="font-mediumbold text-3xl">Hello Pallavi</h1>
//             </div>
//             <div className="flex flex-col  mt-12">
//                 <h1 className="font-mediumbold pl-24 text-4xl">Thank You</h1>
//                 <h3  className="font-normal pl-24 text-2xl">For your Booking/Payment
//                 <br />Booking Reference number: XXXXXXXXXX
//                    </h3>
//                    <img className="h-40 mx-auto pt-12" src="/images/thumbs.png"></img>
//              <div className="inline-flex mx-auto pt-12">
//              <img className="h-24 p-4 bg-gray-200 rounded-full border-2 border-black" src="/images/cart.png " />
//                     <img className="h-36 pb-12 p-2" src="/images/arro.png" />
//                     <img className=" h-24  p-4 bg-gray-200 rounded-full border-2 border-yellow-400" src="/images/headicon.png" />
//                     <img className="h-36 pb-12 p-2" src="/images/arro.png" />
//                     <img className="h-24  p-4 bg-gray-200 rounded-full border-2 border-black" src="/images/bikeIcon.png " />
//              </div>


//             </div>
//             </div>
// )

//     return (
//         <section className="pt-24">
//             <div className="container h-96">
//                 <div className="w-3/5 flex sm:flex-col flex-row" >{thankYou()}</div>
//             </div>
//         </section>
//     );

// }




//old
{/*export default function SelectThanks() {
    //selectedbikeImage
    const thankYou = () => (
    <div className="border-2 border-gray-200 ml-24">
            <div className="mb-96">
            <h1 className="ml-20 mt-6 font-normal text-4xl text-left">Hello Regina</h1>
               <div className="sm:w-full">
                    <h1 className="sm:font-normal mt-6 text-black text-6xl pt-10 ml-60"> Thank You</h1>
                    <div> <h1 className="mt-2  font-normal ml-6 text-3xl">For your Booking/Payment</h1></div>
                    <h1 className="mt-3 font-normal ml-60 text-3xl">Booking Reference number: XXXXXXXXXX </h1>
                   </div>
                <div className="mt-12 ml-96 pl-6 pt-24">
                    <img className="h-40 " src="/images/thumbs.png"></img>
                </div>
        <div className="inline-flex ml-72 mt-24">
                    <img className="h-24 p-4 bg-gray-200 rounded-full border-2 border-black" src="/images/cart.png " />
                    <img className="h-36 pb-12 p-2" src="/images/arro.png" />
                    <img className=" h-24  p-4 bg-gray-200 rounded-full border-2 border-yellow-400" src="/images/headicon.png" />
                    <img className="h-36 pb-12 p-2" src="/images/arro.png" />
                    <img className="h-24  p-4 bg-gray-200 rounded-full border-2 border-black" src="/images/bikeIcon.png " />
                </div>
                
                <div className="flex-inline">
                    
                </div>
            
                </div> 
            
        </div>
    //Details
     )
  return (
        <section className="">
            <div className="container h-48">
                
               
                        <div className="w-full flex sm:flex-col flex-row" >{thankYou()}</div>
                    </div> 
                   
            


            
        </section>
    )

}*/}