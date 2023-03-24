import React, { useRef, useState } from 'react';
import { meal } from '../../constants';
import './Intro.css';
// import { Video } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const Intro = () => {
  const [Isplaying, setIsPlaying] = useState(false);
  const VidRef = useRef();


  const handleVideo = () => {
    setIsPlaying((prevPlaying) => !prevPlaying);
    Isplaying ? VidRef.current.pause() : VidRef.current.play()
  }


  return (
    <div className="app__video">

      <video 
        src={meal}
        ref={VidRef}
        type="video/mp4"
        loop
        controls={false}
        muted 
        />

        <div className="app__video-overlay flex__center">
          <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
            {
              Isplaying
              ? <BsPauseFill color="#fff" fontSize={30} />
              : <BsFillPlayFill color="#fff" fontSize={30} />
            }
          </div>
        </div>


    </div>
  );
}


export default Intro;
