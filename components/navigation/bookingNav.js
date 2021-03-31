import { useSelector, useDispatch } from 'react-redux';
export default function BookingNav() {

    //const currentStep = "2";
    const currentStep = useSelector((state) => state.booking.currentStep)

    console.log("currentStep=", currentStep)
    return (
        <div className="container mt-20 ">
            <div className="flex items-center pl-14 pr-14">


                <div className="flex items-center text-gray-600 relative">
                    <div className="absolute top-0 -mt-8 -ml-14 text-center  w-32 text-xl font-medium uppercase text-gray-600">Bike</div>
                    <div className={(currentStep === "1" ? " startedCircle " : " completedCircle ") +
 "rounded-full transition duration-500 ease-in-out h-2 w-2 bg-gray-300 p-1  border-2 border-gray-300"}>
                    </div>
                    <div className="absolute top-0 -ml-14 text-center mt-8 w-32 text-xs font-medium uppercase text-gray-600">Dominar</div>
                </div>
                <div className={(currentStep === "1" ? " notStartedBar " : " completedBar ") + 
"flex-auto border-t-4 transition duration-500 ease-in-out border-gray-300"}></div>


                <div className="flex items-center text-white relative">
                    <div className="absolute top-0 -mt-8 -ml-14 text-center  w-32 text-xl font-medium uppercase text-gray-600">Color</div>
                    <div className={(currentStep === "2" ? " startedCircle " : currentStep < "2" ? " notStartedCircle " : " completedCircle ") +
 "rounded-full transition duration-500 ease-in-out  p-1 border-2 border-gray-300 h-2 w-2 bg-gray-300"}>
                    </div>
                    <div className="absolute top-0 -ml-14 text-center mt-8 w-32 text-xs font-medium uppercase text-gray-600">Color</div>
                </div>
                <div className={(currentStep <= "2" ? " notStartedBar " : " completedBar ") + "flex-auto border-t-4 transition duration-500 ease-in-out border-gray-300"}></div>



                <div className="flex items-center text-gray-500 relative">
                    <div className="absolute top-0 -mt-8 -ml-14 text-center  w-32 text-xl font-medium uppercase text-gray-600">Location</div>
                    <div className={(currentStep === "3" ? " startedCircle " : currentStep <= "3" ? " notStartedCircle " : " completedCircle ") +
 "rounded-full transition duration-500 ease-in-out  p-1 border-2 border-gray-300 h-2 w-2 bg-gray-300"}>
                    </div>
                    <div className="absolute top-0 -ml-14 text-center mt-8 w-32 text-xs font-medium uppercase text-gray-500">Location</div>
                </div>
                <div className={(currentStep <= "3" ? " notStartedBar " : " completedBar ") + "flex-auto border-t-4 transition duration-500 ease-in-out border-gray-300"}></div>


                <div className="flex items-center text-gray-500 relative">
                    <div className="absolute top-0 -mt-8 -ml-14 text-center  w-32 text-xl font-medium uppercase text-gray-600">Payment</div>
                    <div className={(currentStep === "4" ? " startedCircle " : currentStep < "4" ? " notStartedCircle " : " completedCircle") + 
"rounded-full transition duration-500 ease-in-out  p-1 border-2 border-gray-300 h-2 w-2 bg-gray-300"}>
                    </div>
                    <div className="absolute top-0 -ml-14 text-center mt-8 w-32 text-xs font-medium uppercase text-gray-500">Payment</div>
                </div>
            </div>
        </div>
    )


}