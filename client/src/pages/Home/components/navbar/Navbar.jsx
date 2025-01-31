import React from 'react';
import { Link as RouterLink } from "react-router-dom"; 
import "./styles.css";
import Antariksh_Logo from '../../../../assets/antariksh-logo.png';

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="navbar-brand">
                <RouterLink to="/"> {/* Use RouterLink for home */} 
                    <img src={Antariksh_Logo} alt="Logo" className="logo" />
                </RouterLink>
            </div>
            <div id="navbar_nav_items">
                <RouterLink
                    className="navbar_link"
                    to="/" // Use RouterLink with href-style for scrollable section
                >
                    Home
                </RouterLink>
                <RouterLink
                    className="navbar_link"
                    to="/events" // Use RouterLink with href-style for scrollable section
                >
                    Events
                </RouterLink>
                <RouterLink
                    className="navbar_link"
                    to="/members" // Use RouterLink with href-style for scrollable section
                >
                    Members
                </RouterLink>
                
                <RouterLink to="/newgallery" className="navbar_link">
                    Gallery
                </RouterLink>

                <RouterLink
                    className="navbar_link"
                    to="/about" // Use RouterLink with href-style for scrollable section
                >
                    About
                </RouterLink>
            </div>
        </div>
    );
}

export default Navbar;
