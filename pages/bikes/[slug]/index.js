//import Scrollspy from 'react-scrollspy'
import BikeActions from '../../../components/bike/bikeactions';
import BikeColors from '../../../components/bike/bikeColors';
import BikeFeatures1 from '../../../components/bike/bikefeatures1';
import BikeFeatures2 from '../../../components/bike/bikefeatures2';
import BikeHero from '../../../components/bike/bikehero';
import BikeGallery from '../../../components/bike/BikeGallery';
import SimilarBikes from '../../../components/bike/SimilarBikes';
import TechSpecs from '../../../components/bike/TechSpecs';
import WhyIBought from '../../../components/bike/whyIbought';
import WhyKhivraj from '../../../components/bike/whyKhivraj';

import { server, localServer } from '../../../config'


const bikes = ({ vehicle }) => {
  // const router = useRouter()
  // const { slug } = router.query
  return (

    <div className="flex w-screen acSecH">
      {/*}  <Scrollspy 
				        className="scrollspy pt-40" items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } 
				        currentClassName="isCurrent">
				        <li><a href="#section-1">Overview</a></li>
				        <li><a href="#section-2">Get Started</a></li>
				        <li><a href="#section-3">Features</a></li>
				        <li><a href="#section-4">Colors</a></li>
				        <li><a href="#section-5">Gallery</a></li>
				      </Scrollspy>
            */ }

      <div className="flex w-screen">
        <div className="pt-12">
          <section id="section-1" className="w-screen">
            <BikeHero vehicle={vehicle} />
          </section>
          <section id="section-2" className="w-screen ">
            <BikeActions vehicle={vehicle} />
          </section>
          <section id="section-3" className="w-screen">
            <BikeFeatures1 vehicle={vehicle} />
          </section>
          <section id="section-4" className="w-screen ">
            <BikeColors vehicle={vehicle} />
          </section>
          <section id="section-5" className="w-screen ">
            <BikeGallery vehicle={vehicle} />
          </section>
          <section id="section-5" className="w-screen ">
            <WhyKhivraj vehicle={vehicle} />
          </section>
          <section id="section-6" className="w-screen ">
            <WhyIBought vehicle={vehicle} />
          </section>
          <section id="section-7" className="w-screen ">
            <TechSpecs vehicle={vehicle} />
          </section>
          <section id="section-8" className="w-screen ">
            <SimilarBikes vehicle={vehicle} />
          </section>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${localServer}/api/vehicle/${context.params.slug}`)
  const vehicle = await res.json()
  return {
    props: {
      vehicle,
    },
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`${localServer}/api/vehicle`)
  const vehicles = await res.json()
  const slugs = vehicles.map((vehicle) => vehicle.slug)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))
  return {
    paths,
    fallback: false,
  }
}

export default bikes;




{/* Scroll snap is working fine. Scroll spy click is working but iscurrent link not working <div className="w-10 borderTest">
			<Scrollspy 
        className="scrollspy" items={ ['slide-1', 'slide-2', 'slide-3','slide-4'] } 
        currentClassName="is-current" className="pt-40">
			  <li><a href="#slide-1">slide 1</a></li>
			  <li><a href="#slide-2">slide 2</a></li>
			  <li><a href="#slide-3">slide 3</a></li>
			  <li><a href="#slide-4">slide 4</a></li>
			  <li><a href="#slide-5">slide 5</a></li>

			</Scrollspy>
	 </div>
	<div className="w-full borderTest2"> 
<div className="">
    <section id="slide-1" className="">
      <h2 className="pt-20">slide 1</h2>
    </section>
    <section id="slide-2" className="">
      <h2  className="pt-20">slide 2</h2>
    </section>
    <section id="slide-3" className="">
      <h2 className="pt-20">slide 3</h2>
    </section>
    <section id="slide-4" className="">
      <h2 className="pt-20">slide 4</h2>
    </section>
    <section id="slide-5" className="">
      <h2 className="pt-20">slide 5</h2>
    </section>
  </div>

	</div> */}



