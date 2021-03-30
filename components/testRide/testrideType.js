export default function TestRideType() {
    return (
        <div className="container">
            <div className="w-full">
                <label className="text-xs">TestRide Type</label>
                <select className="mt-1 w-full md:w-4/5  block p-2 px-3 border-2 text-sm
           border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                     >
                    <option className="bg-white text-gray-100" value="">Enter Type</option>
                </select>
            </div>
        </div>
    )
}