import React from 'react';
import antariksh_logo from "../../../assets/antariksh-logo.png";
import '../components/Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="ant-logo">
        <img src={antariksh_logo} alt="logo" width="120px" />
      </div>
      <nav>
        <ul>
          <li><a href="#" className="active">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTENT</a></li>
          <li><a href="#">OTHERS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
