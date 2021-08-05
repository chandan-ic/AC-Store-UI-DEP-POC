import SimilarBikeCard from './SimilarBikeCard';

export default function SimilarBikeUI({ vehicle }) {

    return (

        <div  className={`${vehicle.theme} ${vehicle.Similar_Bg_Color} ACEXP-Outer  `}>
            <div className="ACEXP-Inner">
                <div className="ACEXP-Main">
                    <div>
                        <h2 className={`${vehicle.Hero_Text_Theme} tracking-widest uppercase leading-loose pt-4`}> {vehicle.Similar_Section_Tag_line}</h2>
                    </div>
                    <div className="pt-6 sm:pt-8 sm:justify-start flex flex-col flex-wrap sm:flex-row text-center gap-4">
                        {
                            vehicle.Similar_Products.map((smBike, i) => (
                                <SimilarBikeCard similar={smBike} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

