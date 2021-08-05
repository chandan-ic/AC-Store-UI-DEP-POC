import ForgotPassword from "components/LoginUI/Forgotpassword";
import { Login as LoginScreen } from "components/LoginUI/Login";
import ResetPassword from "components/LoginUI/ResetPassword";
import { loginWithPasswordRequest } from "components/LoginUI/store/login-action";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../components/Register/store/userSlice";

const login = () => {
  const [selected, setSelected] = useState(false);
  const { customerEmail, customerPhone } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.login);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmail = (val) => {
    dispatch(userActions.setCustomerEmail(val));
  };
  const handlePassword = (val) => {
    setPassword(val);
  };
  const sumbitLogin = () => {
    var data = JSON.stringify({
      userName: customerEmail,
      password: password,
    });
    dispatch(loginWithPasswordRequest(data));
  };
  return (
    <div className="w-full">
      {status === "login-password" ? (
        <div>
          <LoginScreen
            customerEmail={customerEmail}
            password={password}
            selected={selected}
            callEmail={(val) => handleEmail(val)}
            callPassword={(val) => handlePassword(val)}
            handleClick={() => setSelected(!selected)}
            loginRequest={() => sumbitLogin()}
          />
        </div>
      ) : null}

      {status === "forgot-password" ||
      status === "login-otp" ||
      status === "verify-phone" ||
      status === "login-verify" ? (
        <div className="w-full">
          <ForgotPassword />
        </div>
      ) : null}
      {status === "reset-password" ? (
        <div>
          <ResetPassword />
        </div>
      ) : null}
      <div></div>
    </div>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["register", "common", "error"])),
  },
});
export default login;
