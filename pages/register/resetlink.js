import { Button, TextBox } from "components/Common/Controls";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { resetPasswordRequest } from "../../components/Register/store/userActions";

export default function ResetPassword() {
  const customerPhone = useSelector((state) => state.user.customerPhone);
  const { t } = useTranslation(["register", "common"]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const callUpdatePassword = () => {
    var data = JSON.stringify({
      phone: customerPhone,
      resetPassword: password,
      confirmPassword: confirmCassword,
    });
    dispatch(resetPasswordRequest(data));
  };

  return (
    <section className="theme-autocomm acSec bg-default border-2 border-theme">
      <div className="container ">
        <form>
          <div className="block m-auto w-full md:w-1/2  md:border-2 md:border-gray-400">
            <h2 className="font-semibold md:mt-10 md:ml-32">
              {t("register:labels.new-password")}
            </h2>
            <div className="mt-8 md:ml-32">
              <TextBox
                title=" New Password"
                option="(required)"
                placeholder="Enter Password"
                type="password"
                value={password}
                handleChange={(e) => handleChange(e)}
                name="password"
                //error={errors.customerName.message}
                // reference={register}
              />
            </div>

            <div className="mt-8 md:ml-32">
              <TextBox
                title=" Comfirm  New Password"
                option="(required)"
                placeholder="Re-Enter Password"
                type="password"
                value={confirmPassword}
                handleChange={(e) => handleChangePassword(e)}
                name="password"
                //error={errors.customerName.message}
                // reference={register}
              />
            </div>
            {confirmPassword && confirmPassword !== password ? (
              <span className="text-red-600 text-xs  md:ml-32">
                {t("register:validation.mismatch")}
              </span>
            ) : (
              ""
            )}
            <div className="mt-10 text-center md:mb-20 md:ml-32">
              <Button
                disabled={!(password && confirmPassword)}
                handleClick={callUpdatePassword}
              >
                {t("register:btn-labels.update-btn")}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
