import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';


const MenuItem = ({ title, price, tags }) => {
  return (
    <>
      <div className="app__specialMenu-menuitem_content">
        <p className="app__sepcialMenu-title p__cormorant">{ title }</p>
        <div />
        <p>{ price }</p>
    </div>
    <p className="app__specialMenu-tags">{ tags }</p>
    </>

  );
}

const SpecialMenu = () => (
  <div className="app__specialMenu">
    
    <div className="app__specialMenu-groupA">
      <SubHeading text="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>


    <div className="app__specialMenu-groupB">
      <div className="app__specialMenu-groupB_left">
        <h3 className="app__specialMenu-head">Wine & Beer</h3>
        {
          data.wines.map((wine, index) => (
            <MenuItem title={wine.title} price={wine.price} tags={wine.tags} key={wine.title +index} />
          ))
        }
        <MenuItem title="Chapel Hill Shiraz" price="$50" tags="AU" />
      </div>

      <div className="app__specialMenu-groupB-middle">
        <img src={images.menu} alt="special image" />
      </div>

      <div className="app__specialMenu-groupB-right">
      <h3 className="app__specialMenu-head">Cocktails</h3>
      {
          data.cocktails.map((cocktails, index) => (
            <MenuItem title={cocktails.title} price={cocktails.price} tags={cocktails.tags} key={cocktails.title +index} />
          ))
        }
      </div>
    </div>

  <div className="app__specialMenu-btn">
    <button type="button" className="custom__button">View More</button>
  </div>
    
  </div>
);

export default SpecialMenu;
