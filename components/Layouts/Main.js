// components/layouts/main
import Header from '../Navigation/Autoheader';
import AutoFooter from '../Navigation/AutoFooter';

const MainLayout = ({ children }) => (
  <div className="main-container theme-autocomm flex flex-col">
   <Header />
    <div className="">
        {children}
     </div>
    <AutoFooter />

  </div>
);

export default MainLayout;

