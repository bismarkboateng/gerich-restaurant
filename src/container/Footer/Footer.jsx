import React from 'react';
import './Footer.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



const Footer = () => (
  <div className="app__footer">

    <div className="app__footer-NewLetter">
      <SubHeading text="NewsLetter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p>And Never Miss Later Updates!</p>
      <div className="input__button">
        <input type="text" placeholder="Enter your email address" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>


    <div className="app__footer-actual">

        <div className="footer__left">
          <p className="p__cormorant">Contact Us</p>
          <p>Lorem Ipsum Dolor Sit Amet</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>

        <div className="footer__middle">
          <img src={images.gericht} alt="gericht images" />
          <p>The Best Way To Find Yourself Is To Loose Yourself In The</p>
          <SubHeading text="Service to human" />
          
          <div className="footer_icons">
            <FaFacebookF fontSize={20} />
            <FaTwitter fontSize={20} />
            <FaInstagram fontSize={20} />
          </div>

        </div>

        <div className="footer__right">
          <p className="p__cormorant">Working Hours</p>
          <p>Monday-Friday</p>
          <p>08:00 Am - 12:00 Am</p>

          <p>Saturday-Sunday</p>
          <p>07:00am - 11:00 Pm</p>
        </div>
    </div>
    
  </div>
);

export default Footer;
