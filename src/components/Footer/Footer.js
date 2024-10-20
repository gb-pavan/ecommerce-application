import React from 'react';
import './Footer.css';
import { FaInstagram,FaFacebook,FaYoutube,FaLinkedin,FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section newsletter">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut Necessibus Enim</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Your Email Address" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section about-us">
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section our-services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section useful-links">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        <div className="footer-section get-in-touch">
          <h3>GET IN TOUCH</h3>
          <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="chaperone-info">
          <h3>CHAPERONE</h3>
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium.</p>
        </div>
        <div className="social-media">
          <h4>Follow us on</h4>
          <div className="social-icons">
            <FaInstagram className='icon-spacing'/>
            <FaFacebook className='icon-spacing' />
            <FaSquareThreads className='icon-spacing' />
            <FaYoutube className='icon-spacing' />
            <FaLinkedin className='icon-spacing' />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
