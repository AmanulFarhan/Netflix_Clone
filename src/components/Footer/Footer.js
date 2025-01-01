import React from 'react'
import './Footer.css'

function Footer() {
    return (
      <footer>
        <div className="container">
            <div className="rows">
                <div className="footer-col">
                    
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shopping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Binge</h4>
                    <ul>
                        <li><a href="#">romantic</a></li>
                        <li><a href="#">gore</a></li>
                        <li><a href="#">survival</a></li>
                        <li><a href="#">comedy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className='social-links'>
                        <a href=""><i className='fab fa-facebook-f'></i></a>
                        <a href=""><i className='fab fa-twitter'></i></a>
                        <a href=""><i className='fab fa-instagram'></i></a>
                        <a href=""><i className='fab fa-linkedin-in'></i></a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  