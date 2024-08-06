import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Video = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

<section className="video-section">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/7.jpg)' }}></div>
    <div className="overlay-2"></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="title-box">
          <h2 className="title words-slide-up text-split">Providing efficient <br/>warehouse & logistic <br/>services internationally.</h2>
        </div>
        <div className="video-box">
          <div className="icon-box">
            <h4 className="title">Watch Video</h4>
            <img src="/images/icons/icon-arrow-2.png" alt="icon"/>
          </div>
          <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" /><span className="ripple"></span></a>
        </div>
      </div>
    </div>
  </section>
  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video
