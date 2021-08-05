// import '../styles/globals.css'
// import { wrapper } from '../store';
// import MainLayout from '../components/layouts/main';
// import Router from 'next/router'
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress
// import { Provider } from 'next-auth/client';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <MainLayout>
//         <Component {...pageProps} />
//       </MainLayout>
//     </Provider>
//   )
// }

// export default wrapper.withRedux(MyApp);

import { appWithTranslation } from "next-i18next";
import ReactNotifications from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Provider } from "react-redux";
import MainLayout from "../components/Layouts/Main";
import store from "../store/index";
import "../styles/globals.css";
// import Router from 'next/router'
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <ReactNotifications />
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
