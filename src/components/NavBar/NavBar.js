import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div>
      <div className="navbar">
        {/* Right Section: Netflix logo and navigation links */}
        <div className="navbar-right">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">TV-Shows</Link></li>
            <li><Link to="/services">Movies</Link></li>
            <li><Link to="/contact">News & Popular</Link></li>
            <li><Link to="/mylist">My List</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Left Section: Icons and Avatar */}
        <div className="navbar-left">
          <div className="navbar__icons">
            <button className="navbar__icon">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="navbar__icon">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
          {/* Avatar with Dropdown */}
          <div className="avatar-container">
            <img
              className="avatar"
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
              alt="Avatar"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="dropdown">
                <button className="dropdown-item">Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
