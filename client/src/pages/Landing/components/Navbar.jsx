import React from 'react';
import antariksh_logo from "../../../assets/antariksh-logo.png";
import './Navbar.css'; // Adjusted path if needed
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={antariksh_logo} alt="logo" width="120px" />
      </div>
      <nav>
        <ul id="navbar_nav_items">
          <li>
            <Link
              className="navbar_link"
              activeClass="navbar_link_active"
              to="home" spy="true"
              smooth={true} duration={200}
              offset={-100}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="navbar_link"
              activeClass="navbar_link_active"
              to="EventsPage" spy="true"
              smooth={true} duration={200}
              offset={-100}>
              Events
            </Link>
          </li>
          <li>
            <Link
              className="navbar_link"
              activeClass="navbar_link_active"
              to="Members" spy="true"
              smooth={true} duration={200}
              offset={-100}>
              Members
            </Link>
          </li>
          <li>
            <Link
              className="navbar_link"
              activeClass="navbar_link_active"
              to="gallery" spy="true"
              smooth={true} duration={200}
              offset={-100}>
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="navbar_link"
              activeClass="navbar_link_active"
              to="about" spy="true"
              smooth={true} duration={200}
              offset={-100}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
