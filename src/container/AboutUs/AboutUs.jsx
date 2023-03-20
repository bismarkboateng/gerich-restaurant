import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center">

    <div className="app__aboutus-content">
      <SubHeading text="About Us" />
      <p className="p__opensans app__aboutus-content-p">
      Optio, Eaque Rerum! Provident Similique Accusantium Nemo Autem.<br />
      Veritatis Obcaecati Tenetur Iure Eius Earum Ut Molestias Architecto Voluptate Aliquam
      </p>
      <button type="submit">Know More</button>
    </div>

    <div className="app__aboutus-icon">
      <img src={images.G} alt="g image" />
    </div>

    <div className="app__aboutus-image">
      <img src={images.knife} alt="knife image" />
    </div>

    <div className="app__aboutus-history">
      <SubHeading text="Our History" />
      <p className="p__opensans app__aboutus-content-p">
      Optio, Eaque Rerum! Provident Similique Accusantium Nemo Autem.<br />
      Veritatis Obcaecati Tenetur Iure Eius Earum Ut Molestias Architecto Voluptate Aliquam
      </p>
      <button type="submit">Know More</button>
    </div>
  </div>
);

export default AboutUs;
