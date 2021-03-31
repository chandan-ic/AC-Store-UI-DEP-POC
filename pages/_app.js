import '../styles/globals.css'
import {wrapper} from '../store';
import MainLayout from '../components/layouts/main';


function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
       <Component {...pageProps} />
  </MainLayout>
    )
}

export default wrapper.withRedux(MyApp);
