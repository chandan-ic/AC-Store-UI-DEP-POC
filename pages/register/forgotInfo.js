
export default function ForgotInfo() {



    const forgotInfoMsg = () => (
        <div className="block m-auto w-full md:w-1/2 md:h-80 md:border-2 md:border-gray-400">
            <h2 className="font-semibold md:mt-20 md:ml-10">Check your email</h2>
            <div className="mt-5 md:mt-8 md:ml-10">
                <h5>Password reset link has been sent to your registered email-id <br />
                  please click on the link to reset your password.</h5>
            </div>
        </div>
    )


    const forgotInfoMsg1 = () => (
        <div className="block m-auto mt-10 md:mt-20 w-full md:w-1/2 h-96 md:border-2 md:border-gray-400">
            <h2 className="font-semibold md:mt-20 md:ml-10">Check your message</h2>
            <div className="mt-5 md:ml-10">
                <h5>OTP has been sent to your registered mobile number <br />
please enter OTP to reset your password.</h5>
            </div>
            <div className="mt-8">
                <label className="text-sm md:ml-10 text-gray-700">Enter OTP</label>
                <input className="md:ml-10 h-10 w-full md:w-3/5 block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    placeholder="OTP"
                />
            </div>
<div className="mt-10 inline-flex justify-">
                         <a href='/register/resetlink'>
 <button className="bg-theme text-theme-inverse h-9 w-24 md:ml-10 focus:outline-none">SUBMIT</button></a>
<button className="bg-default border-2 border-theme text-theme-inverse h-9 w-24 ml-10 focus:outline-none">RESEND</button>
                </div>
        </div>
    )
    return (
        <section className="theme-autocomm acSec bg-default border-2 border-theme">
            <div className="container">
                <div className="hidden">
                    {forgotInfoMsg()}
                </div>
                <div className="">
                    {forgotInfoMsg1()}
                </div>
            </div>

        </section>
    )



}