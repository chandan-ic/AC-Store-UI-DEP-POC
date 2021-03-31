
export default function designGuide() {
    return (
        <div>
            <section>
                <div class="container" >

                    <h1 className="dpH1">
                        Book Your Bikes Online Now!        </h1>
                    <p className="dpP">
                        Now, you can buy your favorite bike completely online.         </p>
                    <button className="dpBut">Explore </button>
                </div>
            </section>

            <section className=" p-20 mt-10 bg-gray-100">
                <div>
                    
                </div>    
            </section>
            <section className=" p-20 mt-10 bg-gray-100">
                <div class="container" >
                    <h2 class="dpH2 text-center mb-10">
                        TEST RIDE YOUR FAVORITE BIKE
                       </h2>

                    <div>
                        <ul className="justify-center flex justify-around">
                            <li className=" bg-yellow-200 text-center w-1/5 text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal m-2 tracking-widest">
                                <svg className="block  m-auto w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                <span className="mt-2">
                                    Select Bike
                                  </span>
                            </li>
                            <li className="text-center w-1/5 text-xs  uppercase px-5 py-2 shadow-sm  block leading-normal m-2 tracking-widest">
                                <svg className="block  m-auto w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mt-2">
                                    Select Location
                                </span>
                            </li>
                            <li className=" text-center w-1/5 text-xs  uppercase px-5 py-2 shadow-sm rounded block leading-normal m-2 tracking-widest">
                                <svg className="block  m-auto w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="mt-2">
                                    Select Schedule
                                </span>
                            </li>
                            <li className=" text-center w-1/5 text-xs  uppercase px-5 py-2 shadow-sm rounded block leading-normal m-2 tracking-widest">
                                <svg className="block  m-auto w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                <span className="mt-2">
                                    Enter your details
                                      </span>
                            </li>
                        </ul>
                    </div>
                    <div className="container pt-10" >
                        <div>
                            <p className="dpP mb-2">
                                Find a nearest dealer
                            </p>
                        </div>
                        <div className="flex">
                            <div className=" w-1/3 p-2">
                                <input type="text" placeholder="Enter your pincode"
                                    className="uppercase px-2 py-1 rounded placeholder-gray-400 text-gray-700 relative  text-xs border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
                            </div>
                            <div className=" w-1/3 p-2">
                                <div class="w-full ">
                                    <div class="bg-white  flex border border-gray-300 rounded">
                                        <div class="flex flex-auto flex-wrap"></div>
                                        <input type="text" placeholder="ENTER YOUR PINCODE"
                                            className="px-2 py-1 rounded placeholder-gray-400  text-gray-700 relative  text-xs   outline-none focus:outline-none focus:shadow-outline w-full" />
                                        <div className="px-2 bg-yellow-200">
                                            <button class="cursor-pointer w-6 h-full flex items-center text-xs text-gray-700 outline-none focus:outline-none">
                                                GO
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" w-1/3 p-2">
                                <div class="w-full ">
                                    <div class="bg-white  flex border border-gray-300 rounded ">
                                        <div class="flex flex-auto flex-wrap"></div>
                                        <input value="" placeholder="Select your ride type"
                                            className="uppercase px-2 py-1 rounded placeholder-gray-400 text-gray-700 relative  text-sm   outline-none focus:outline-none focus:shadow-outline w-full" />
                                        <div>
                                            <button class="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x w-4 h-4">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-300 svelte-1l8159u">
                                            <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div>
  <div class="sticky top-0 ...">Sticky Heading 1</div>
  <p class="py-4">Quisque cursus...</p>
</div>
<div>
  <div class="sticky top-0 ...">Sticky Heading 2</div>
  <p class="py-4">Integer lacinia...</p>
</div>
<div>
  <div class="sticky top-0 ...">Sticky Heading 3</div>
  <p class="py-4">Nullam mauris...</p>
</div>

            <section className="m-10 ">
                <div class="container" >
                <h3 className="dpl"> 
                    Chip
                    </h3>
                    <div
                    class="inline-flex items-center  rounded-md bg-white border border-gray-200 p-px"
                  >
                    
                    <span class="px-1 text-sm">filter1</span>
                    <button className="bg-gray-200 hover:bg-gray-400 rounded-sm hover:border-yellow-400 transform text-gray-500 active:bg-pink-600 p-1 font-bold uppercase text-xs shadow rounded-full hover:shadow-lg hover:border hover:text-yellow-300 outline-none focus:outline-none mr-1 mb-1 transition: background-color 400ms ease-out, color 400ms ease-out, border-color 400ms ease-out; " type="button">

                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                  </div>
                </div>
            </section>

            <section className="m-10 ">
                <div class="container" >
                <h3 className="dpl"> 
                    Close Button
                    </h3>
                    <button className="bg-gray-200 hover:bg-gray-400 hover:border-yellow-400 transform text-gray-500 active:bg-pink-600 p-1 font-bold uppercase text-xs shadow  rounded-full hover:shadow-lg hover:border hover:text-yellow-300 outline-none focus:outline-none mr-1 mb-1 transition: background-color 400ms ease-out, color 400ms ease-out, border-color 400ms ease-out; " type="button">
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className=" mt-10 p-10 border-t border-gray-200">
                    Border -top
                </div>
                <div className=" mt-10 p-10 border-b border-yellow-200">
                    Border -bottom
                </div>
            </section>

            <section className="m-20 ">
                <div class="container" >
                    <div class="w-1/4 relative text-gray-600">
                        <input type="search" name="search" placeholder="Search" class="bg-gray-100 h-8 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="m-20 ">
                <div class="container" >
               asfdasdf
                
                </div>
            </section>

            <section className="m-20 ">
                <div class="container" >
                    ----

 <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-yellow-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
              </a>
              <span class="bg-yellow-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
              </span>
            </div>
          </div>
        </div>
      </div>                
                </div>
                    ----
                </div>
            </section>

            
            <section className="m-20 ">
                <div class="container" >
               <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div class="relative pb-48 overflow-hidden">
           
            <img className="p-2 absolute inset-0 h-full w-full object-cover" 
        src="/images/homeImage2.png" />
          </div>
        <div class="p-4">
            <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
            <h2 class="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
            <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <div class="mt-3 flex items-center">
                <span class="text-sm font-semibold">Rs.</span>&nbsp;<span class="font-bold text-xl">45,00</span>
            </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
            <span class="flex items-center mb-1">
                <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
  </span>
            <span class="flex items-center">
                <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Ermäßigung mit Karte
  </span>
        </div>
        <div class="p-4 flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span class="ml-2">34 Bewertungen</span></div>
    </a>
</div>


                
                </div>
            </section>



            <section className="m-20 ">
                <div class="container" >
                    <label class="flex items-center space-x-3 mb-3">
                        <input type="checkbox" name="checked-demo" class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none" />
                        <span class="text-gray-700 dark:text-white font-normal">
                            Gray
                                            </span>
                    </label>
                </div>
            </section>

            <section className="m-20 ">
                <div class="container" >
                    <h3> Breadcrumbs </h3>
                    <ul class="flex text-gray-500 text-sm">
                        <li class="inline-flex items-center">
                            <a href="/">Home</a>
                            <svg
                                class="h-5 w-auto text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </li>
                        <li class="inline-flex items-center">
                            <a href="/components">Components</a>
                            <svg
                                class="h-5 w-auto text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </li>
                        <li class="inline-flex items-center">
                            <a href="#" class="text-yellow-500">Breadcrumb</a>
                        </li>
                    </ul>

                </div>
            </section>

            <section className="p-20 bg-gray-100">
                <div class="container" >

                    <p>
                        There are 5 dealers close to your pincode
                            </p>
                    <div className="w-min p-2">
                        <div className="space-y-4">

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
                                    <button type="button" className="border-1 border-transparent hover:border-gray-500 mt-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5  bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center  transition-colors duration-1000 ease-out">
                                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>  Select
                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}