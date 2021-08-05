import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookie, removeCookie } from "utils/helper/cookieFunc";

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loginActions } from "components/LoginUI/store/login-slice";

export default function TopBar() {

    const dispatch = useDispatch();
    const isLogged = Boolean(getCookie("is_logged_in"));
    const { isLoggedIn } = useSelector((state) => state.login);

    const callLogOut = () => {
        removeCookie("is_logged_in");
        removeCookie("user");
        removeCookie("token", null);
        removeCookie("x", null);
        removeCookie("y", null);
        dispatch(loginActions.setLoggedIn(false));
      };

    return (
        <div className="w-full sm:h-6 h-12 md:px-16 fixed bg-topbar flex flex-col-reverse sm:flex-row justify-center sm:justify-end">
            <div className=" flex mx-1 items-end ">
                <ul className=" flex space-x-1 text-xs items-end text-primary tracking-widest">
                    <li>  <Link href="/">Home &nbsp; | </Link></li>
                    <li>Locations &nbsp;  |</li>
                    <li>
                        <Link href="/aboutUs">
                    About Us &nbsp; 
                    </Link>
                     |</li>
                    <li>  <Link href="/search">Search </Link></li>
                    <li> &nbsp; |EN|</li>
                </ul>
              
            </div>
           
            <div className="flex  ml-2 text-xs items-end text-primary tracking-widest ">
                <ul className="flex  gap-2">
                <li> <a className="font-medium" href="tel:+4733378901">Phone: +91 8722022400 </a> </li>
                {/* <li className="font-medium"><Link href="/register/login">Sign In </Link></li>
                    <li className="font-medium"><Link href="/register/signup">Sign Up </Link></li> */}
                    {/* <ul className="borderTest flex items-center"> */}
              {isLoggedIn ? (
                <li className="">
                  <Link href=""
                    onClick={()=>{callLogOut()}}
                    className=" "
                  > <a
                  className="border px-1 border-theme hover:bg-white uppercase text-theme-inverse
                  hover:text-theme-inverse hover:border-2 hover:border-theme">
                    LOG OUT
                    </a>
                  </Link>
                </li>
              ) : (
                <>
                  <li className="">
                    <Link href="/register/login">
                      <a
                        className="border px-1 border-theme hover:bg-white uppercase text-theme-inverse
                        hover:text-theme-inverse hover:border-2 hover:border-theme"
                        onClick={()=>{dispatch(loginActions.setStatus("login-password"));}}
                      >
                        LOGIN
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/register/signup">
                      <a
                        className="border px-1 border-theme hover:bg-white uppercase text-theme-inverse
                        hover:text-theme-inverse hover:border-2 hover:border-theme"
                      >
                        SIGN UP
                      </a>
                    </Link>
                  </li>
                </>
              )}
            {/* </ul> */}
                </ul>
            </div>
            {/* <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <a href="" class="p-1 rounded-full text-primary focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">
                            <FontAwesomeIcon icon={faCoffee} />
                            </span>
                        </a>
                        <div class="ml-3 relative">
                            <div class="relative inline-block text-left">
                                <div>
                                    <button type="button" class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                        <svg width="20" fill="currentColor" height="20" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                       
                                        <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Account
                                                </span>
                                            </span>
                                        </a>
                                        <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span class="flex flex-col">
                                                <span>
                                                    Logout
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div> */}
        </div>
    )
}