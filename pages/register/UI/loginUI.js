import { Button, TextBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React from "react";
export default function LoginUI({
  customerEmail,
  password,
  loginRequest,
  callEmail,
  callPassword,
  selected,
  handleClick,
}) {
  const { t } = useTranslation(["register", "common"]);
  const handleChangeEmail = (val) => {
    callEmail(val);
  };
  const handleChangePassword = (val) => {
    callPassword(val);
  };
  const callSelect = () => {
    handleClick();
  };
  const callLogin = () => {
    loginRequest();
  };
  return (
    <section className="theme-autocomm acSec bg-default border-2 border-theme">
      <div className="container ">
        <div className="mb-8 md:mb-0 flex flex-col lg:flex-row w-full sm:mt-0 mt-20 place-self-center justify-between">
          <div className="w-full lg:w-3/5 mt-8  lg:mt-16 md:mt-4">
            <div>
              <h1 className="font-bold">{t("register:pageHeaders.login")}</h1>
              <h3 className="text-sm md:text-lg">
                {t("register:pageHeaders.signup-explore")}
              </h3>
              <img className="w-full" src="/images/navImg.png" />
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-2/5 lg:mt-20 md:ml-20 lg:ml-10 ">
            <form>
              <div className="md:mt-8 lg:mt-20">
                <div className="lg:mt-5">
                  <TextBox
                    title="{t('register:labels.userName')}"
                    option="(required)"
                    placeholder="{t('register:placeHolder.userName')}"
                    value={customerEmail}
                    handleChange={(val) => handleChangeEmail(val)}
                    name="email"
                    //error={errors.customerName.message}
                    // reference={register}
                  />
                </div>

                <div className="lg:mt-5">
                  <TextBox
                    title="{t('register:labels.password')}"
                    option="(required)"
                    placeholder="{t('register:placeHolder.password')}"
                    value={password}
                    handleChange={(val) => handleChangePassword(val)}
                    name="password"
                    //error={errors.customerName.message}
                    // reference={register}
                  />
                </div>

                <div className="mt-3">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="rememberme"
                      defaultChecked={selected}
                      onChange={callSelect}
                    />
                    <h5 className="text-gray-300">
                      {t("register:labels.login-remember")}{" "}
                    </h5>
                  </label>
                </div>
                <div className="mt-5">
                  <Button
                    disabled={!(customerEmail && password)}
                    type="button"
                    handleClick={callLogin}
                  >
                    {t("register:btn-labels.login-btnText")}{" "}
                  </Button>
                </div>
                <div className="flex flex-row justify-between">
                  {/* <div className="mt-3">
                                        <Link href="#" >
 <a className="w-33 border-1 border-transparent rounded hover:border-gray-500  focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">{t('register:login-otpLink')}</a>

</Link>                                   
 </div> */}
                  <div className="inline-flex mt-3 items-center ">
                    <div>
                      <img
                        className="h-4 w-4 "
                        src="/images/passwordIcon1.png"
                      />
                    </div>
                    {/* <Link href="/register/forgotpassword">
                                            <a className="w-33 border-1 border-transparent rounded hover:border-gray-500  focus:outline-none text-yellow-500 text-sm py-1.5 px-5 bg-gray-100 hover:bg-yellow-400 hover:text-gray-700 hover:shadow-lg flex items-center transition-colors duration-1000 ease-out uppercase">{t('register:login-fPassword')}</a>
                                        </Link> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
