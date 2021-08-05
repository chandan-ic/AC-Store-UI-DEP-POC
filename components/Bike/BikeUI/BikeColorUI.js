import { useSelector } from "react-redux";
import Image from 'next/image';

export default function BikeColorSelectorCard({ vehicle, handleToggle }) {
    const buttonType = useSelector((state) => state.bike.buttonType)

    const toggleMe = (value) => {
        handleToggle(value)
    }
    return (
<section id="Colors" className={`${vehicle.theme}  bg-bikeColorBG ACEXP-Outer`}>
        <div className={`${vehicle.theme} ACEXP-Inner`}  >
        <div className="ACEXP-Main">

            <div className="">
                {/* <h1 className={`${vehicle.Color_Text_Theme} secHeading font-bold`}>{vehicle.name} </h1> */}
                <h1 className={`${vehicle.Hero_Text_Theme} uppercase tracking-widest leading-loose pt-8`}> {vehicle.Color_Section_Tag_line}</h1>
                <h4 className={vehicle.ColorTag_Text_Theme}>  </h4>
            </div>
            <div className=" h-60vh w-full flex relative justify-center">
                <Image layout="fill" objectFit='contain' src={buttonType === 'Color1' || !vehicle.Color2_Code ? vehicle.Colors_1_Image : (buttonType === 'Color2' ? vehicle.Colors_2_Image : vehicle.Colors_3_Image)} alt={vehicle.name} />
            </div>


            <div className=" flex flex-col sm:flex-row md:h-2/6 lg:h-1/6 pp-container pt-2 justify-center">
                <div className=" md:4/6 sm:w-5/6 flex lg:pl-40  pl-6 justify-center">
                    <div className=" flex  flex-col ">
                        <div className=" text-center px-4" onClick={() => toggleMe('Color1')} >
                            <img className={`${buttonType === 'Color1' ? "border-4  border-gray-800 inline-flex w-10 h-10 rounded-full focus:outline-none" : " inline-flex w-10 h-10  rounded-full focus:outline-none border-2 border-gray-300"}`} src={`${vehicle.Color1_Code}`} />
                            <h5 className=" font-semibold ">
                                {vehicle.Colors_1}
                            </h5>
                        </div>
                    </div>
                    <div className=" flex  flex-col">
                        {vehicle.Color2_Code &&
                            <div className=" text-center px-4" onClick={() => toggleMe('Color2')}>
                                <img className={`${buttonType === 'Color2' ? "border-4  border-gray-800 inline-flex w-10 h-10  rounded-full focus:outline-none" : "border-2 border-gray-400 inline-flex w-10 h-10  rounded-full focus:outline-none"}`} src={`${vehicle.Color2_Code}`} />
                                <h5 className=" font-semibold ">
                                    {vehicle.Colors_2}
                                </h5>
                            </div>
                        }
                    </div>
                    <div className=" flex  flex-col ">
                        {vehicle.Color3_Code &&
                            <div className=" text-center px-4" onClick={() => toggleMe('Color3')}>
                                <img className={`${buttonType === 'Color3' ? "border-4  border-gray-800 inline-flex w-10 h-10  rounded-full focus:outline-none" : "border-2 border-gray-400 inline-flex w-10 h-10 rounded-full focus:outline-none"}`} src={`${vehicle.Color3_Code}`} />
                                <h5 className=" font-semibold ">
                                    {vehicle.Colors_3}
                                </h5>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
    )
}


