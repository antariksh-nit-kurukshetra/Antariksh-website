import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Admin from '../pages/Admin/Admin';
import EventsPage from '../pages/Events/EventsPage';
import Members from '../pages/Members/Members';
import About from '../pages/About/About';
import NewGallery from '../pages/NewGallery/NewGallery';
import MainLayout from '../pages/Layout/MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes using the MainLayout (Navbar, Footer, etc.) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Separate Layout for Events */}
        <Route element={<MainLayout />}>
            <Route path="/events" element={<EventsPage />} />
        </Route>

      {/* Separate Layout for Members */}
      <Route element={<MainLayout />}>
            <Route path="/members" element={<Members />} />
        </Route>

      {/* Separate Layout for Gallery */}
      <Route element={<MainLayout />}>
        <Route path="/newgallery" element={<NewGallery />} />
      </Route>

      {/* Separate Layout for About */}
      <Route element={<MainLayout />}>
            <Route path="/about" element={<About />} />
      </Route>

      {/* Admin Route (Without Navbar & Footer) */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
