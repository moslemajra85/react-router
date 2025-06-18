import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/about" className="nav-link">
          <FaInfoCircle className="nav-icon" />
          <span>About</span>
        </Link>
        <Link to="/contact" className="nav-link">
          <FaEnvelope className="nav-icon" />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
