import Link from 'next/link'
export default function login() {

    const loginImg = () => (
        <div>
<h1 className="font-bold">LOGIN</h1>
<h3 className="text-sm md:text-lg">Explore our awesome community</h3>
            <img className="w-full" src="/images/navImg.png" />
        </div>
    )

    const loginForm = () => (
        <div>
            <form>
                <div className="md:mt-20">
                    <label className="text-sm">Username</label>
                    <input className="h-10 w-full block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                        placeholder="Enter username"
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
                        <h5 className="ml-2 text-xs md:text-md text-gray-500">Remember Me</h5>
                    </label>
                </div>
                <div className="mt-5">
                    <button className="bg-theme text-theme-inverse h-9 w-full">LOGIN</button>
                </div>
                <div className="inline-flex mt-3 items-center m-auto md:ml-32">
                    <img className="h-5 w-5 " src="/images/passwordIcon1.png" />
                    <Link href="/register/forgotpassword" >
                        <a className="text-xs md:text-md text-gray-500 text-center border-b-2 border-theme">
                            Forgot your password?</a></Link>
                </div>
            </form>
        </div>

    )
    return (

        <section className="theme-autocomm acSec bg-default border-2 border-theme">
            <div className="container">
                <div className="flex flex-col md:flex-row w-full  place-self-center justify-between">
                    <div className="w-full md:w-3/5 ">
                        {loginImg()}
                    </div>
                    <div className="w-full md:w-2/5 md:mt-20 md:ml-10 ">
                        {loginForm()}
                    </div>
                </div>
            </div>

        </section>
    )


}