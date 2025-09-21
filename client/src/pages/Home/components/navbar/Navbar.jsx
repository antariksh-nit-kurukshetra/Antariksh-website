import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom"; 
import "./styles.css";
import Antariksh_Logo from '../../../../assets/antariksh-logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="navbar">
            <div className="navbar-brand">
                <RouterLink to="/"> 
                    <img src={Antariksh_Logo} alt="Logo" className="logo" />
                </RouterLink>
                {/* Hamburger Menu Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            
            <ul id="navbar_nav_items" className={menuOpen ? "show" : ""}>
                <li><RouterLink className="navbar_link" to="/">Home</RouterLink></li>
                <li><RouterLink className="navbar_link" to="/events">Events</RouterLink></li>
                <li><RouterLink className="navbar_link" to="/members">Members</RouterLink></li>
                <li><RouterLink className="navbar_link" to="/newgallery">Gallery</RouterLink></li>
                <li><RouterLink className="navbar_link" to="/about">About</RouterLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
