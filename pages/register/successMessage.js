import { loginActions } from "components/LoginUI/store/login-slice";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Router from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const successMessage = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation(["register", "common"]);
  const clickContinue = () => {
    dispatch(loginActions.setStatus("login-password"));
    Router.push("/register/login");
  };
  return (
    <section className="container min-h-screen pt-20 theme-autocomm border-2 border-theme">
      <div className="  md:mt-0  flex flex-col w-full  p-2 font-Montserrat md:mr-14">
        <h1 className="font-bold sm:text-4xl md:pt-10">
          {t("register:notify-messages.thank-you")}
        </h1>
        <h3 className="mt-6 tracking-normal text-2xl">
          {t("register:notify-messages.success-message")}
        </h3>
        <div className="md:mt-10 mt-5">
          <button
            onClick={clickContinue}
            className="focus:outline-none border-b-2 border-theme text-theme-inverse sm:text-lg"
          >
            {t("register:reg-links.continue-link")}{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["register", "common", "error"])),
  },
});

export default successMessage;
