import { server } from "config";
import { store as Notification } from "react-notifications-component";
import store from "store/index";
import { getToaster } from "utils/helper/notificationHelper";
import { errorActions } from "components/Common/store/error/error-slice";
import { getCookie } from "utils/helper/cookieFunc";
import { loginActions } from "components/LoginUI/store/login-slice";

export const apiCall = async (apiConfig, notification = false) => {
  // if (Boolean(getCookie("is_logged_in"))) {
  //   const expiry = new Date(getCookie("expiry"));
  //   const date = new Date();
  //   if (expiry - date <= 0) {
  //     removeCookie("is_logged_in");
  //     removeCookie("user");
  //     removeCookie("token", null);
  //     removeCookie("x", null);
  //     removeCookie("y", null);
  //     dispatch(loginActions.setLoggedIn(false));
  //   }
  // }

  store.dispatch(errorActions.resetErrors());
  store.dispatch(loginActions.setInvalidUser(false));

  const response = await fetch(`${server}${apiConfig.url}`, {
    method: apiConfig.method,
    body: apiConfig.body,
    headers: apiConfig.headers
      ? apiConfig.headers
      : defaultHeader(apiConfig?.customHeader),
    credentials: "same-origin",
  });

  if (response.status === 200) {
    const responseData = await response.json();
console.log("responsedata in apicall=",apiConfig.url," data=",responseData)
    if (notification) {
      const notificationMsg = {
        title: "Success",
        message: responseData?.responseData?.messages[0].messageText,
        type: "success",
      };
      Notification.addNotification(getToaster(notificationMsg));
    }

    return responseData;
  } else if (response.status === 400) {
    const responseData = await response.json();
    store.dispatch(errorActions.setErrorList([...responseData.errorList]));

    return null;
  } else if (response.status === 401) {
    const responseData = await response.json();
    store.dispatch(errorActions.setErrorList([...responseData.errorList]));
    if (responseData?.errorList[0]?.code === "E663") {
      store.dispatch(loginActions.setInvalidUser(true));
    }
    return null;
  } else if (response.status === 417) {
    const responseData = await response.json();
    store.dispatch(errorActions.setErrorList([...responseData.errorList]));
    if (responseData?.errorList[0]?.code === "E722") {
      store.dispatch(loginActions.setInvalidUser(true));
    }
    return null;
  } else {
    let defaultErrorMsg = [
      {
        message: "Something went wrong. Please try after some time.",
      },
    ];
    store.dispatch(errorActions.setErrorList([...defaultErrorMsg]));

    throw new Error("Something went wrong!");
  }
};

const defaultHeader = (customerHeader) => {
  const token = getCookie("token");
  const cd = getCookie("x");
  const cm = getCookie("y");

  if (!customerHeader) {
    return {
      "Content-Type": "application/json",
    };
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    Authorization: `Bearer ${JSON.parse(token).accessToken}`,
    cd: `${cd}`,
    cm: `${cm}`,
  };
};
