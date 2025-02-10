import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Blogs from './pages/Blogs/Blogs';
import Admin from './pages/Admin/Admin';
import Members from './pages/Members/Members';
import Footer from './pages/Footer/Footer';
import EventsPage from './pages/Events/EventsPage';
import About from './pages/About/About';
import Navbar from './pages/Landing/components/Navbar'; // Updated import
import NewsBox from './pages/News/News-Box';
import Land from './pages/Landing/Land'; // Add this import
// import { useEffect, useState } from 'react';
import './fonts/fonts.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Land />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes >
      {/* <Home /> */}
      <EventsPage />
      <Members />
      {/* <Blogs /> */}
      {/* <NewsBox/> */}
      <Gallery />
      <About />
      <Footer />
    </>
  );
}

export default App;
