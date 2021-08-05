import Link from "next/link";
import React from "react";
export default function AutoFooter() {
  return (
    <footer className="ACEXP-Outer border border-gray-40 bg-gray-900 p-1">
      <div className="ACEXP-Inner"> 
      <div className="ACEXP-Main flex flex-col ">
        {/* <div className="ml-2">
                    <img src="/images/khivrajlogo.png" className="w-20" alt="Workflow" />
                </div> */}
        {/* <div className="flex-col flex md:flex-row md:items-center lg:place-self-center pt-4">

                    <h2 className="md:text-lg lg:text-2xl  font-bold text-white md:mr-6 font-LibreFranklin whitespace-nowrap">Sign Up To Our Newsletter.</h2>
                    <div className="inline-flex items-center mt-4  md:mt-0">
                        <input className="border-white  md:ml-0 ml-2 border-2 w-28 h-8 md:w-60 md:h-10 font-LibreFranklin bg-black px-4 mr-8 md:mr-6" type="email" />
                        <button className="font-normal whitespace-nowrap h-8   bg-blue-800 hover:bg-transparent  text-xs sm:text-sm text-theme-inverse hover:text-theme  uppercase 
  rounded-full   border-2  sm:m-2 sm:py-1 py-0 px-4 md:h-10 font-LibreFranklin">Subscribe</button>
                    </div>
                </div> */}
        <div className="text-white flex w-full  justify-center flex-col md:flex-row md:justify-between pb-4 pt-4">
          <div className="flex flex-col w-full md:w-1/5 md:pt-0 ">
            <h3 className="md:text-lg font-bold font-LibreFranklin uppercase whitespace-nowrap">
              ABOUT KHIVRAJ
            </h3>
            <h4 className="text-xs pt-4 md:text-sm font-LibreFranklin">
              At Khivraj Motors we believe in upholding Strong Business Ethics &
              the Human factor.
            </h4>
            <h4 className="text-xs pt-4 md:text-sm font-LibreFranklin">
              Our company strongly believes that, the people make an
              organisation and that its well being depends on the commitment &
              growth of its people
            </h4>
          </div>
          <div className="flex flex-col w-full md:w-1/5 md:pt-0 pt-8">
            <h3 className="md:text-lg font-bold font-LibreFranklin uppercase">
              Information
            </h3>
            <Link href="/aboutUs">
              <a className="text-xs pt-4 md:text-sm font-LibreFranklin">
                {" "}
                About Us{" "}
              </a>
            </Link>
            <Link href="/privacyPolicy">
              <a className="text-xs pt-4 md:text-sm font-LibreFranklin">
                {" "}
                Privacy Policy
              </a>
            </Link>
            <Link href="/termsConditions">
              <a className="text-xs pt-4 md:text-sm font-LibreFranklin">
                {" "}
                Terms And Conditions
              </a>
            </Link>
            <Link href="/shippingReturnPolicy">
              <a className="text-xs pt-4 md:text-sm font-LibreFranklin">
                Orders and Returns
              </a>
            </Link>
          </div>

          <div className="flex flex-col w-full md:w-1/5  md:pt-0 pt-8">
            <h3 className="md:text-lg  font-LibreFranklin font-bold uppercase">
              Address
            </h3>
            <div className="inline-flex ">
              <svg
                className="w-8 h-8 mt-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex flex-col">
                <h4 className="text-xs md:text-sm pt-4 ml-2 font-LibreFranklin">
                  {" "}
                  10/2, Kasturba Road, Opp. Cubbon Park Police Station,
                  Shanthala Nagar,
                </h4>
                <h4 className="text-xs md:text-sm pt-2 ml-2 font-LibreFranklin">
                  {" "}
                  Bengaluru, Karnataka 560001
                </h4>
              </div>
            </div>
            <div className="inline-flex items-center">
              <svg
                className="w-4 h-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h4 className="text-xs md:text-sm pt-2 ml-3 font-LibreFranklin">
                {" "}
                8722022400
              </h4>
            </div>
            <div className="inline-flex items-center">
              <svg
                className="w-4 h-4 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <h4 className="text-xs md:text-sm pt-2 ml-3 font-LibreFranklin">
                {" "}
                ecommerce@khivraj.com
              </h4>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/5 md:pt-0 pt-8">
            <h3 className="md:text-lg  font-LibreFranklin uppercase font-bold">
              CONTACT US
            </h3>
            <h4 className="text-xs md:text-base font-LibreFranklin  pt-4">
              {" "}
              Mon-Sat: 9am to 6pm
            </h4>
            <h4 className="text-xs md:text-base font-LibreFranklin  pt-4">
              Sunday: Closed
            </h4>
          </div>
        </div>

        <div className="border-gray-100  pb-2 border-t-2 w-full"></div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-row">
            <Link href="https://www.facebook.com/khivrajbajaj.Bangalore/">
              <a>
                <img
                  className="w-5 h-5 m-2 ml-4"
                  src="/images/icons8-facebook-24.png"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/khivraj_bajaj/">
              <a>
                <img
                  className="w-6 h-6 m-1 mt-1.5 ml-1"
                  src="/images/instagram.png"
                />
              </a>
            </Link>
          </div>
          <div>
            <h6 className="text-white pt-2.5 md:pt-3.5 text-xs font-LibreFranklin whitespace-nowrap pb-2 md:pb-0">
              © Copyright 2021 Khivraj Group. All Rights Reserved.
            </h6>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
