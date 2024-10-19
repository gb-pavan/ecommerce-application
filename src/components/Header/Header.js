import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser,faCartShopping,faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>

   <div className='top-card'>
    <div></div>
    <div>
        <p>Free shopping on orders above 999.</p>
    </div>
    <div>
        <p>call us on: +919876805120 </p>
    </div>
   </div>

    <div className='header'>
        <div className='image-bg'>
            <img src='/images/header1.png' alt='Header Logo' />
        </div>
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Plants & Pots</a></li>
                    <li><a href="#services">Tools<FontAwesomeIcon icon={faCircleChevronDown} /></a></li>
                    <li><a href="#contact">Our Services<FontAwesomeIcon icon={faCircleChevronDown} /></a></li>
                    <li><a href="#contact">Blog</a></li>
                    <li><a href="#contact">Our Story</a></li>
                    <li><a href="#contact">FAQs</a></li>
                </ul>
            </nav>
        </header>
        <div className="icons">
            <div>
            <Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
            <p>My Profile</p>
            </div>
            <div>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />
            <p>Cart</p></Link></div>
        </div>
    </div>
 </div>
  );
};

export default Header;
