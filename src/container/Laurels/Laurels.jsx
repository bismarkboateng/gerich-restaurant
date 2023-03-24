import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';


const AwardCard = ({info : {imgUrl, title, subtitle}}) => (
    <div className="app__laurels-info_content">
      <div className="app__laurels-imgs">
        <img src={imgUrl} alt="awards" />
      </div>

      <div className="app__laurels-content">
        <p className="p__cormorant">{title}</p>
        <p>{subtitle}</p>
      </div>

     </div>
)

const Laurels = () => (
  <div className="app__laurels app__bg">

    <div className="app__laurels-info">
      <SubHeading text="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      {
        data.awards.map((info) => <AwardCard info={info} key={info.title} />) 
      }
    </div>

    <div className="app__laurels-img">
      <img src={images.laurels} alt="laurels image" />
    </div>

  </div>
);

export default Laurels;
