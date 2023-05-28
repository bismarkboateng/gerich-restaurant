import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import './Gallery.css';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
const GalleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];



const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollRight += 300;
    }
  }

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
          <SubHeading text="Instagram" />
          <h1 className="headtext__cormorant">Photto Gallery</h1>
          <p>
          Quo Neque Error Repudiandae Fuga? <br />
          Ipsa Laudantium Molestias Eos Sapiente <br />
          Officiis Modi At Sunt Excepturi Expedita Sint? <br />
          Sed Quibusd <br />
          </p>
          <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-ImageSlider">
        {
          GalleryImages.map((img, index) => (
            <div className="app__gallery-images_card" key={`gallery_image-${index+1}`}>
              <img src={img} className="app__gallery-ImageSlider-img" alt="images" />
              <BsInstagram />
            </div>

          ))
        }
      </div>
      <BsArrowLeftShort 
      fontSize={35} 
      className="app__gallery-leftArrow" 
      style={{color: "white"}}
      onClick={() => scroll("left")}
      />
      
      <BsArrowRightShort 
      fontSize={35} 
      className="app__gallery-RightArrow" 
      style={{color: "black"}}
      onClick={() => scroll("right")}
      />
   </div>
  );

}

export default Gallery;
