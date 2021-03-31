 import { server } from '../../../config'

import Link from 'next/link'
import { useRouter } from 'next/router'
import BikeActions from '../../../components/vehicle/bikeactions';
import BikeColorSelector from '../../../components/vehicle/bikecolorselector';
// import BikePgWhyKhivraj from '../../../components/vehicle/bikepgwhykhivraj';
import BikeFeatures1 from '../../../components/vehicle/bikefeatures1';
import BikeFeatures2 from '../../../components/vehicle/bikefeatures2';
import BikeHero from '../../../components/vehicle/bikehero';
import SimilarBikes from '../../../components/vehicle/similarbikes';
import TechSpecs from '../../../components/vehicle/techspecs';
import WhyIBought from '../../../components/vehicle/whyibought';
const vehicle = ({ vehicle }) => {
  // const router = useRouter()
  // const { slug } = router.query
  return (
    <>
      <BikeHero vehicle = {vehicle} />
      <BikeActions vehicle ={vehicle} />
      <BikeFeatures1 vehicle ={vehicle} />
      <BikeFeatures2 vehicle ={vehicle} />
      <BikeColorSelector vehicle ={vehicle} />
      {/* <BikePgWhyKhivraj vehicle ={vehicle}/> */}
      <WhyIBought vehicle ={vehicle} />
      <TechSpecs vehicle ={vehicle} />
      <SimilarBikes vehicle ={vehicle} />
    {/* <vehicle ={vehicle}/> */}
    </>
  )
}
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/vehicle/${context.params.slug}`)
  const vehicle = await res.json()
  return {
    props: {
      vehicle,
    },
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/vehicle`)
  const vehicles = await res.json()
  const slugs = vehicles.map((vehicle) => vehicle.slug)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))
  return {
    paths,
    fallback: false,
  }
}
export default vehicle