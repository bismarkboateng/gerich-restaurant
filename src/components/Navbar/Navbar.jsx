import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.css';
import { GiHamburgerMenu, Gi } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';



const Navbar = () => {

  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-img">
        <img src={ images.gericht } alt="gerich-logo" />
      </div>

      <div className="app__navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="app__navbar-links_registerLogin">
        <a href="#login">LogIn / Register </a>
        <div />
        <p>Book a Table </p>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu onClick={() => setToggleMenu(true)}/>

        {toggleMenu && 
         <div className="app__navbar-smallscreen_overlay">
          <MdOutlineRestaurantMenu onClick={() => setToggleMenu(false)}/>
          <div className="app__navbar-smallscreen-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
         </div>
        }
      </div>
    </div>
  );
}

export default Navbar;
