import React from 'react';
import './Footer.css';
import Logo from '../../assets/antariksh-logo.png';
import Instagram from '../../assets/Instagram.svg';
import Twitter from '../../assets/Twitter.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import Email from '../../assets/Email.svg';

function Footer() {
    return (
        <div id="Footer">
            <div className="footer-main">
                <div className="footer-logo">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={Logo} alt="Antariksh Logo" />
                    </a>
                </div>

                <div className="links-container">
                    <div>
                        <h3 className="footer-title">Club</h3>
                        <ul className="footer-links">
                            <li><a href="#About">About Us</a></li>
                            <li><a href="#EventsPage">Our Events</a></li>
                            <li><a href="#Members">Members</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-title">Get Help</h3>
                        <ul className="footer-links">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="/">Antariksh</a></li>
                            <li><a href="mailto:antariksh_nitkkr@gmail.com">Message</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-title">Others</h3>
                        <ul className="footer-links">
                            <li><a href="#Gallery">Gallery</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Support Details</a></li>
                        </ul>
                    </div>
                </div>

                <div className="social-medias">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="icons">
                        <a href="https://www.instagram.com/antariksh_nitkkr?igsh=MXg4ZzRscnk4cGF3eg==" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        {/* <a href="https://twitter.com/antariksh_nitkkr" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="Twitter" />
                        </a> */}
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
            <div className="footer-end">
                <p>Made with ❤️ by Antariksh</p>
            </div>
        </div>
    );
}

export default Footer;
