import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";


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
        
        <img src='/images/header1.png' alt='Header Logo' />        
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Plants & Pots</a></li>
                    <li><a href="#services">Tools<FaAngleDown className="down-arrow-icon" /></a></li>
                    <li><a href="#contact">Our Services<FaAngleDown className="down-arrow-icon" /></a></li>
                    <li><a href="#contact">Blog</a></li>
                    <li><a href="#contact">Our Story</a></li>
                    <li><a href="#contact">FAQs</a></li>
                </ul>
            </nav>
        </header>
        <div className="icons">
            <div>
                <Link to="/profile"><CgProfile /></Link>
                <p>My Profile</p>
            </div>
            <div className="cart-icon">
                <Link to="/cart">
                <BsCart2 />
                <span className="cart-count">3</span>
                <p>Cart</p>
                </Link>
            </div>
        </div>
    </div>
 </div>
  );
};

export default Header;
