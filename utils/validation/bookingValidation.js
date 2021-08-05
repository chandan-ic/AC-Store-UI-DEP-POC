import { useTranslation } from "next-i18next";
import * as yup from "yup";

export const bkPincodeFormschema = () => {
  const { t } = useTranslation(["booking"]);
  return yup.object().shape({
    pincode: yup
      .string()
      .required(t("booking:validation.pincodeRequired"))
      .matches(/^[0-9]+$/, t("booking:validation.pincodeInvalid"))
      .min(6, t("booking:validation.pincodeLength"))
      .max(6, t("booking:validation.pincodeLength")),
  });
};

