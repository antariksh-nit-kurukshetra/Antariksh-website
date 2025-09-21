import { Outlet } from 'react-router-dom';
import Navbar from '../Home/components/navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
