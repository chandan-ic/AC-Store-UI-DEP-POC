import Image from 'next/Image';
import SimilarBikeCard from './SimilarBikeCard'

export default function SimilarBikes({ vehicle }) {

	return (
		<div className="flex flex-col borderTest2 acContainer">
			<div>
			            <h1>{vehicle.name} </h1>
			            <h2> {vehicle.feature1} </h2>
			 </div>	
			<div className="w-full space-y-4 flex flex-col sm:flex-row sm:w-1/4 sm:space-x-4"> 
			 	<SimilarBikeCard />
				 <SimilarBikeCard />
			</div>
		</div>
		)

}