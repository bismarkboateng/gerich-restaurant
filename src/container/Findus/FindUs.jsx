import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './findus.css';

const FindUs = () => (
  <div className="app__findus app__bg">
    <div className="app__findus-content">
      <SubHeading text="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p>Sit Laborum Ab, Eius Fugit Doloribus Tenetur Fugiat</p>
      <p className="p__findus">Opening Hours</p>
      <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
      <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
      <button class="custom__button">Visit Us</button>
    </div>

    <div className="app__findus-img">
      <img src={images.findus} alt="findus image" />
    </div>

  </div>
);

export default FindUs;
