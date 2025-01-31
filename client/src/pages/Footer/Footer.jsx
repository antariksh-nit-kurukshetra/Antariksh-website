import React from 'react';
import './Footer.css';
import Logo from '../../assets/antariksh-logo.png';
import Instagram from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import Email from '../../assets/Email.svg';

function Footer() {
    return (
        <footer id="Footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={Logo} alt="Antariksh Logo" />
                    </a>
                    <p className="footer-tagline">Exploring the Universe, One Step at a Time.</p>
                </div>

                {/* Club Links */}
                <div className="footer-links-section">
                    <h3 className="footer-title">Club</h3>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/events">Our Events</a></li>
                        <li><a href="/members">Members</a></li>
                        <li><a href="/newgallery">Gallery</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="social-medias">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="icons">
                        <a href="https://www.instagram.com/antariksh_nitkkr?igsh=MXg4ZzRscnk4cGF3eg==" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="http://www.linkedin.com/in/antariksh-nit-kurukshetra" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="mailto:antariksh_nitkkr@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={Email} alt="Email" />
                        </a>
                    </div>
                </div>
            </div>

            <hr />

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <p>📧 Contact us at <a href="mailto:antariksh_nitkkr@gmail.com">antariksh_nitkkr@gmail.com</a></p>
                <p>Made with ❤️ by Antariksh</p>
            </div>
        </footer>
    );
}

export default Footer;
