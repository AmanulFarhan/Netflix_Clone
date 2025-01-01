import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import social icons
import './social_icons.css';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaYoutube />
      </a>
    </div>
  );
}

export default SocialIcons;
