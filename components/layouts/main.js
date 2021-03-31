// components/layouts/main
import Header from '../navigation/autoheader';

const MainLayout = ({ children }) => (
  <div className="main-container theme-autocomm">
    <Header />
    <div className="content-wrapper">
        {children}</div>
  </div>
);

export default MainLayout;