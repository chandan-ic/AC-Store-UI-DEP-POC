import { useTranslation } from "next-i18next";
import * as yup from "yup";

const FinanceSchema = () => {
  const { t } = useTranslation(["finance", "common", "error", "testRide"]);

  return yup.object().shape({
    likelyPurchaseDate: yup
      .string()
      .required(t("finance:error.error-purchase")),
    firstName: yup
      .string()
      .required(t("testRide:validation.firstNameRequired"))
      .matches(/^(?=.*\S).+$/, t("testRide:validation.whiteSpace"))
      .matches(
        /^((?!<("[^"]*?"|'[^']*?'|[^'">])*>).)*$/,
        t("testRide:validation.firstNameInvalid")
      ),
    lastName: yup
      .string()
      .required(t("testRide:validation.lastNameRequired"))
      .matches(/^(?=.*\S).+$/, t("testRide:validation.whiteSpace"))
      .matches(
        /^((?!<("[^"]*?"|'[^']*?'|[^'">])*>).)*$/,
        t("testRide:validation.lastNameInvalid")
      ),
    dateOfBirth: yup.string().required(t("finance:error.error-dob")),

    mobileNo: yup
      .string()
      .required(t("common:validation.mobileRequired"))
      .matches(/^[0-9]*$/, t("common:validation.mobileInvalid"))
      .test(
        "len",
        t("common:validation.mobileLength"),
        (val) => val.toString().length === 0 || val.toString().length === 10
      )
      .matches(/^[6789]\d{9}$/, {
        message: t("common:validation.mobileInvalid"),
        excludeEmptyString: true,
      }),
    emailId: yup
      .string()
      .email(t("testRide:validation.emailInvalid"))
      .required(t("testRide:validation.emailRequired")),
    monthlyIncomeDetails: yup
      .string()
      .required(t("finance:error.error-Income"))
      .matches(/^[0-9.,]*$/, t("finance:error.invalid-Income")),
    pincode: yup
      .string()
      // .required(t("testRide:validation.pincodeRequired"))
      .matches(/^[0-9]+$/, t("testRide:validation.pincodeInvalid"))
      .min(6, t("testRide:validation.pincodeLength"))
      .max(6, t("testRide:validation.pincodeLength")),
    // addressLine1: yup.string().required(t("finance:error.error-addr1")),
    // addressLine2: yup.string().required(t("finance:error.error-addr2")),
    // landmark: yup.string().required(t("finance:error.error-landmark")),
    // companyName: yup.string().required(t("finance:error.error-company")),
    aadhar: yup
      .string()
      // .required(t("finance:error.error-AadharNo"))
      .matches(/^[0-9]{12}$/, {
        message: t("finance:error.error-aadhar"),
        excludeEmptyString: false,
      }),
    pan: yup
      .string()
      // .required(t("finance:error.error-Pancard"))
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, {
        message: t("finance:error.invalid-Pancard"),
        excludeEmptyString: false,
      }),
  });
};
export default FinanceSchema;
