import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">iBlog.</Link> {/* Make the logo a Link */}
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Portfolio</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
      <div className="nav-right">
        <Link to="/auth" className="nav-link">
          <FaUser className="user-icon" />
        </Link>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
    </nav>
  );
}

export default Navbar;



