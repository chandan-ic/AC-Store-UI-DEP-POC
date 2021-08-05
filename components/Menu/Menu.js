import Link from "next/link";
// import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { getCookie, removeCookie } from "utils/helper/cookieFunc";
import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";
import Image from "next/image";
import { menuActions } from "./store/menuSlice";
import { bookingActions } from "../Booking/store/booking-slice";
import { testRideActions } from "components/TestRide/store/testRide-slice";
import { loginActions } from "components/LoginUI/store/login-slice";
import { getBrand } from "utils/helper/storeHelper/masterDataHelper";
import { TEST_RIDE } from "utils/constant/routerPath";
import { setMasterDataRequest } from "components/Common/store/masterData/masterData-action";
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = `/api/masterData`;

export default function Menu() {
  const dispatch = useDispatch();
  const router = useRouter()

  const [open, setOpen] = useState(false);
  const [modelCategories, setModelCategories] = useState(null);
  const [models, setModels] = useState(null);
  const [bikeDtls, setBikeDtls] = useState(null);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [isChanged, setChanged] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("BR");
  const { isLoggedIn } = useSelector((state) => state.login);
  const { preSelected } = useSelector((state) => state.testRide);
  const selectedProductBrand = useSelector((state) => state.bike.selectedProductBrand);
  const selectedProductBikeBrand = useSelector((state) => state.bike.selectedProductBikeBrand);
  const [productMenu, setProductMenu] = useState(false);

  const scrollY = useScrollYPosition();
 
  //const isProductPage = useSelector((state) => state.bike.isProductPage);

  const isProductPage = router.pathname.includes("bikes");

  
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const isLogged = Boolean(getCookie("is_logged_in"));
      dispatch(loginActions.setLoggedIn(isLogged));
      if (Boolean(getCookie("is_logged_in"))) {
        const expiry = new Date(getCookie("expiry"));
        const date = new Date();
        console.log(expiry, date);
        if (expiry - date <= 0) {
          removeCookie("is_logged_in");
          removeCookie("user");
          removeCookie("token", null);
          removeCookie("x", null);
          removeCookie("y", null);
          dispatch(loginActions.setLoggedIn(false));
        }
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const isLogged = Boolean(getCookie("is_logged_in"));
    dispatch(loginActions.setLoggedIn(isLogged));
    dispatch(setMasterDataRequest());

  }, []);

  useEffect(() => {
    setChanged(!isChanged);
  }, [isLoggedIn]);

  useEffect(() => {
    if (preSelected) {
      Router.push(TEST_RIDE);
    }
  }, [preSelected]);

  useEffect(() => {
      console.log("router includes bike=",router.pathname.includes("bikes"));  
    window.addEventListener("beforeunload", function (e) {
      // var confirm_message = "o/";

      // (e || window.event).returnValue = confirm_message;
      // return confirm_message;
    });
  }, []);

  const { data, error } = useSWR(url, fetcher);
  if (error) return <h3>we are unable to reach our servers at the moment</h3>;
  if (!data) return <h3>Loading...</h3>;

  const brands = data.responseData.Brand;

  const getModelCategories = (brand) => {
    setModelCategories(
      data.responseData.ModelCategory.filter(
        (model) => model.BrandCode === brand
      )
    );
    setModels(null);
    setBikeDtls(null);
    setCurrentScreen("MC");
    setOpen(true);
  };

  const getModels = (brandCategory) => {
    setModels(
      data.responseData.Model.filter(
        (model) => model.ModelCategory === brandCategory
      )
    );
    setBikeDtls(null);
    setCurrentScreen("MDL");
  };

  const getBikeDtls = (model) => {
    setBikeDtls(
      data.responseData.ModelDetails.filter((dtls) => dtls.ModelCode === model)
    );
    setCurrentScreen("BDTL");
  };

  const closeMenu = () => {
    dispatch(menuActions.setCloseRMenu(true));
  };
  const callBooking = (e) => {
    e.preventDefault();
    dispatch(bookingActions.setBookingBike(e.target.value));
    dispatch(bookingActions.setBookingPreSelected(true));
    closeMenu();
    Router.push("/booking");
  };
  const handleTestRide = (e) => {
    setOpen(false);

    dispatch(testRideActions.resetValues());
    dispatch(testRideActions.setBikeVariant(e.target.value));
    dispatch(testRideActions.setBikeBrand(getBrand(e.target.value)));
    dispatch(testRideActions.setPreselected(true));
  };

  let bdS = [];

  const handleMouseLeave = () => {
    setOpen(false);
    setCurrentScreen("BR");
  };
  const callLogOut = () => {
    removeCookie("is_logged_in");
    removeCookie("user");
    removeCookie("token", null);
    removeCookie("x", null);
    removeCookie("y", null);
    dispatch(loginActions.setLoggedIn(false));
  };
  const bikeBrandLogo="khivrajlogo";
  const brandLogo="khivrajlogo";
  
  return (
    <div className=" h-full flex w-full" >
    <nav className={`  ${(isProductPage && scrollY) < 200 ? "m-fadeOut": "m-fadeIn"} w-full`}>
       <div className=" px-4 sm:px-10 flex w-full  justify-between">
       <div className="flex  w-44 h-14 space-x-2"> 
       <div className=" mt-2" style={{ position: 'relative', width: '176px', height: '56px' }}>
       <Link  href="#Start">
         <a> 
          <Image 
             layout="fill" objectFit='contain'
             src={`/images/${selectedProductBikeBrand}.png`}
             alt={`${selectedProductBrand} Logo`}
             />   
             </a>
             </Link>
               </div>
          </div>
          <div className=" items-end uppercase text-primary text-xs tracking-widest ml-10 hidden  md:flex">
              {/* <Link  href="#Start">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Start Here
               </a>
              </Link> */}
              <Link  href="#Explore">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Explore
               </a>
              </Link>
              <Link  href="#Features">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Features
               </a>
              </Link>
              <Link  href="#Gallery">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Gallery
               </a>
              </Link>
              <Link  href="#WhyKhivraj">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Why Khivraj
               </a>
              </Link>
              <Link  href="#TechSpecs">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Tech Specs
               </a>
              </Link>
              {/* <Link  href="#Similar">
               <a  className="tracking-widest px-2 mb-1 border-r-2 border-gray-200 "> 
                Similar Bikes
               </a>
              </Link> */}
          </div>
          <div className="flex w-64 h-14 space-x-2"> 

          <div className="relative w-full mt-2 h-full ">
            <Image
             layout="fill" objectFit='contain'
              src={`/images/${selectedProductBrand}.png`}
              alt={`${selectedProductBrand} Logo`}
              />
          </div>
          <div className="w-full mt-2 h-10 ">
          <Link href="/" className="pl-4 relative h-full">
            <a>

 <Image
              height={48}
              width={102}
              src={data.responseData.SiteOwnerLogoURL}
              alt="Khivraj Logo"
              />
              </a>
              </Link>
          </div>
          </div>
        </div>
      </nav>
    <nav className={`  ${(isProductPage && scrollY) > 200 ? "m-fadeOut": "m-fadeIn"} w-full`}>
        <div className="px-4 sm:px-8 flex w-full justify-between">
          <div className="mt-2 md:hidden h-full flex  justify-start items-center">
            <label
              htmlFor="input-hamburger"
              className={`${open ? "close" : "hamburger"
                } lg:hidden mt-4 hamburger `}
            ></label>
            <input
              type="checkbox"
              id="input-hamburger"
              hidden
              onChange={() => {
                setOpen(!open), setMobileScreen(true);
              }}
            />
          </div>
          <div className="items-end uppercase text-primary text-xs tracking-widest ml-10 hidden  md:flex" 
        >
            <button className="px-2 tracking-widest mb-2 border-r-2 border-gray-200">
              <Link className="text- text-primary h-10 " href="/">
                HOME
              </Link>
            </button>
            {brands &&
              brands.map((bM, i) => (
                <button
                  key={i}
                  onMouseOver={() => getModelCategories(bM.BrandCode)}
                  className="mb-2 px-2 border-r-2 border-gray-200 uppercase tracking-widest hover:bg-gray-50 aria-haspopup='true'"
                >
                  {bM.Brand}
                  {/* <Image
                    height={bM.ImgHeight}
                    width={bM.Imgwidth}
                    className="pr-4"
                    src={bM.BrandImgUrl}
                  /> */}
                </button>
              ))}
            <button className="tracking-widest px-2 mb-2 border-r-2 border-gray-200">
              <Link className=" block" href="/test-ride">
                TEST RIDE
              </Link>
            </button>
            <button className="tracking-widest px-2 mb-2 border-r-2 border-gray-200">
              <Link className="block uppercase" href="/financeCheck">
                FINANCE ELIGIBILITY
              </Link>
            </button>
          </div>
          <div className="mt-6 h-10 mb-1">
            <Link href="/" className="pl-4 relative h-full">
              <Image
                height={48}
                width={102}
                src={data.responseData.SiteOwnerLogoURL}
                alt="Khivraj Logo"
              />
              {/* <Image src={data.responseData.SiteOwnerLogoURL} width={data.responseData.SiteOwnerLogoWidth} height={data.responseData.SiteOwnerLogoHeight} alt="Khivraj Loog" /> */}
            </Link>
          </div>
        </div>
        {/* MegaMenu follows */}
        <div
          className={`${brands && open ? "flex" : "hidden"
            }  top-24 z-20 text-left absolute flex h-screen  border-t-2  left-0 border-gray-100 w-screen bg-white`}
          onMouseLeave={() => handleMouseLeave()}
        >
          {/* if currentscreen not Modelcategory then hide*/}
          <div
            className={`${currentScreen === "BR" ? "flex" : "hidden"
              }  lg:hidden h-full   w-full lg:w-1/5`}
          >
            <div className="left-0 flex-col border-r-2 border-gray-100">
              {brands &&
                brands.map((bM, i) => (
                  <button
                    key={i}
                    onMouseOver={() => getModelCategories(bM.BrandCode)}
                    className="block hover:bg-gray-50 w-full menu-link border-b-2 border-gray-100 menu-bar-link aria-haspopup='true'"
                  >
                    <img className="w-18 h-10" src={bM.BrandImgUrl} />
                  </button>
                ))}
            </div>
          </div>
          <div
            className={`${mobileScreen
              ? modelCategories && currentScreen == "MC"
                ? "flex"
                : "hidden"
              : modelCategories
                ? "flex"
                : "hidden"
              }  ${mobileScreen ? "menuSwipeLeft" : "menuSlideOut"
              }  border-r-2 border-gray-100 flex-col h-full  w-full lg:w-1/5 `}
          >
            {modelCategories &&
              modelCategories.map((mC, k) => (
                <button
                  key={k}
                  onMouseOver={() => getModels(mC.ModelCategory)}
                  className=" hover:bg-gray-50  border-b-2 border-gray-100 block text-left w-full menu-link menu-bar-link"
                  aria-haspopup="true"
                >
                  {mC.ModelCategory}
                </button>
              ))}
          </div>
          <div
            className={`${mobileScreen
              ? models && currentScreen == "MDL"
                ? "flex"
                : "hidden"
              : models
                ? "flex"
                : "hidden"
              }  ${mobileScreen ? "menuSwipeLeft" : "menuSlideOut"
              }  border-r-2 border-gray-100 flex-col h-full w-full lg:w-1/5 `}
          >
            {/* <div className={`${models && (mobileScreen && currentScreen==="MDL" ) ? "flex": "hidden"} ${mobileScreen? "menuSwipeLeft": "menuSlideOut"}   flex-col h-full w-1/6 `} > */}
            {
              <div>
                {models &&
                  models.map((m, l) => (
                    <button
                      key={l}
                      onMouseOver={() => getBikeDtls(m.ModelCode)}
                      className=" hover:bg-gray-50 text-left border-b-2 border-gray-100 w-full menu-link menu-bar-link"
                      aria-haspopup="true"
                    >
                      {m.Model}
                    </button>
                  ))}
              </div>
            }
          </div>
          <div
            className={`${mobileScreen
              ? bikeDtls && currentScreen == "BDTL"
                ? "flex"
                : "hidden"
              : bikeDtls
                ? "flex"
                : "hidden"
              }  ${mobileScreen ? "menuSwipeLeft" : "menuSlideOut"
              }   border-r-2 border-gray-100 flex-col h-full flex-grow lg:h-3/5`}
          >
            {/* <div className={`${bikeDtls && (mobileScreen && currentScreen==="BDTL") ? "flex ": "hidden"} ${mobileScreen? "menuSwipeLeft": "menuSlideOut"}  h-full w-4/6  `}> */}
            {bikeDtls && (
              <section className=" flex w-full p-4 flex-col sm:flex-row ">
                <div className=" w-full md:w-1/2 space-y-2 ">
                  <h1 className="text-xl ">{bikeDtls[0].ACName}</h1>
                  <p className="text-left w-full text-justify ">
                    {" "}
                    {bikeDtls[0].Description}
                  </p>
                  <button className="modelButtonOutline focus:outline-none">
                    <Link href={`/bikes/${bikeDtls[0].slug}`}>
                      <a
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        {" "}
                        EXPLORE{" "}
                      </a>
                    </Link>
                  </button>
                  <div className=" ml-4 space-y-2">
                    <div className="flex flex-row">
                      <span className="mr-2">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1397521/arrowRight.svg#accent"
                          width="14px"
                          height="14px"
                        />
                      </span>

                      <Link href={`/bikes/${bikeDtls[0].slug}#overview`}>
                        <a
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          OVERVIEW
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-row">
                      <span className="mr-2">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1397521/arrowRight.svg#accent"
                          width="14px"
                          height="14px"
                        />
                      </span>
                      <Link href={`/bikes/${bikeDtls[0].slug}#Features`}>
                        <a
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {" "}
                          FEATURES
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-row">
                      <span className="mr-2">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1397521/arrowRight.svg#accent"
                          width="14px"
                          height="14px"
                        />
                      </span>
                      <Link href={`/bikes/${bikeDtls[0].slug}#TechSpecs`}>
                        <a
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {" "}
                          SPECIFICATIONS
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-row">
                      <span className="mr-2">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1397521/arrowRight.svg#accent"
                          width="14px"
                          height="14px"
                        />
                      </span>
                      <Link href={`/bikes/${bikeDtls[0].slug}#Gallery`}>
                        <a
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {" "}
                          GALLERY
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="flex m-2">
                    <button
                      className="w-33 border-1 hover:border-transparent rounded border-gray-500 mt-2 focus:outline-none
 hover:text-yellow-500 text-sm py-1.5 px-5 hover:bg-gray-100 bg-yellow-400 text-gray-700
 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase"
                      value={bikeDtls[0].ModelCode}
                      onClick={(e) => {
                        handleTestRide(e);
                      }}
                    >
                      TESTRIDE
                    </button>
                    <button
                      className="w-33 border-2 border-yellow-400 border-bg-theme rounded  mt-2 ml-2 focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center 
 transition-colors duration-1000 ease-out uppercase"
                      value={bikeDtls[0].ModelCode}
                      onClick={(e) => {
                        setOpen(false), callBooking(e);
                      }}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
                <div className="  w-full flex flex-col h-screen md:w-1/2 ">
                  <span
                    className=" cursor-pointer flex justify-end pr-10"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {" "}
                    Close X{" "}
                  </span>

                  <div className=" h-1/2 relative">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={bikeDtls[0].menu_Img}
                      alt={bikeDtls[0].ACName}
                    />
                  </div>
                  <div className=" flex space-x-2 ">
                    <div className="w-1/3 border-r-2 border-yellow-500 ">
                      <h4>{bikeDtls[0].hf1label}</h4>
                      <h6 className="break-words ">{bikeDtls[0].hf1value}</h6>
                    </div>
                    <div className="w-1/3 border-r-2 border-yellow-500">
                      <h4>{bikeDtls[0].hf2label}</h4>
                      <h6 className="break-words">{bikeDtls[0].hf2value}</h6>
                    </div>
                    <div className="w-1/3 ">
                      <h4>{bikeDtls[0].hf3label}</h4>
                      <h6 className="break-words">{bikeDtls[0].hf3value}</h6>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
        {/* <Link href="/search">
            <a >
          <div className=" m-auto inline-flex w-10  items-center">

            <span className="pt-6">
              <svg
                width="20"
                height="18"
                fill="currentColor"
                className="transform -translate-y-1/2 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
            </span>
          </div>

            </a>
        </Link> */}
        {/* <div className="flex items-center justify-self-end">
          <div className=" flex items-center">
            <ul className="flex items-center">
              {isLoggedIn ? (
                <li className="text-center h-8  w-32 mr-10">
                  <button
                    onClick={()=>{callLogOut()}}
                    className="bg-theme border-2 border-transparent hover:bg-white uppercase text-theme-inverse
                      hover:text-theme-inverse hover:border-2 hover:border-theme px-5 py-2 text-sm "
                  >
                    LOG OUT
                  </button>
                </li>
              ) : (
                <>
                  <li className="text-center h-8  w-32 mr-3">
                    <Link href="/register/login">
                      <a
                        className="bg-theme border-2 border-transparent hover:bg-white uppercase text-theme-inverse
                        hover:text-theme-inverse hover:border-2 hover:border-theme px-5 py-2 text-sm "
                        onClick={()=>{dispatch(loginActions.setStatus("login-password"));}}
                      >
                        LOGIN
                      </a>
                    </Link>
                  </li>
                  <li className="text-center h-8  w-32 mr-5">
                    <Link href="/register/signup">
                      <a
                        className="bg-theme border-2 border-transparent hover:bg-white uppercase text-theme-inverse
                        hover:text-theme-inverse hover:border-2 hover:border-theme px-5 py-2 text-sm "
                      >
                        SIGN UP
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div> */}
      </nav>

    </div>
  );
}
