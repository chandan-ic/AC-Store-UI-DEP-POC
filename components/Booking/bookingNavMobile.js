import { useTranslation } from "next-i18next";
import { useSelector } from 'react-redux';


export default function BookingNavMobile() {
  const { currentStep } = useSelector((state) => state.booking);
  const { t } = useTranslation(["booking", "common", "error"]);

  const getBullet = (num, head, text) => {
    if (currentStep > num) {
      return (
        <div className="text-center bg-yellow-200 p-5">
          <p className="font-bold">{head}</p>
        </div>
      );
    }
    return (
      <div
        className={`relative  p-5 ${
          currentStep === num ? " bg-yellow-500" : "bg-gray-100"
        }`}
      >
        <div className="text-center ">
          <p className="font-bold">{head}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container ">
      <div className=" items-center justify-between flex md:hidden ">
        <div>
          {getBullet(
            0,
            t("booking:labels.ProductDetails"),
            t("booking:labels.VariantandColor")
          )}
        </div>
        <div>
          {getBullet(
            1,
            t("booking:labels.DealerStore"),
            t("booking:labels.FindDealerStore")
          )}
        </div>
        <div>
          {getBullet(
            2,
            t("booking:labels.OrderReview"),
            t("booking:labels.OrderSummary")
          )}
        </div>
      </div>
    </div>
  );
}
