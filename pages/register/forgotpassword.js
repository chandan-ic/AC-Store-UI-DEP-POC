import login from "./login"

export default function ForgotPassword() {



    const forgotPassword = () => (
        <div className="block md:m-auto w-full  md:w-1/2 md:h-96 md:border-2 md:border-gray-400">
            <h2 className="font-semibold md:mt-20 md:ml-32">Forgot password ?</h2>
            <div className="mt-8">
                <label className="text-sm md:ml-32 text-gray-700">Your email or mobile number</label>
                <input className="md:m-auto  h-10 w-full md:w-3/5 block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    placeholder="Enter your email-id or mobile number"
                />
            </div>
            <div className="mt-10 text-center">
               <a href='/register/forgotInfo'>
 <button className="bg-theme focus:outline-none text-theme-inverse h-9 w-full md:w-3/5">RESET PASSWORD</button></a>
            </div>

        </div>

    )

    return (
        <section className="theme-autocomm acSec bg-default border-2 border-theme">
            <div className="container">
                <div className="">
                    {forgotPassword()}
                </div>
            </div>

        </section>
    )



}