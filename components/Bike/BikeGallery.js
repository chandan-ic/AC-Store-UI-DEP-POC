import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BikeGallery({ deviceType, vehicle }) {
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
    <div
      className={`${vehicle.theme} ${vehicle.Gallery_Bg_Color} flex flex-col`}
    id="Gallery">
      <div className="pp-sec-header absolute z-10">
        {/* <h1 className={`${vehicle.Gallery_Text_Theme} secHeading font-bold`}>
          {vehicle.name}{" "}
        </h1> */}
      <h1 className={`${vehicle.Hero_Text_Theme} tracking-widest leading-loose pt-8`}>{vehicle.Gallery_Section_Tag_line}{" "}</h1>

        {/* <h4 className={vehicle.GalleryTag_Text_Theme}>
          {" "}
          {vehicle.Gallery_Section_Tag_line}{" "}
        </h4> */}
      </div>

      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerclassName="border-2 border-gray-100"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListclassName="custom-dot-list-style"
        itemclassName=""
      >
        {vehicle &&
          vehicle.Gallery.map((gi, i) => (
            <div className="">
              <img className="w-full" src={`${gi}`} />{" "}
            </div>
          ))}
      </Carousel>
    </div>
  );
}