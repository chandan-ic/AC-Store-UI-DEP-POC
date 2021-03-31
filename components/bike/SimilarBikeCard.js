export default function SimilarBikeCard({vehicle}) {
    return (
	<div class="card  flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div class="prod-title">
        <p class="text-2xl uppercase text-gray-900 font-bold">
        		Similar BIke
        </p>
        <p class="uppercase text-sm text-gray-400">
				Similar BIke Description
        </p>
      </div>
      <div class="prod-img">
           <img className="w-96" src="/images/vehicleProduct10.png"
              />
      </div>
      <div class="prod-info grid gap-10">
        <div class="flex flex-col md:flex-row items-center text-gray-900">
          <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
            Explore</button>
        </div>
      </div>
    </div>
	)
}