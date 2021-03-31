import Link from 'next/link'
export default function signup() {

    const signupImg = () => (
        <div>
            <h1 className="font-bold">SIGN UP</h1>
            <h3 className="text-sm md:text-lg">Explore our awesome community</h3>
            <img className="w-full" src="/images/navImg.png" />
        </div>
    )

    const signupForm = () => (
        <div>
            <form>
                <div className="mt-5">
                    <label className="text-sm">Name</label>
                    <input className="h-10 w-full block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-sm">Email</label>
                    <input className=" h-10 w-full block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-sm">Mobile Number</label>
                    <input className=" h-10 w-full block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                        placeholder="Enter Mobile Number"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-sm">Password</label>
                    <input className=" h-10 w-full block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mt-3">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox text-yellow-300 h-4 w-4 " value="" />
                        <h5 className="text-xs md:text-md ml-2 text-gray-500 border-b-2 border-theme">Accept the Terms and Conditions</h5>
                    </label>
                </div>
                <div className="mt-5">
                    <button className="bg-theme text-theme-inverse h-9 w-full">CREATE ACCOUNT</button>
                </div>
                <div className="inline-flex mt-5 items-center pb-5 md:pb-0 m-auto md:ml-14">
                    <h6>Already have an account?</h6>
                    <div>
                        <Link href="/register/login" >
                            <a className="bg-default border-2 border-theme 
  uppercase text-theme-inverse items-center ml-2
 hover:text-black hover:bg-theme  px-5 py-2 
 tx-sm ">Sign in</a></Link>
                    </div>
                </div>
            </form>
        </div >

    )
const successInfo = () => {
<div className="block m-auto mt-10 md:mt-20 w-full md:w-1/2 h-96 md:border-2 md:border-gray-400">
<h2 className="font-bold">Thank You</h2>
<h3>You have been successfully registered!</h3>
 <div>
     <Link href="/" >
    <a className="bg-default border-2 border-theme 
  uppercase text-theme-inverse items-center ml-2
 hover:text-black hover:bg-theme  px-5 py-2 
 tx-sm ">Continue</a></Link>
                    </div>
</div>

}

    return (

        <section className="theme-autocomm acSec bg-default border-2 border-theme">
            <div className="container">
                <div className="flex flex-col md:flex-row w-full  place-self-center justify-between">
                    <div className="w-full md:w-3/5 ">
                        {signupImg()}
                    </div>
                    <div className="w-full md:w-2/5 md:mt-20 md:ml-10 ">
                        {signupForm()}
                    </div>

                </div>
            </div>
{/*{successInfo()}*/}
        </section>
    )
}