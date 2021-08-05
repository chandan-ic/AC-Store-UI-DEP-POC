import Image from "next/image";
import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({ featureId, features, textTheme, deviceType }) {
  const [feats, setFeats] = useState({});

  //   const getBikeFeatures =() => {
  //     const fts1 = features?.filter((m) => m.featureId === featureId);
  //     console.log("fts1",fts1);
  //     setFeats(fts1.featureList); 
  // }

  //   useEffect(() => {
  //     getBikeFeatures() 
  //   }, [])


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //autoPlay={deviceType !== "mobile" ? true : false}
      //autoPlaySpeed={100}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerclassName=""
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListclassName="custom-dot-list-style"
      itemclassName="p-4"
    >
      {features.map((ts, ti) => (
        // <div className="w-full">
        //   <div className="w-1/2">
        //   <Image
        //     layout="fill"
        //     objectFit="contain"
        //     src={`${ts.image}`}
        //   />             
        //  </div>
        //   <div className="w-1/2">
        //     {ts.headline}
        //     {ts.text}
        //     </div>
        // </div>
        <div className=" flex flex-col lg:flex-row justify-center bg-none h-full w-full items-center">
          <div className=" relative w-full  h-40vh lg:w-1/2  ">
            <Image
              layout="fill"
              objectFit="contain"
              src={`${ts.image}`}
            />
          </div>
          <div className="lg:w-1/2 lg:p-6 w-full space-y-4">
            <h4 className={`${textTheme}  tracking-wider font-semibold uppercase `}>
              {" "}
              {ts.headline}
            </h4>
            <p className={`${textTheme}  w-full lg:w-96 text-justify   h-full overflow-y-auto `}>
              {" "}
              {ts.text}
            </p>
          </div>
        </div>
      ))
      }
    </Carousel>
  )
    }
