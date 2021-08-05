import { useTranslation } from "next-i18next";
import * as yup from "yup";

const regCustomerSchema = () => {
  const { t } = useTranslation(["error"]);
  return yup.object().shape({
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
    customerPhone: yup
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
    customerEmail: yup
      .string()
      .email(t("testRide:validation.emailInvalid"))
      .required(t("testRide:validation.emailRequired")),
    password: yup
      .string()
      .required(t("register:validation.password"))
      .min(8, t("register:validation.minPassword"))
      .max(20, t("register:validation.maxPassword"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        {
          message: "showError",
          excludeEmptyString: false,
        }
      ),
    confirmPassword: yup.string().required(t("register:validation.cpassword")),
  });
};
export default regCustomerSchema;
