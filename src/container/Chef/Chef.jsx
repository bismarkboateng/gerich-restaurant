import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__chef app__bg">
    
    <div className="app__chef-img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__chef-content">
      <SubHeading text="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <p>
      <img src={images.quote} alt="quote image" />
      Nihil, Eveniet Aliquid Culpa Officia Aut! Impedit Sit Sunt Quaerat, Odit
      </p>
      <p>
      Tenetur Error, Harum Nesciunt Ipsum Debitis Quas Aliquid. <br />
      Reprehenderit, Quia. Quo Neque Error Repudiandae Fuga? <br />
      Ipsa Laudantium Molestias Eos Sapiente Officiis Modi At<br />
      Sunt Excepturi Expedita Sint? Sed Quibusdam
      </p>

      <div className="app__chef-content__details">
        <p className="app__chef-conent__details-name">Kevin Leo</p>
        <p className="app__chef-founder">Chef & Founder</p>
        <img src={images.sign} alt="chef's signature" />
      </div>
    </div>
  </div>
);

export default Chef;
