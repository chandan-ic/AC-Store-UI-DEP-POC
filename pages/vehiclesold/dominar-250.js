import Layout from "../../components/layout";
import BikeHero from "../../components/vehicle/bikehero";
import BikeActions from "../../components/vehicle/bikeactions";
import Bikefeatures1 from "../../components/vehicle/bikefeatures1";
import Bikefeatures2 from "../../components/dominar-250/bikefeatures2";
import Bikecolorselector from "../../components/vehicle/bikecolorselector";
import WhyKhivraj from "../../components/vehicle/whyKhivraj";
import WhyIBought from "../../components/vehicle/whyibought";
import TechSpecs from "../../components/vehicle/techspecs";
import SimilarBikes from "../../components/vehicle/similarbikes";
export default function dominar250() {
    return (
        <Layout >
            <div className="theme-dominar">
                <BikeHero />
                <BikeActions />
                <Bikefeatures1 />
                {/*<Bikefeatures2 />*/}
                <Bikecolorselector />
                <WhyKhivraj />
                <WhyIBought />
                <TechSpecs />
                <SimilarBikes />
            </div>
        </Layout>
    )

}