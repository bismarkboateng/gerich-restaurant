import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__header-content">
      <SubHeading text="Chase The New Flavour" />
      <h1 className="app__header-content_h1">
        THE KEY TO A FINE <br />
        DINING
      </h1>

      <p className="app__header-content_p">
      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.<br />
      Maxime Mollitia, Molestiae Quas Vel Sint Commodi <br />
      Repudiandae Consequuntur Voluptatum Laborum Numquam<br />
      Blanditiis Harum Quisquam Eius Sed Odit Fugiat Iusto Fuga
      Praesentium
      </p>

      <button type="submit" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome image" />
    </div>

  </div>
);

export default Header;
