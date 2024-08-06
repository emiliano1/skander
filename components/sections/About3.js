import Link from "next/link";

const About3 = () => {
  return (
    <>
    <section className="about-section-three pt-0">
      <div className="icon-plane-2 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row"> 
            <div className="content-column col-lg-6 order-lg-2">
              <div className="inner-column">
                <div className="sec-title"> <span className="sub-title">Who we are</span>
                  <h2 className="words-slide-up text-split">Delivering Monster for industry leaders</h2>
                  <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.</div>
                </div>
                <div className="about-block-three">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon flaticon-trolley-2"></i></div>
                    <div className="content">
                      <h5 className="title">Safe & Secure Delivery</h5>
                      <div className="text">We strongly support best practice sharing <br/>across our operations around .</div>
                    </div>
                  </div>
                </div>
                <div className="about-block-three">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon flaticon-shipping-3"></i></div>
                    <div className="content">
                      <h5 className="title">Professional Services</h5>
                      <div className="text">We strongly support best practice sharing <br/> across our operations around .</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim"><img src="/images/resource/about3-1.jpg" alt="Image"/></figure>
                  <div className="exp-box">
                    <div className="inner">
                      <div className="icon-box"><i className="icon fal fa-star"></i></div>
                      <ul className="rating">
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                      </ul>
                      <h6 className="review">4.5 (1,200 reviews)</h6>
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
  );
};
export default About3
