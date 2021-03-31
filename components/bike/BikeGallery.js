import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);


export default function BikeGallery({vehicle}) {
    const images = [
  { url: "images/WhyIBought-bg.png" }
];


    return (
       <div className="relative">
           
           <div className="pt-20 pl-20 pr-20 absolute">
            <h1>{vehicle.name} </h1>
            <h2> {vehicle.feature1} </h2>
        </div>

<div>       
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000} >

    <div data-src="/images/WhyIBought-bg.png" />
    <div data-src="/images/WhyIBought-bg.png" />
    <div data-src="/images/WhyIBought-bg.png" />
  </AutoplaySlider>   
  </div> 
       </div>
    )
}