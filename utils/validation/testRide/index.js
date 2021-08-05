import { useTranslation } from "next-i18next";
import * as yup from "yup";

export const trPincodeFormschema = () => {
  const { t } = useTranslation(["testRide"]);
  return yup.object().shape({
    pincode: yup
      .string()
      .required(t("testRide:validation.pincodeRequired"))
      .matches(/^[0-9]+$/, t("testRide:validation.pincodeInvalid"))
      .min(6, t("testRide:validation.pincodeLength"))
      .max(6, t("testRide:validation.pincodeLength")),
  });
};

export const trLocationFormschema = () => {
  const { t } = useTranslation(["error"]);
  return yup.object().shape({
    address: yup
      .string()
      .required(t("testRide:validation.addressRequired"))
      .matches(
        /^([\s._]?[a-zA-Z_0-9]+[.,-/]?)+$/,
        t("testRide:validation.specialChar")
      ),
    pincode: yup
      .string()
      .required(t("testRide:validation.pincodeRequired"))
      .matches(/^[0-9]+$/, t("testRide:validation.pincodeInvalid"))
      .min(6, t("testRide:validation.pincodeLength"))
      .max(6, t("testRide:validation.pincodeLength")),
  });
};

export const trContactFormSchema = () => {
  const { t } = useTranslation(["error"]);
  return yup.object().shape({
    customerFirstName: yup
      .string()
      .required(t("testRide:validation.firstNameRequired"))
      .matches(/^(?=.*\S).+$/, t("testRide:validation.whiteSpace"))
      .matches(
        /^((?!<("[^"]*?"|'[^']*?'|[^'">])*>).)*$/,
        t("testRide:validation.firstNameInvalid")
      ),
    customerLastName: yup
      .string()
      .required(t("testRide:validation.lastNameRequired"))
      .matches(/^(?=.*\S).+$/, t("testRide:validation.whiteSpace"))
      .matches(
        /^((?!<("[^"]*?"|'[^']*?'|[^'">])*>).)*$/,
        t("testRide:validation.lasttNameInvalid")
      ),

    customerPhone: yup
      .string()
      .required(t("testRide:validation.mobileRequired"))
      .min(10, t("testRide:validation.mobileLength"))
      .max(10, t("testRide:validation.mobileLength"))
      .matches(/^[6789]\d{9}$/, t("testRide:validation.mobileInvalid")),

    customerEmail: yup
      .string()
      .email(t("testRide:validation.emailInvalid"))
      .required(t("testRide:validation.emailRequired")),
    customerAlternatePhone: yup
      .string()
      .matches(/^[0-9]*$/, t("testRide:validation.phoneInvalid"))
      .test(
        "len",
        t("testRide:validation.phoneLength"),
        (val) => val.toString().length === 0 || val.toString().length === 10
      )
      .matches(/^[6789]\d{9}$/, {
        message: t("testRide:validation.phoneInvalid"),
        excludeEmptyString: true,
      }),
    drivingLicenceNo: yup
      .string()
      .required(t("testRide:validation.dlRequired"))
      .test(
        "len",
        t("testRide:validation.dlInvalid"),
        (val) => val.toString().length === 16
      )
      .matches(/^([\s._]?[a-zA-Z0-9_])+$/, t("testRide:validation.dlInvalid")),
  });
};

export const trContactFormLicenseSchema = () => {
  const { t } = useTranslation(["error"]);
  return yup.object().shape({
    customerAlternatePhone: yup
      .string()
      .matches(/^[0-9]*$/, t("testRide:validation.phoneInvalid"))
      .test(
        "len",
        t("testRide:validation.phoneLength"),
        (val) => val.toString().length === 0 || val.toString().length === 10
      )
      .matches(/^[6789]\d{9}$/, {
        message: t("testRide:validation.phoneInvalid"),
        excludeEmptyString: true,
      }),
    drivingLicenceNo: yup
      .string()
      .required(t("testRide:validation.dlRequired"))
      .test(
        "len",
        t("testRide:validation.dlInvalid"),
        (val) => val.toString().length === 16
      )
      .matches(/^([\s._]?[a-zA-Z0-9_])+$/, t("testRide:validation.dlInvalid")),
  });
};
