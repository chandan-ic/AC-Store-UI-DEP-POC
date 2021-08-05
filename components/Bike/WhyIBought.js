import React from 'react';
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function WhyIBought({ vehicle }) {
  return (
    <section id="section-6" className=" ACEXP-Outer bg-gray-100">
      <div
        id="whyiboughtthisbike"
        className={`ACEXP-Inner  ${vehicle.theme}`}
      >
        <div className="ACEXP-Main">

          {/*        
        <h1 className={`${vehicle.WhyI_Text_Theme} secHeading font-bold`}>
          {vehicle.name}{" "}
        </h1> */}
          <h2 className={`${vehicle.Hero_Text_Theme} tracking-widest uppercase leading-loose pt-4`}>Why I BOught this Bike</h2>

          {/* <h4 className={vehicle.WhyITag_Text_Theme}> Why I Bought this Bike </h4> */}
        <div class="flex justify-center w-full h-full">

          <Carousel
            showThumbs={false}
            showStatus={false}

            infiniteLoop
            emulateTouch

            autoPlay={3000}
            keyBoardControl={true}
            useKeyboardArrows=""
            transitionTime={500}
            // axis="vertical"
            selectedItem={1}
          >
           <div className=" p-10 flex flex-col md:flex-row justify-center">
              <div class="w-full md:w-1/2 ">
                <img
                  className="relative h-full w-full"
                  src="/images/vehicleProduct13.png"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col bg-white">
                <div className="text-base font-normal leading-5 tracking-wide text-blue-900 pt-6 pb-2 text-left">

                  Dara Bendre-1
                </div>
                <div className=" text-gray-500 text-sm font-medium leading-4 pt-2 text-left">
                  Title, Designation, company
                </div>
                <div className="pt-10 text-gray-500 text-sm font-medium leading-4 pt-6 text-left">
                  I like this bike, I like this bike, I like this bike I like this
                  bike I like this bike I like this bike I like this bike I like
                  this bike I like this bike I like this bike I like this bike I
                  like this bike I like this bike I like this bike
                </div>
                <div className="text-yellow-300 text-4xl font-bold pt-20 pl-10 tracking-widest">
                  *****
                </div>
              </div>
            </div> 
            <div className=" p-10 flex flex-col md:flex-row justify-center">
              <div class="w-full md:w-1/2 ">
                <img
                  className="relative h-full w-full"
                  src="/images/vehicleProduct13.png"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col bg-white">
                <div className="text-base font-normal leading-5 tracking-wide text-blue-900 pt-6 pb-2 text-left">

                  Dara Bendre-1
                </div>
                <div className=" text-gray-500 text-sm font-medium leading-4 pt-2 text-left">
                  Title, Designation, company
                </div>
                <div className="pt-10 text-gray-500 text-sm font-medium leading-4 pt-6 text-left">
                  I like this bike, I like this bike, I like this bike I like this
                  bike I like this bike I like this bike I like this bike I like
                  this bike I like this bike I like this bike I like this bike I
                  like this bike I like this bike I like this bike
                </div>
                <div className="text-yellow-300 text-4xl font-bold pt-20 pl-10 tracking-widest">
                  *****
                </div>
              </div>
            </div>    
              </Carousel>
              </div>
        </div>
      </div>
    </section>
  );
}
