import { useTranslation } from "next-i18next";
import Image from 'next/image';

const BikeActionsCard = ({vehicle,handleOnRoad,handleTestRide,handleFinance}) => {
    const { t } = useTranslation(["bike", "common"]);

    const handleONClick = (e) => {
        handleOnRoad(e.target.value)
    }
    const handleTestClick = (e) => {
        handleTestRide(e.target.value)
    }
    const handleFinanceClick = (e) => {
        handleFinance(e.target.value)
    }

    return (
        <div className={`${vehicle.theme} ${vehicle.Action_Bg_Color} AC-Section-Container  flex flex-col lg:justify-between`}  >

            <div className="h-1/6 pp-sec-header">
                <h1 className={`${vehicle.Action_Text_Theme} secHeading font-bold`}>{vehicle.name} </h1>
                <h4 className={vehicle.ActionTag_Text_Theme}> {vehicle.Action_Section_Tag_line} </h4>
            </div>
            <div className="flex h-full flex-col items-center justify-center sm:flex-row">
                <div className="w-full h-50vh relative sm:w-1/2 ">
                    <Image layout="fill" objectFit='contain' src={`${vehicle.Technical_Specification_Image}`} />
                </div>
                <div className="w-full sm:w-1/2 flex items-center justify-center lg:flex-grow pb-4">
                    <div className=" justify-center w-full  flex flex-wrap lg:flex-row  ">
                        <div className="   flex flex-col p-1 items-end md:h-14 lg:h-48 hover:shadow-2xl sm:mt-2">
                            <img className="  w-14 lg:w-32 md:w-24 m-auto" objectFit='contain' src="/images/Check-Price.png" />
                            <button className="modelButtonInverse justify-end" value={vehicle.ModelCode} onClick={handleONClick}>{t("bike:onRoadPriceLabel")}</button>
                        </div>
                        <div className="  flex flex-col md:h-36 lg:h-48 p-1 items-end sm:mt-2  hover:shadow-2xl">
                            <img className=" w-14 md:w-24 m-auto" objectFit='contain' src="/images/bikeIcon.png" />
                            <button className="modelButtonInverse justify-end" value={vehicle.ModelCode} onClick={handleTestClick}>{t("bike:testRideLabel")}</button>
                        </div>
                        <div className="  flex flex-col p-1 items-end md:h-36 lg:h-48 sm:mt-2  hover:shadow-2xl">
                            <img className=" w-14 md:w-28 m-auto " objectFit='contain' src="/images/finance-eligibility-v1.png " />
                            <button className=" modelButtonInverse justify-end" value={vehicle.ModelCode} onClick={handleFinanceClick}>{t("bike:financeCheckLabel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BikeActionsCard;