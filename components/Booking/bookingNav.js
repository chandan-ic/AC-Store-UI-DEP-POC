import { useTranslation } from "next-i18next";
import { useSelector } from 'react-redux';

export default function BookingNav() {
  const { currentStep } = useSelector((state) => state.booking);

  const { t } = useTranslation(["booking", "common", "error"]);

  const getBullet = (num, head, text) => {
    if (currentStep > num) {
      return (
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 58 58"
            fill="none"
            className="h-9"
          >
            <path
              d="M58 29C58 45.0163 45.0163 58 29 58C12.9837 58 0 45.0163 0 29C0 12.9837 12.9837 0 29 0C45.0163 0 58 12.9837 58 29Z"
              fill="#F9AE1E"
            />
            <path
              d="M42 20L24.8125 37L17 29.2727"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-center absolute -left-20 mt-2 w-52">
            <h2 className="font-bold">{head}</h2>
            <p>{text}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="relative">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
          <ellipse
            cx="10"
            cy="9.5"
            rx="10"
            ry="9.5"
            fill={currentStep == num ? "#F9AE1E" : "#C4C4C4"}
          />
        </svg>
        <div className="text-center absolute -left-20 mt-2 w-52">
          <h2 className="font-bold">{head}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container px-20 ">
      <div>
        <div className=" py-5 border-t-2 h-24 relative mt-10 mx-10">
          <div className=" absolute w-full -top-3">
            <div className=" items-center justify-between hidden md:flex ">
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
        </div>
      </div>
    </div>
  );
}
