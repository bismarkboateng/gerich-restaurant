import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ text }) => (
  <div className="app__subheading">
    <p className="p__cormorant"> { text } </p>
    <img src={images.spoon} alt="spoon image" />
  </div>
);

export default SubHeading;
