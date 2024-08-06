import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from "next/link";

const About1 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

<section className="about-section pt-0">
    <div className="icon-plane-3"></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2">
            <div className="inner-column">
              <div className="sec-title"> <span className="sub-title">Who we are</span>
              <h2 className="words-slide-up text-split">Empowering Industry Leaders with Global Logistics</h2></div>
<div className="text two">
<div className="text">Our global operations span across multiple transportation sectors, driving innovation and operational excellence through 3PL partnerships worldwide.</div></div>
<div className="text">With 15 years of experience, we deliver comprehensive logistics and 3PL solutions tailored to the unique demands of industry giants worldwide.</div>
    <div className="bottom-box">
  <div className="author-box">
                  <div className="inner">
                    <figure className="image"><img src="/images/resource/about1-thumb1.jpg" alt="Image"/></figure>
                    <div className="author-info">
                      <h6 className="name">Christian Debejna</h6>
                      <div className="designation">CEO, Skander Global</div>
                      <img src="/images/resource/sign.png" alt="Signature"/>
                    </div>
                  </div>
                </div>
                <ul className="list-style-two">
                  <li><i className="fa fa-arrow-alt-circle-right"></i> Tested and trusted globally</li>
                  <li><i className="fa fa-arrow-alt-circle-right"></i> Extensive shipping expertise</li>
                  <li><i className="fa fa-arrow-alt-circle-right"></i> Proven, best-in-class services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="image-box">
                <figure className="image overlay-anim"><img src="/images/resource/about1-1.jpg" alt="Image"/></figure>
                <figure className="image-2 overlay-anim wow zoomIn" data-wow-delay="300ms"><img src="/images/resource/about1-2.jpg" alt="Image"/></figure>
              </div>
              <div className="video-box">
                <h6 className="title">Highly specialized, Trade Compliant Team</h6>
                            <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default About1
