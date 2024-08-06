import Link from "next/link";

const Features3 = () => {
  return (
    <>
    <section className="feature-section-three">
      <div className="icon-bus-3"></div>
      <div className="icon-city"></div>
      <div className="auto-container">
        <div className="row"> 
          <div className="content-column col-lg-7">
            <div className="inner-column">
              <div className="sec-title light"> <span className="sub-title v2">Professional</span>
                <h2 className="words-slide-up text-split">One stop solution for <br/>worldwide transport</h2>
              </div>
              <div className="row"> 
                <div className="feature-block-four col-lg-4 col-sm-6">
                  <div className="inner-box"> <i className="icon flaticon-cargo"></i>
                    <h6 className="title"><Link href="page-about">Real Time Tracking</Link></h6>
                    <div className="text">We strongly support best practice sharing across</div>
                  </div>
                </div>
                <div className="feature-block-four col-lg-4 col-sm-6">
                  <div className="inner-box"> <i className="icon flaticon-parcel"></i>
                    <h6 className="title"><Link href="page-about">Safe & Secure</Link></h6>
                    <div className="text">We strongly support best practice sharing across</div>
                  </div>
                </div>
                <div className="feature-block-four col-lg-4 col-sm-6">
                  <div className="inner-box"> <i className="icon flaticon-global"></i>
                    <h6 className="title"><Link href="page-about">Global Transport</Link></h6>
                    <div className="text">We strongly support best practice sharing across</div>
                  </div>
                </div>
              </div>
              <Link href="tel:+9298006869" className="info-btn"> <i className="icon fa fa-phone"></i> <small>Call for free</small> <strong>+92 (9800) 6869</strong> </Link>
            </div>
          </div>
          <div className="image-column col-lg-5">
            <div className="inner-column">
              <div className="image-box">
                <figure className="image overlay-anim"><img src="/images/resource/feature3-1.jpg" alt="Image"/></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Features3
