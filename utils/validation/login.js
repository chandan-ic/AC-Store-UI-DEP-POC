import { useTranslation } from "next-i18next";
import * as yup from "yup";

export const phoneFormSchema = () => {
  const { t } = useTranslation(["error", "register", "common"]);
  return yup.object().shape({
    Mobile: yup
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
  });
};

export const resetFormSchema = () => {
  const { t } = useTranslation(["error"]);
  return yup.object().shape({
    newpassword: yup
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
    confirmpassword: yup.string().required(t("register:validation.cpassword")),
  });
};

export const loginFormSchema = () => {
  const { t } = useTranslation(["error"]);
  return yup.object().shape({
    email: yup.string().when("isEmailValue", {
      is: "true",
      then: yup
        .string()
        .required(t("register:validation.userName"))
        .email(t("register:validation.invalidUserName"))
        .matches(
          /^[A-Za-z][a-zA-Z0-9_\.\-][A-Za-z0-9]+\@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9]{2,4})|(^[6789]\d{9})+$/,
          {
            message: "showError",
            excludeEmptyString: false,
          }
        ),
      otherwise: yup
        .string()
        .required(t("register:validation.userName"))
        .matches(/^[6789]\d{9}$/, t("register:validation.invalidUserName")),
    }),
    // password: yup
    //   .string()
    //   .required(t("register:validation.password"))
    //   .min(8, t("register:validation.minPassword"))
    //   .max(20, t("register:validation.maxPassword"))
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    //     {
    //       message: "showError",
    //       excludeEmptyString: false,
    //     }
    //   ),
  });
};
