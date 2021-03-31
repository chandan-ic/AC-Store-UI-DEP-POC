
export default function ResetPassword() {

    const resetPassword = () => (
        <div className="block m-auto w-full md:w-1/2  md:border-2 md:border-gray-400">
            <h2 className="font-semibold md:mt-10 md:ml-32">Create new password</h2>
<h5  className="mt-5 md:ml-32 hidden sm:block">Your new password must be different from <br/>previous used passwords.</h5>
<h5  className="mt-5 md:ml-32 block sm:hidden">Your new password must be different from previous used passwords.</h5>     
       <div className="mt-8">
                <label className="text-sm md:ml-32 text-gray-700">New Password</label>
                <input className="m-auto  h-10 w-full md:w-3/5 block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    placeholder="Enter a new password"
                />
            </div>
<div className="mt-8">
                <label className="text-sm md:ml-32 text-gray-700"> Comfirm New Password</label>
                <input className="m-auto  h-10 w-full md:w-3/5 block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    placeholder="Re-enter your new password"
                />
            </div>
            <div className="mt-10 text-center md:mb-20">
               <a href='/register/forgotInfo'>
 <button className="bg-theme focus:outline-none text-theme-inverse h-9 w-full md:w-3/5">UPDATE PASSWORD</button></a>
            </div>

        </div>
    )

    return (
        <section className="theme-autocomm acSec bg-default border-2 border-theme">
            <div className="container">
                <div className="">
                    {resetPassword()}
                </div>
            </div>

        </section>
    )



}