import React, { useState } from 'react';

export default function WhyChooseUs2() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };
    return (
        <>

        <section className="why-choose-us-two">
          <div className="icon-dots-3"></div>
          <div className="float-image"><img src="/images/resource/float-img-5.png" alt="Image"/></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="content-column col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                  <div className="inner-column">
                    <div className="sec-title"> <span className="sub-title">WHY US?</span>
                      <h2 className="words-slide-up text-split">The complete solution <br/>for all kind of transport</h2>
                    </div>
                    <div className="row"> 

                      <div className="exp-box col-sm-4">
                        <div className="inner">
                          <h1 className="count">20</h1>
                          <h6 className="title">Years Of <br/>Experience</h6>
                        </div>
                      </div>
                      <div className="blocks-column col-sm-8">

                        <div className="choose-block">
                          <div className="inner-box"> <i className="icon flaticon-trolley-2"></i>
                            <div className="content">
                              <h5 className="title">Easy Payments</h5>
                              <div className="text">We strongly support best <br/>practice sharing across</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="choose-block">
                          <div className="inner-box"> <i className="icon flaticon-cargo-1"></i>
                            <div className="content">
                              <h5 className="title">End to End Solutions</h5>
                              <div className="text">We strongly support best <br/>practice sharing across</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs-column col-lg-6 wow fadeInRight">
                  <div className="inner-column"> 

                    <div className="image-box">
                      <figure className="image"><img src="/images/resource/choose2-1.jpg" alt="Image"/></figure>
                    </div>
                    <div className="why-us-tabs tabs-box"> 

                      <div className="btn-box">
                        <ul className="tab-btns tab-buttons">
                          <li className={activeIndex === 1 ? "tab-btn mr-20 nav-link active active-btn" : "tab-btn mr-20 nav-link"} onClick={() => handleOnClick(1)} data-tab="#tab1">Our Mission</li>
                          <li className={activeIndex === 2 ? "tab-btn mr-20 nav-link active active-btn" : "tab-btn mr-20 nav-link"} onClick={() => handleOnClick(2)} data-tab="#tab2">Our Mission</li>
                          <li className={activeIndex === 3 ? "tab-btn mr-20 nav-link active active-btn" : "tab-btn mr-20 nav-link"} onClick={() => handleOnClick(3)} data-tab="#tab3">Our Mission</li>
                        </ul>
                      </div>

                      <div className="tabs-content"> 

                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                          <div className="inner-box">
                            <div className="content-box">
                              <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.</div>
                              <ul className="list-style-two">
                                <li><i className="icon fa fa-arrow-right"></i> Our solutions are tested</li>
                                <li><i className="icon fa fa-arrow-right"></i> Leverage our experience in shipping</li>
                                <li><i className="icon fa fa-arrow-right"></i> Proven, and best-in class.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                          <div className="inner-box">
                            <div className="content-box">
                              <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.</div>
                              <ul className="list-style-two">
                                <li><i className="icon fa fa-arrow-right"></i> Our solutions are tested</li>
                                <li><i className="icon fa fa-arrow-right"></i> Leverage our experience in shipping</li>
                                <li><i className="icon fa fa-arrow-right"></i> Proven, and best-in class.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                          <div className="inner-box">
                            <div className="content-box">
                              <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.</div>
                              <ul className="list-style-two">
                                <li><i className="icon fa fa-arrow-right"></i> Our solutions are tested</li>
                                <li><i className="icon fa fa-arrow-right"></i> Leverage our experience in shipping</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
