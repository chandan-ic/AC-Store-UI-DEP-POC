import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function AboutUs({ deviceType }) {
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
    <section className=" bg-primary">
      <div className="pt-20 pb-20 container bg-gray-50 ">
        <div className="p-2 mt-4">
          <h1 className="secHeading font-bold border-b-4  text-theme-inverse border-theme">
            ABOUT US
          </h1>
        </div>
        <div className="mt-4 w-full flex-row flex justify-between tracking-wider leading-relaxed">
          <div className="w-2/5">
            {" "}
            <img
              className="w-96 m-auto"
              src="/images/khivrajlogo.png"
              alt="..."
            />
          </div>
          <div className="w-3/5">
            <h3 className="font-LibreFranklin font-semibold">OUR MISSION</h3>
            <h4 className="pt-6">
              “To become India's most reputed automotive dealer by serving
              customers in innovative ways that will enrich their vehicle drive
              and to be the preferred employer for staff in the automotive
              dealership market.”
            </h4>
          </div>
        </div>
        <div className="pt-8">
          <div className="pt-4 flex-col flex justify-between tracking-wider leading-relaxed">
            <h3 className="font-LibreFranklin font-semibold">WHO ARE WE?</h3>
            <h4 className="pt-6">
              Endorsed by you, the group is a family owned family managed people
              run organization. Spread over four generations, where in 3
              generations work together under the stewardship Late Sri. Devraj
              Chorida S/o Late Sri. Khivrajji Chordia
            </h4>
          </div>
          <div className="pt-4 flex-col flex justify-between tracking-wider leading-relaxed">
            <h3 className="font-LibreFranklin font-semibold">
              WHAT MATTERS TO US?
            </h3>
            <h4 className="pt-6">
              At Khivraj Motors we believe in upholding Strong Business Ethics &
              the Human factor. Our company strongly believes that, the people
              make an organisation and that its well being depends on the
              commitment & growth of its people
            </h4>
            <h4 className="pt-6">
              Here at Khivraj Motors, we believe in offering an open field to
              explore, create & gather knowledge, skills & experience to all our
              staff along with the easy reach for a customer for the right
              product, price & support.
            </h4>
          </div>

          <div className="pt-4 flex-col flex justify-between tracking-wider leading-relaxed">
            <h3 className="font-LibreFranklin font-semibold">WHAT WE DO?</h3>
            <h4 className="pt-6">
              From a modest beginning of Hire Purchase, Real estate, Aggregation
              of lands, Property development and Management, diversified into
              automobile dealership representing every sphere from Motorcycles,
              Passenger Cars, Small Commercial Vehicles, LCV, MUV, HCV, trucks &
              busses
            </h4>
          </div>
          <div className="pt-4 flex-col flex justify-between tracking-wider leading-relaxed">
            <h3 className="font-LibreFranklin font-semibold">HOW WE DO IT?</h3>
            <h4 className="pt-6">
              Handed down by the founders, entrenched into our system to discern
              right from wrong, freedom of expression and the encouragement
              given to take the risks that are rewarded rightfully, along with
              team spirit, team work & total transparency between all
              Departments of the Organisation allows us to bring out the best in
              us and for our customer
            </h4>
          </div>
          <div className="pt-4 flex-col flex justify-between tracking-wider leading-relaxed">
            <h3 className="font-LibreFranklin font-semibold">
              WHERE WE STAND TODAY?
            </h3>
            <h4 className="pt-6">
              After 60 Years of existence, this is where we proudly stand today
              and most importantly have the urge to serve better and grow.
            </h4>
            <div className="w-full flex flex-wrap justify-around mt-10">
              <div>
                <div className="w-96 border-b-4 border-theme">
                  <div className=" text-theme-inverse">
                    <h1 className="mb-4 font-blod text-7xl text-center hover:text-black">
                      9
                    </h1>
                  </div>
                </div>
                <h5 className="text-xs text-center mt-4">
                  SHOWROOMS & SERVICE FACILITIES
                </h5>
              </div>
              <div>
                <div className="w-96 border-b-4 border-theme">
                  <div className=" text-theme-inverse">
                    <h1 className="mb-4 font-blod text-7xl text-center hover:text-black">
                      8.5L
                    </h1>
                  </div>
                </div>
                <h5 className="text-xs text-center mt-4">BIKES SOLD</h5>
              </div>
              <div>
                <div className="w-96 border-b-4 border-theme">
                  <div className=" text-theme-inverse">
                    <h1 className="mb-4 font-blod text-7xl text-center hover:text-black">
                      1.2M
                    </h1>
                  </div>
                </div>
                <h5 className="text-xs text-center mt-4">BIKES SERVICED</h5>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <div className="mr-10">
                <div className="w-96 border-b-4 border-theme">
                  <div className=" text-theme-inverse">
                    <h1 className="mb-4 font-blod text-7xl text-center hover:text-black">
                      2.05M
                    </h1>
                  </div>
                </div>
                <h5 className="text-xs text-center mt-4">HAPPY CUSTOMERS</h5>
              </div>
              <div className="">
                <div className="w-96 border-b-4 border-theme">
                  <div className=" text-theme-inverse">
                    <h1 className="mb-4 font-blod text-7xl text-center hover:text-black">
                      650+
                    </h1>
                  </div>
                </div>
                <h5 className="text-xs text-center mt-4">EMPLOYEES</h5>
              </div>
            </div>
            <div className="pt-14 flex-col flex justify-between tracking-wider leading-relaxed">
              <h3 className="font-LibreFranklin font-semibold">LEADERSHIP</h3>
              <h4 className="pt-6">
                Founder: Late Sri Devraj Chordia S/o Late Sri Khivrajji Chordia
              </h4>
              <h4 className="pt-6">
                Generation 2: Mr Sainikraj Chordia, Mr Prafulchand Chordia, Mr
                Jethmull Chordia
              </h4>
              <h4 className="pt-6">
                Generation 3: Mr Pushpchand Chordia, Mr Vimal Chordia & Mr
                Arihant Chordia
              </h4>
            </div>
            <div className="mt-20">
              <img src="/images/khivraj-group.jpg" />
            </div>
            <div className="flex flex-col mt-10">
              <h1 className="text-4xl font-LibreFranklin font-bold text-center my-4 ">
                OUR <span className="text-theme-inverse">HISTORY</span>
              </h1>
              <div className="flex flex-col md:flex-row w-full bg-white  ">
                <div className="md:w-1/2">
                  <Carousel
                    swipeable={true}
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
                    itemclassName="carousel-item-padding-40-px"
                  >
                    <div className="w-full">
                      {" "}
                      <img className="w-full h-full" src="/images/about3.jpg" />
                    </div>

                    <div>
                      <img
                        className="w-full h-full"
                        src="/images/about-2.jpg"
                      />
                    </div>
                    <div>
                      <img className="w-full h-full" src="/images/about1.jpg" />
                    </div>
                  </Carousel>
                </div>
                <div className="md:w-1/2 ">
                  <div className="w-full flex ">
                    <div className="w-1/4 p-2 mt-2 ">
                      <h5 className="font-semibold mt-2">1.AWARDS</h5>
                      <h5 className="font-semibold mt-2">2.CSR</h5>
                      <h5 className=" font-semibold mt-2">3.OUTREACH</h5>
                    </div>
                    <div className="flex flex-col w-3/4 overflow-y-scroll h-96 ">
                      <div className=" mt-4">
                        <h1 className="font-LibreFranklin  font-semibold p-2">
                          {" "}
                          Awards
                        </h1>
                      </div>

                      <div className=" inline-flex items-center mt-7">
                        <img className="w-10 h-10" src="/images/awards.png" />
                        <h5 className="text-gray-500 ml-3 font-LibreFranklin">
                          HIGHEST SELLER OF Khivraj BIKES FOR THE YEAR 2015 IN
                          SOUTH INDIA
                        </h5>
                      </div>
                      <div className=" inline-flex items-center mt-8">
                        <img className="w-10 h-10" src="/images/awards.png" />
                        <h5 className="text-gray-500 ml-3 font-LibreFranklin">
                          HIGHEST SELLER OF KTM BIKES FOR THE YEAR 2015 IN SOUTH
                          INDIA
                        </h5>
                      </div>
                      <div className=" inline-flex items-center mt-8">
                        <img className="w-10 h-10" src="/images/awards.png" />
                        <h5 className="text-gray-500 ml-3 font-LibreFranklin">
                          HIGHEST SELLER OF BAJAJ BIKES AND ITS PRODUCTS IN
                          SOUTH INDIA FOR THE YEAR 2014 & 2015
                        </h5>
                      </div>
                      <div className=" mt-8">
                        <h5 className="text-theme-inverse text-2xl font-LibreFranklin">
                          Recognition
                        </h5>
                        <h6 className="text-base mt-2 font-LibreFranklin">
                          Khivraj has been regularly recognized as the best in
                          its class over a long period of time. Khivraj has
                          achieved major mile stones to become a power house in
                          Automobile Trade.
                        </h6>
                        <h6 className="text-base mt-4 font-LibreFranklin">
                          Khivraj had achieved “Best Dealer of the year 2008″ by
                          Bajaj Auto, for achieving excellent business growth
                          and customer satisfaction.
                        </h6>
                      </div>
                      <div className=" mt-8">
                        <h5 className="text-theme-inverse text-2xl font-LibreFranklin">
                          Lifetime Achievement award for Mr. DEVRAJ CHORDIA :
                        </h5>
                        <h6 className="text-base mt-4 font-LibreFranklin">
                          On this occasion, Mr. Devraj Chordia, “Anokha Person
                          of Nokha, Rajastan” was honored by FADA with a
                          Life-Time Achievement Award for his Pioneering work
                          and contribution to the promotion of Automobile Trade
                          And Social Welfare. The Award was given away by Mr. S
                          Yamazaki, MD, Toyota Kirloskar Motor Ltd.{" "}
                        </h6>
                        <h6 className="text-base mt-4 font-LibreFranklin">
                          #1 Force Motors Dealer “ALL OVER INDIA” for the year
                          2003-04 and in Karnataka since 1962 #1 Bajaj Auto
                          Dealer in South Zone for the year 1989-90 and in
                          Karnataka since 1967
                        </h6>{" "}
                      </div>

                      <div className=" mt-6">
                        <h1 className="font-LibreFranklin  font-semibold p-2">
                          {" "}
                          CSR
                        </h1>
                        <h6 className="text-base font-LibreFranklin mt-6">
                          KHIVRAJ GROUP is involved with multiple charitable
                          institutions to make this world better place for the
                          poor and downtrodden.
                        </h6>
                        <h6 className="text-base font-LibreFranklin mt-6">
                          WIND POWER: Khivraj Group has invested in Wind Power
                          2005 to meet social obligations for providing Green
                          Power and Environmental protection.
                        </h6>
                        <h6 className="text-base font-LibreFranklin mt-6">
                          The group has installed wind farms of 3.44 MW
                          capacities at an investment of 140mm annually. These
                          wind farms generate 8.94 million units.
                        </h6>
                      </div>
                      <div className="mb-4 mt-6">
                        <h1 className="mt-2 font-LibreFranklin  font-semibold p-2">
                          {" "}
                          Khivraj One
                        </h1>
                        <img cla="w-36 m-auto" src="/images/oneLogo.png" />
                        <h3 className="font-LibreFranklin text-center mt-4 ">
                          Khivraj One: Outreach, Nurture, Empower
                        </h3>
                        <h2 className="font-LibreFranklin mt-4 font-bold">
                          WHO ARE WE
                        </h2>
                        <h6 className="mt-6 text-base font-LibreFranklin">
                          KHIVRAJ ONE is an initiative by KHIVRAJ GROUP of
                          companies. It is a not for profit company registered
                          under section 8 of companies act 2013. The key focus
                          areas of KHIVRAJ ONE are HEALTH & EDUCATION for the
                          under privileged section of society both in urban and
                          rural areas
                        </h6>
                        <h2 className="font-LibreFranklin mt-4 font-bold">
                          OUR VISION
                        </h2>
                        <h6 className="mt-6 text-base font-LibreFranklin">
                          At KHIVRAJ ONE our vision is “To Outreach for the
                          Underprivileged Nurture them with necessary support &
                          ultimately Empower and enable them to stand on their
                          own”.
                        </h6>
                        <h2 className="font-LibreFranklin mt-4 font-bold">
                          OUR MISSION
                        </h2>
                        <h6 className="mt-6 text-base font-LibreFranklin">
                          To build and strengthen sustainable individual family,
                          Institutional and community initiatives for health,
                          education and all round development through
                          partnership at all levels in our work area.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
