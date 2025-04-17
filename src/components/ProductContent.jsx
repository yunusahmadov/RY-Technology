import React, { useRef, useState } from 'react';
// import './ProductContent.css';
import playbutton from '../assets/playbutton.png'
function ProductContent({ videocontent,texttoptitle, texttop, textbottom, img1, img2,preview,textbottomtitle }) {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlay = () => {
    setIsVideoPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="product-page">
      <div className="product-page_top">
        <div className="product-page_top-left" onClick={handlePlay}>
          {!isVideoPlaying && (
            <div className="video-preview">
              <img src={preview} alt="Видео превью" className="preview-img" />
              <img
                src={playbutton}
                alt="Play"
                className="play-icon"
              />
            </div>
          )}
          <video
            ref={videoRef}
            src={videocontent}
            muted
            controls
            playsInline
            className={`video-element ${isVideoPlaying ? 'show' : 'hide'}`}
          />
        </div>

        <div className="product-page_top-right">
          <h2>{texttoptitle}</h2>
          <p>{texttop}</p>
        </div>
      </div>

      <div className="product-page_bottom">
        <div className="product-bottom-left">
            <h2>{textbottomtitle}</h2>
          <p>{textbottom}</p>
        </div>
        <div className="product-bottom-right">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
