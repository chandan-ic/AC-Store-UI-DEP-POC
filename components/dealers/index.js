const Dealers = () => {

    return (
        <section className="flex flex-col  ">
            <p>
                There are 5 dealers close to your pincode
            </p>
            <ul className="bg-white p-6 h-auto m-b-2 m-t-2 border">
                <li className="flex pb-2 align-middle">

                    <svg className="block  align-middle w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <h4 className="align-middle dpL uppercase text-sm tracking-wider pt-2 pb-4 font-bold">khivraj Bajaj </h4>
                </li>
                <li className="flex pb-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="pl-3 text-sm tracking-wide">
                        +91-80-23023232
                                    </span>
                </li>
                <li className="flex pb-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <span className="pl-3 text-sm tracking-wide">
                        museumroad@khivrajbajaj.com
                                    </span>
                </li>
                <li className="flex pb-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="pl-3 text-sm tracking-wide">
                        No.23, Museum Road, <br />Bangalore-560001, Karnataka
                                    </span>
                </li>
                <li className=" flex justify-end text-right pt-2 pb-2 border-t border-gray-200">
                    <button type="button" className="mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center  transition-colors duration-1000 ease-out">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>  Select
                                     </button>
                </li>
            </ul>
        </section>
    );
};

export default Dealers;
