import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ text }) => (
  <div className="app__subheading">
    <h5 className="p__opensans"> { text } </h5>
    <img src={images.spoon} alt="spoon image" />
  </div>
);

export default SubHeading;
