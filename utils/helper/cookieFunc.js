import cookie from 'cookie';
import * as Cookies from 'js-cookie';
// import Cookies, { CookieAttributes } from 'js-cookie';
import router from 'next/router';

const cookieParams = {};

/**
 * To Check User is LoggedIn or Not
 * @param reqCookies
 * @returns boolean
 */
export const isLoggedIn = (reqCookies = null) => {
    // if we don't have request cookies, get the cookie from client
    if (!reqCookies) {
        return !!Cookies.get('is_logged_in');
    }
    // otherwise get cookie from server
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return !!cookie.parse(reqCookies).is_logged_in;
};

/**
 * Set Cookie Values
 * @param cookieName
 * @param cookieValue
 * @param isReload
 */
export const setCookie = (cookieName, cookieValue, isReload = false) => {
    Cookies.set(cookieName, cookieValue, cookieParams);
    if (isReload) {
        router.reload();
    }
};

/**
 * Get Cookie Values By Cookie Name
 * @param cookieName
 */
export const getCookie = (cookieName) => {
    if (!Cookies.get(cookieName)) {
        return null;
    }
    return JSON.parse(JSON.stringify(Cookies.get(cookieName)?Cookies.get(cookieName).toString():""));
};

/**
 * Remove Cookie By Name
 * @param cookieName
 * @param isRedirect
 * @param redirectRoute
 */
export const removeCookie = (cookieName, isRedirect = false, redirectRoute = '') => {
    Cookies.remove('autocomm_session', cookieParams);
    Cookies.remove(cookieName, cookieParams);
    if (isRedirect) {
        // router.push(redirectRoute);
        window.location.href = redirectRoute;
    }
};
