import { Button, TextBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordOtpRequest } from "../../components/Register/store/userActions";
import { userActions } from "../../components/Register/store/userSlice";

export default function ForgotPassword() {
  const customerPhone = useSelector((state) => state.user.customerPhone);

  const dispatch = useDispatch();
  const { t } = useTranslation(["register", "common"]);

  const handleChangePhone = (e) => {
    dispatch(userActions.setCustomerPhone(e.target.value));
  };

  const callResetPassword = () => {
    var data = JSON.stringify({
      phone: customerPhone,
    });
    dispatch(forgotPasswordOtpRequest(data));
  };

  return (
    <section className="theme-autocomm acSec bg-default border-2 border-theme">
      <div className="container">
        <div className="block m-auto w-full  lg:w-1/2  border-yellow-400 border-2 p-5">
          <h2 className="font-semibold mt-4 lg:mt-20 md:ml-32">
            {t("register:pageHeaders.login-fPassword")}
          </h2>
          <form>
            <div className="mt-8 md:ml-32 ">
              <TextBox
                title="Mobile Number"
                option="(required)"
                placeholder="Enter Mobile Number"
                value={customerPhone}
                handleChange={(e) => handleChangePhone(e)}
                name="Mobile"
                //error={errors.customerName.message}
                // reference={register}
              />
            </div>

            <div className="mt-10 text-center md:ml-32 ">
              <Button disabled={!customerPhone} handleClick={callResetPassword}>
                {t("register:btn-labels.reset-btn")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
